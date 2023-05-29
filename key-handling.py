from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

credential = DefaultAzureCredential()

secret_client = SecretClient(vault_url="https://<your-key-vault-name>.vault.azure.net", credential=credential)

consumer_key = secret_client.get_secret('CONSUMER_KEY')
consumer_secret = secret_client.get_secret('CONSUMER_SECRET')
account_name = secret_client.get_secret('ACCOUNT_NAME')
account_key = secret_client.get_secret('ACCOUNT_KEY')

import os
consumer_key = os.environ.get('CONSUMER_KEY')
consumer_secret = os.environ.get('CONSUMER_SECRET')
account_name = os.environ.get('ACCOUNT_NAME')
account_key = os.environ.get('ACCOUNT_KEY')

from decouple import config
consumer_key = config('CONSUMER_KEY')
consumer_secret = config('CONSUMER_SECRET')
account_name = config('ACCOUNT_NAME')
account_key = config('ACCOUNT_KEY')

import os
from dotenv import load_dotenv

# Load the .env file
load_dotenv()

consumer_key = os.getenv('CONSUMER_KEY')
consumer_secret = os.getenv('CONSUMER_SECRET')
account_name = os.getenv('ACCOUNT_NAME')
account_key = os.getenv('ACCOUNT_KEY')
