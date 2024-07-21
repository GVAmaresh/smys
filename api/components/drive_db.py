from __future__ import print_function
import os
from dotenv import load_dotenv
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google.oauth2 import service_account

SCOPES = ['https://www.googleapis.com/auth/drive']

dotenv_path = '../.env'
load_dotenv(dotenv_path)

details = {
    "refresh_token": os.getenv("REFRESH_TOKEN"),
    "token": os.getenv("TOKEN"),
    "token_uri": "https://oauth2.googleapis.com/token",
    "client_id": os.getenv('CLIENT_ID'),
    "client_secret": os.getenv('CLIENT_SECRET'),
    "scopes": SCOPES,
    "universe_domain": "googleapis.com"
}


def authenticate_with_env_vars(details):
    creds = Credentials.from_authorized_user_info(details, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            raise ValueError("Credentials are invalid and cannot be refreshed.")
    return creds