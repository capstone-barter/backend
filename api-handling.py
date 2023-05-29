from requests_oauthlib import OAuth1Session

def authenticate(consumer_key, consumer_secret):
    # Note: You'll need to obtain oauth_token and oauth_token_secret.
    # This usually involves a separate request.
    oauth = OAuth1Session(consumer_key, client_secret=consumer_secret)

    # Returns the authenticated session
    return oauth

from datetime import date, timedelta

def create_url(nifEmpresa):
    # Calculate the first and last day of the previous month
    prev_month_end = date.today().replace(day=1) - timedelta(days=1)
    prev_month_start = prev_month_end.replace(day=1)
    
    # Format them in the desired format
    fechaDesde = prev_month_start.strftime("%Y-%m-%d")
    fechaHasta = prev_month_end.strftime("%Y-%m-%d")

    url = f"https://api.cnmc.gob.es/ficheros/v1/consultar?idProcedimiento=2&nifEmpresa={nifEmpresa}&estado=DISPONIBLE&fechaDesde={fechaDesde}&fechaHasta={fechaHasta}"

    return url

def get_download_link(oauth, url):
    response = oauth.get(url)

    # This will depend on how the API structures the response
    # Replace 'download_link' with the actual key
    download_link = response.json().get('download_link', '')

    if not download_link:
        raise Exception("Download link not found in the response")

    return download_link

from azure.storage.filedatalake import DataLakeServiceClient

def download_data_to_azure(oauth, download_link, account_name, account_key, file_system_name, file_name):
    data_service_client = DataLakeServiceClient(account_url=f"https://{account_name}.dfs.core.windows.net", credential=account_key)

    file_system_client = data_service_client.get_file_system_client(file_system_name)
    
    # Get the data
    response = oauth.get(download_link)
    data = response.content

    # Upload the data to Azure
    file_client = file_system_client.get_file_client(file_name)
    file_client.upload_data(data, overwrite=True)

def main():
    try:
        consumer_key = 'your_consumer_key'
        consumer_secret = 'your_consumer_secret'
        account_name = 'your_account_name'
        account_key = 'your_account_key'
        file_system_name = 'your_file_system_name'
        nifEmpresa = 'B12985073'

        oauth = authenticate(consumer_key, consumer_secret)
        url = create_url(nifEmpresa)
        download_link = get_download_link(oauth, url)
        download_data_to_azure(oauth, download_link, account_name, account_key, file_system_name, "downloaded_data")
        print("Data downloaded successfully")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
