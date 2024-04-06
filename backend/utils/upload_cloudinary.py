from dotenv import load_dotenv
load_dotenv()

import cloudinary
import cloudinary.uploader
import cloudinary.api
result = cloudinary.api.resource_by_asset_id("7a7a4f7d95f501cde5b4051b537468a1")
print(result)
def upload_image_to_cloudinary(file_path):
    try:
       result = cloudinary.api.resource_by_asset_id("7a7a4f7d95f501cde5b4051b537468a1")
       print(result)
        # Upload the image to Cloudinary
      
    except Exception as e:
        # Handle any errors that occur during the upload process
        print(f"An error occurred while uploading the image: {e}")
        return None
    
