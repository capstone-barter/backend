from requests_oauthlib import OAuth1Session
from datetime import date, timedelta
from azure.storage.filedatalake import DataLakeServiceClient
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

def authenticate(consumer_key, consumer_secret):
    oauth = OAuth1Session(consumer_key, client_secret=consumer_secret)
    return oauth

def create_url(nifEmpresa):
    prev_month_end = date.today().replace(day=1) - timedelta(days=1)
    prev_month_start = prev_month_end.replace(day=1)
    fechaDesde = prev_month_start.strftime("%Y-%m-%d")
    fechaHasta = prev_month_end.strftime("%Y-%m-%d")
    url = f"https://api.cnmc.gob.es/ficheros/v1/consultar?idProcedimiento=2&nifEmpresa={nifEmpresa}&estado=DISPONIBLE&fechaDesde={fechaDesde}&fechaHasta={fechaHasta}"
    return url

def get_download_link(oauth, url):
    response = oauth.get(url)
    download_link = response.json().get('download_link', '')
    if not download_link:
        raise Exception("Download link not found in the response")
    return download_link

def download_data_to_azure(oauth, download_link, account_name, account_key, file_system_name, file_name):
    data_service_client = DataLakeServiceClient(account_url=f"https://{account_name}.dfs.core.windows.net", credential=account_key)
    file_system_client = data_service_client.get_file_system_client(file_system_name)
    response = oauth.get(download_link)
    data = response.content
    file_client = file_system_client.get_file_client(file_name)
    file_client.upload_data(data, overwrite=True)

def main():
    try:
        # Set up Azure Key Vault client
        credential = DefaultAzureCredential()
        secret_client = SecretClient(vault_url="https://<your-key-vault-name>.vault.azure.net", credential=credential)

        # Retrieve secrets
        consumer_key = secret_client.get_secret('CONSUMER_KEY').value
        consumer_secret = secret_client.get_secret('CONSUMER_SECRET').value
        account_name = secret_client.get_secret('ACCOUNT_NAME').value
        account_key = secret_client.get_secret('ACCOUNT_KEY').value
        file_system_name = secret_client.get_secret('FILE_SYSTEM_NAME').value
        nifEmpresa = secret_client.get_secret('NIFEMPRESA').value

        oauth = authenticate(consumer_key, consumer_secret)
        url = create_url(nifEmpresa)
        download_link = get_download_link(oauth, url)
        download_data_to_azure(oauth, download_link, account_name, account_key, file_system_name, "downloaded_data")
        print("Data downloaded successfully")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
