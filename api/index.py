from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi.responses import JSONResponse

from api.components.ImageList import list_files_in_google_drive_folder
from typing import Dict




app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    
@app.get("/api/getDetails")
async def get_details():
    return JSONResponse(
        content={
            "message": "Successfully added Report and Summary",
            "data": None,
            "success": True,
        }
    )

@app.post("/api/getImages")
async def get_images(req: Dict[str, str]):
    url = req.get("url")
    file_ids = list_files_in_google_drive_folder(url)
    if file_ids:
        return JSONResponse(
            content={
                "message": "Successfully added Report and Summary",
                "data": file_ids,
                "success": True,
            }
        )
    else:
        print("No files found in the folder.")
