from fastapi import APIRouter, Depends, HTTPException,Request
from typing import List
from pydantic import EmailStr
from database.models.post import Post, PostCreate,create_post


def get_db(request: Request):
    return request.app.mongodb

router = APIRouter()

@router.post("/posts/", response_model=Post)
async def create_post_route(post: PostCreate, db=Depends(get_db)):
    new_post = await create_post(db, post)
    if not new_post:
        raise HTTPException(status_code=500, detail="Failed to create the post.")
    return new_post

@router.get("/get_posts/", response_model=List[Post])
async def read_all_posts_route(db=Depends(get_db)):
    posts = await db["posts"].find().to_list(length=None)  # No filter to get all posts
    if not posts:
        raise HTTPException(status_code=404, detail="No posts found")
    formatted_posts = []
    for post in posts:
        post["id"] = str(post["_id"])
        del post["_id"]
        formatted_posts.append(Post(**post))
    return formatted_posts

@router.get("/posts/by_email/{email}", response_model=List[Post])
async def read_posts_by_email_route(email: EmailStr, db=Depends(get_db)):
    posts = await db["posts"].find({"email": email}).to_list(length=None)
    print(posts)
    formatted_posts = []
    for post in posts:
        post["id"] = str(post["_id"])
        del post["_id"]
        formatted_posts.append(Post(**post))
    if not formatted_posts:
        raise HTTPException(status_code=404, detail="No posts found for the given email")
    return formatted_posts