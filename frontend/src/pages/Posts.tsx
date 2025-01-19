import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import PostCard from "@/components/ui/PostCard";

import { fetchPosts } from "../api/posts";

interface Post {
  id: string;
  title: string;
  body: any;
  publishedAt: string;
  author: {
    id: string;
    name: string;
    bio: string;
  };
}

const Posts = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (
    post: any,
  ) => {
    navigate(`/postdetails`, { state: { post } });
  };

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response);
        console.log("Posts:", response);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      {posts.map((post) => (
        <Box key={post.id} sx={{ marginBottom: 2 }}>
          <PostCard post={post} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDetailsClick(post)}
          >
            Details
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Posts;
