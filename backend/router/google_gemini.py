import google.generativeai as genai
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key="")

model = genai.GenerativeModel('gemini-pro')

router = APIRouter()

class Prompt(BaseModel):
    prompt: str

@router.post("/generate_channel_name/")
async def generate_channel_name(prompt: Prompt):
    try:
        description = prompt.prompt
        template = f"You are a creative YouTube channel name maker and you have to provide me name based on the description: {description}. I want a catchy name for my channel.PROVIDE ONLY ONE NAME"
        brand_name = model.generate_content(template)
        return {"brand_name": brand_name.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/generate_script/")
async def generate_script(prompt: Prompt):
    try:
        description = prompt.prompt
        template = f"Create the script based on my description: {description}.You are an expert video writer. You ONLY produce text that is read. You only produce the script. that will be read by a voice actor for a video. The user will give you the description of the video they want you to make and from that, you will write the script.Make sure to directly write the script in response to the video description.Your script will not have any reference to the audio footage / video footage shown. Only the text that will be narrated by the voice actor.You will produce purely text .Don't write any other textual thing than the text itself.Make sure the text is not longer than 200 words (keep the video pretty short and neat)"
        script = model.generate_content(template)
        return {"script": script.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
