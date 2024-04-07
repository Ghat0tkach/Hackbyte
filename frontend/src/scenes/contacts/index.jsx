import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useEffect, useState } from "react";

import FormField from "./components/FormField";
import Loader from "./components/Loader";

import download from "../../assets/images/download.png";
import { downloadImage } from "./components/download";

const CommunityWall = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/post/get_posts/");

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.reverse());
      } else {
        console.error("Failed to fetch posts:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const downloadFile = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, filename);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to the Dashboard
      </h1>
      {loading ? (
        <p>
          <Loader />
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-400 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <video controls className="w-full">
                <source src={post.content} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    downloadFile(post.content, `video_${post.id}.mp4`)
                  }
                >
                  Download Video
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Posted by {post.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityWall;
