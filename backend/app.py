from fastapi import FastAPI
from api.generate_image_or_banner import router as image_router
from api.youtube_utils import router as youtube_router

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = ["*"] 

# Add CORS middleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def docs():
    return ["For Documentation visit /docs"]

app.include_router(image_router, prefix="/image", tags=["image"])
app.include_router(youtube_router, prefix="/youtube", tags=["Youtube"])