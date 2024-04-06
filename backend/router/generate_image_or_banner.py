from fastapi import APIRouter, HTTPException, Depends, Body

router = APIRouter()


@router.post("/generate-image", tags=["image"])
async def generate_image(data: dict = Body({"text":"some context"})):
    try:
        text = data["text"]
        return {"image": image}
       

    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


