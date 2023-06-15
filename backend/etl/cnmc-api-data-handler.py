from requests_oauthlib import OAuth1Session
from datetime import date, timedelta, datetime
from azure.storage.filedatalake import DataLakeServiceClient
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

# Function to authenticate using OAuth1.0
def authenticate(consumer_key, consumer_secret):
    # Create an OAuth1 session with the provided consumer_key and consumer_secret
    oauth = OAuth1Session(consumer_key, client_secret=consumer_secret)
    return oauth

# Function to create the URL to query the data
def api_url(nifEmpresa):
    # Calculate the start and end dates for the previous month
    prev_month_end = date.today().replace(day=1) - timedelta(days=1)
    prev_month_start = prev_month_end.replace(day=1)
    fechaDesde = prev_month_start.strftime("%Y-%m-%d")
    fechaHasta = prev_month_end.strftime("%Y-%m-%d")
    
    # Construct the URL for the API
    url = f"https://api.cnmc.gob.es/ficheros/v1/consultar?idProcedimiento=2&nifEmpresa={nifEmpresa}&estado=DISPONIBLE&fechaDesde={fechaDesde}&fechaHasta={fechaHasta}"
    return url

# Function to get the download link for the data
def api_download_link(oauth, url):
    # Make a GET request to the provided URL using OAuth session
    response = oauth.get(url)

    # Extract JSON data from the response
    data = response.json()
    
    # Raise an exception if data is not present
    if not data:
        raise Exception("No data found in the response")
    
    # Convert date string to datetime object for each entry in data
    for obj in data:
        obj['fechaDisponibilidad'] = datetime.strptime(obj['fechaDisponibilidad'], "%Y-%m-%d %H:%M:%S")

    # Sort the data based on the date in descending order
    data.sort(key=lambda obj: obj['fechaDisponibilidad'], reverse=True)

    # Get the download link from the latest entry
    download_link = data[0].get('uriDescarga', '')
    
    # Raise an exception if the download link is not found
    if not download_link:
        raise Exception("Download link not found in the response")

    return download_link

# Function to download the data and save it to Azure Data Lake
def azure_upload(oauth, download_link, account_name, account_key, file_system_name, file_name):
    # Initialize DataLakeServiceClient with Azure account information
    data_service_client = DataLakeServiceClient(account_url=f"https://{account_name}.dfs.core.windows.net", credential=account_key)
    
    # Get the file system client
    file_system_client = data_service_client.get_file_system_client(file_system_name)
    
    # Make a GET request to download the data from the link
    response = oauth.get(download_link)
    data = response.content
    
    # Get the file client and upload data to Azure Data Lake
    file_client = file_system_client.get_file_client(file_name)
    file_client.upload_data(data, overwrite=True)

# Main function to run the script
def main():
    try:
        # Set up Azure Key Vault client to retrieve secrets
        credential = DefaultAzureCredential()
        secret_client = SecretClient(vault_url="https://<your-key-vault-name>.vault.azure.net", credential=credential)
        
        # Retrieve secrets from Azure Key Vault
        consumer_key = secret_client.get_secret('CONSUMER_KEY').value
        consumer_secret = secret_client.get_secret('CONSUMER_SECRET').value
        account_name = secret_client.get_secret('ACCOUNT_NAME').value
        account_key = secret_client.get_secret('ACCOUNT_KEY').value
        file_system_name = secret_client.get_secret('FILE_SYSTEM_NAME').value
        nifEmpresa = secret_client.get_secret('NIFEMPRESA').value
        
        # Authenticate and create the API URL
        oauth = authenticate(consumer_key, consumer_secret)
        url = api_url(nifEmpresa)
        
        # Get the download link and download data to Azure Data Lake
        download_link = api_download_link(oauth, url)
        azure_upload(oauth, download_link, account_name, account_key, file_system_name, "downloaded_data")
        
        print("Data downloaded successfully")
    except Exception as e:
        print(f"An error occurred: {e}")

# Entry point of the script
if __name__ == "__main__":
    main()
