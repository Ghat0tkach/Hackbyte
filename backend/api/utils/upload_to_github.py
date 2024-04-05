from github import Github
import os

def upload_frames_to_github(frames_folder, github_token, github_repo):
    g = Github(github_token)
    repo = g.get_repo(github_repo)

    for frame in os.listdir(frames_folder):
        frame_path = os.path.join(frames_folder, frame)
        upload_image_to_github(repo, frame_path, frame, frames_folder)

def upload_image_to_github(repo, image_path, image_filename, folder_name):
    try:
        with open(image_path, "rb") as image_file:
            image_content = image_file.read()

        repo.create_file(
            f"{folder_name}/{image_filename}",
            f"Added {image_filename}",
            image_content,
            branch="main",
        )
    except Exception as e:
        print(f"Error uploading {image_filename} to GitHub: {str(e)}")