import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Typography, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Posts = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (post: any) => {
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
    <>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts.map((post) => (
            <Item key={post.id}>
              <PostCard post={post} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDetailsClick(post)}
                sx={{ marginTop: 1 }}
              >
                Details
              </Button>
            </Item>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Posts;
