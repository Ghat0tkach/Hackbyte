from fastapi import APIRouter, HTTPException, Depends, Body
# Import necessary modules from shortGPT
from shortGPT.config.api_db import ApiKeyManager, ApiProvider
from shortGPT.config.asset_db import AssetDatabase, AssetType
from shortGPT.engine.facts_short_engine import FactsShortEngine
from shortGPT.config.languages import Language
from shortGPT.audio.edge_voice_module import EdgeTTSVoiceModule
from shortGPT.config.languages import EDGE_TTS_VOICENAME_MAPPING,Language
from pydantic import BaseModel
from typing import Optional
from utils.upload_cloudinary import upload_image_to_cloudinary
from router.posts  import Post, PostCreate, create_post, get_db
router = APIRouter()



# Define request body model
class ContentRequest(BaseModel):
    topic: str
    background_video_url: str
    background_music_url: str
    num_images: int
    module_language: Language
    is_script: Optional[bool] = None
    script: Optional[str] = None
    

@router.post("/generate-content")
async def generate_content(content_request: ContentRequest):
    AssetDatabase.add_remote_asset("background_video", AssetType.BACKGROUND_VIDEO, content_request.background_video_url)
    AssetDatabase.add_remote_asset("background_music", AssetType.BACKGROUND_MUSIC, content_request.background_music_url)
    print(content_request)

    voice_name = EDGE_TTS_VOICENAME_MAPPING[content_request.module_language]['male']
    voice_module = EdgeTTSVoiceModule(voice_name)

    # Configure Content Engine
    content_engine = FactsShortEngine(
        voiceModule=voice_module,
        facts_type=content_request.topic,
        background_video_name="background_video",
        background_music_name="background_music",
        num_images=content_request.num_images,
        language=content_request.module_language,
        is_script=content_request.is_script,
        script=content_request.script
    )


    # Generate content
    generated_content = content_engine.makeContent()
    print(content_engine.get_video_output_path())

    
    return {"content": content_engine.get_video_output_path()}

