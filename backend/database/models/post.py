from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId

class PostCreate(BaseModel):
    title: str
    content: str
    email: EmailStr  # Assuming the email identifies the user who created the post
    name:str
class Post(PostCreate):
    id: str  # Assuming the ID will be a string representation of MongoDB's ObjectId


async def create_post(db: AsyncIOMotorDatabase, post: PostCreate):
    post_dict = post.dict()  # Convert Pydantic model to dictionary
    result = await db["posts"].insert_one(post_dict)
    new_post = await db["posts"].find_one({"_id": result.inserted_id})
    # Adjusting the new_post to include the ID in the response model
    if new_post:
        new_post["id"] = str(new_post["_id"])
        del new_post["_id"]
    return new_post