from fastapi import APIRouter,Depends, HTTPException,Request
from database.models.user_model import User
from database.models.user_model import create_user, read_user, update_user
from pydantic import BaseModel, EmailStr
router = APIRouter()

def get_db(request: Request):
    return request.app.mongodb

router = APIRouter()

@router.post("/users/", response_model=User)
async def create_user_route(user: User, db=Depends(get_db)):
    return await create_user(db, user)

@router.get("/users/{email}", response_model=User)
async def read_user_by_username_route(email: EmailStr, db=Depends(get_db)):
    user = await db["users"].find_one({"email": email})  # Adjust "users_collection" to your collection name
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/users/{user_id}", response_model=User)
async def update_user_route(user_id: str, user: User, db=Depends(get_db)):
    return await update_user(db, user_id, user)