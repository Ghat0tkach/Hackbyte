from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from router.users import router as create_user_router
from router.generate_image_or_banner import router as image_router
from router.generate_video import router as video_router
from router.posts import router as post_router
from router.google_gemini import router as google_gemini_router
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

@app.on_event("startup")
async def startup_db_client():
    try:
        app.mongodb_client = AsyncIOMotorClient("mongodb+srv://awesomevikram3:JJYmmtAnMhBQEhP5@cluster0.65fzknb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        app.mongodb = app.mongodb_client["Cluster0"]
        print("DB Connected")
    except Exception as e:
        print("DB Connection Error", str(e))

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

# Create user router with MongoDB client instance
user_router = create_user_router

app.include_router(user_router, prefix="/user", tags=["user"])
app.include_router(image_router, prefix="/image", tags=["image"])
app.include_router(video_router, prefix="/video", tags=["Video"])
app.include_router(post_router, prefix="/post", tags=["Post"])
app.include_router(google_gemini_router, prefix="/google_gemini", tags=["Google Gemini"])