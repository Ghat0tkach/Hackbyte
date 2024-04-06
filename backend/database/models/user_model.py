from fastapi import HTTPException
from bson import ObjectId
from pydantic import BaseModel,EmailStr

# Define User model
class User(BaseModel):
    name: str
    email: EmailStr
    brand_name: str
    template: str
    theme: str

# Function to create a new user
async def create_user(mongodb, user: User):
    try:
        result = await mongodb.users.insert_one(user.dict())
        created_user = await mongodb.users.find_one({"_id": result.inserted_id})
        if created_user:
            return created_user
        else:
            raise HTTPException(status_code=500, detail="Failed to create user")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Function to retrieve a user by their ID
async def read_user(mongodb, user_id: str):
    try:
        user = await mongodb.users.find_one({"_id": ObjectId(user_id)})
        if user:
            return user
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Function to update an existing user by their ID
async def update_user(mongodb, user_id: str, user: User):
    try:
        result = await mongodb.users.update_one({"_id": ObjectId(user_id)}, {"$set": user.dict()})
        if result.modified_count == 1:
            updated_user = await mongodb.users.find_one({"_id": ObjectId(user_id)})
            if updated_user:
                return updated_user
            else:
                raise HTTPException(status_code=500, detail="Failed to retrieve updated user")
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
