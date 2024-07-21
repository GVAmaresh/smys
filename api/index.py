from __future__ import print_function
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from fastapi.responses import JSONResponse
from typing import Dict
from pydantic import BaseModel
from googleapiclient.discovery import build

from api.components.ImageList import list_files_in_folder
from api.components.drive_db import authenticate_with_env_vars

# from components.ImageList import list_files_in_folder
# from components.drive_db import authenticate_with_env_vars

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.get("/api/getDetails")
async def get_details():
    return JSONResponse(
        content={
            "message": "Successfully added Report and Summary",
            "data": None,
            "success": True,
        }
    )

class RequestModel(BaseModel):
    url: str

@app.post("/api/getImages")
async def get_images(req: RequestModel):
    folder_url = req.url
    folder_id = folder_url.split("/")[-1]
    folder_id = folder_id.split("?")[0]
    try:
        files = list_files_in_folder(service, folder_id)
        
        if not files:
            print('No files found.')
        else:
            print('Files:')
            file_ids = [file['id'] for file in files]

        return JSONResponse({"status": 200, "message": "Data fetched successfully", "data": file_ids}, status_code=200)
        
    except Exception as error:
        print(f'An error occurred: {error}')
        return JSONResponse({"status": 500, "message": str(error), "data": None}, status_code=500)

@app.get("/api/getimf")
def getImf():
    return JSONResponse(
        content={
            "message": "Working Fine!!.",
        },
        status_code=202
    )

if __name__ == "__main__":
    creds = authenticate_with_env_vars(details)
    service = build('drive', 'v3', credentials=creds)
    uvicorn.run(app, host="127.0.0.1", port=5000)
