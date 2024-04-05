from fastapi import FastAPI ,APIRouter, File, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
from starlette.background import BackgroundTasks
import os
import sys
from apiclient.discovery import build
from apiclient.http import MediaFileUpload
from oauth2client.client import flow_from_clientsecrets
from oauth2client.file import Storage
from oauth2client.tools import argparser, run_flow
import httplib2
from googleapiclient.errors import HttpError
import asyncio


directory = "temp"
if not os.path.exists(directory):
    os.makedirs(directory)
router = APIRouter()

# You may need to adjust the CLIENT_SECRETS_FILE path depending on where you deploy this application
CLIENT_SECRETS_FILE = "client_secrets.json"
YOUTUBE_READ_WRITE_SCOPE = "https://www.googleapis.com/auth/youtube"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

def get_authenticated_service():
    flow = flow_from_clientsecrets(CLIENT_SECRETS_FILE, scope=YOUTUBE_READ_WRITE_SCOPE)
    storage = Storage("%s-oauth2.json" % sys.argv[0])
    credentials = storage.get()
    if credentials is None or credentials.invalid:
        flags = argparser.parse_args(args=[])
        credentials = run_flow(flow, storage, flags)
    return build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, credentials=credentials)

async def upload_banner(youtube, image_file_path):
    # Since MediaFileUpload does not support async, consider running this in a thread for true async behavior
    # Alternatively, use an async library for uploading files if available
    insert_request = youtube.channelBanners().insert(media_body=MediaFileUpload(image_file_path, chunksize=-1, resumable=True))
    response = None
    try:
        status, response = insert_request.next_chunk()
        if 'url' in response:
            return response['url']
        else:
            raise HTTPException(status_code=500, detail="The upload failed with an unexpected response.")
    except HttpError as e:
        raise HTTPException(status_code=e.resp.status, detail=e.content)

async def set_banner(youtube, banner_url):
    channels_response = youtube.channels().list(mine=True, part="brandingSettings").execute()
    channel = channels_response["items"][0]
    channel["brandingSettings"]["image"]["bannerExternalUrl"] = banner_url
    youtube.channels().update(part='brandingSettings', body=channel).execute()

@router.post("/youtube-access", tags=["youtube"])
async def update_banner(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    # Save uploaded file to disk
    try:
        file_location = f"temp/{file.filename}"
        with open(file_location, "wb+") as file_object:
            file_object.write(file.file.read())
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # Get authenticated YouTube service
    youtube = get_authenticated_service()

    # Upload banner and set it for the channel in the background
    background_tasks.add_task(asyncio.create_task, upload_banner(youtube, file_location))

    return {"message": "Banner update initiated."}


