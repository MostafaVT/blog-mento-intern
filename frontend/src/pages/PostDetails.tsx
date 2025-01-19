import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { PayloadRichTextRender } from "@/components/ui/PayloadRichTextRender";

const PostDetails = () => {
  const location = useLocation();
  const { post } = location.state || {};

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Post Details - title: {post.title} - by: {post.author.name} - bio:{" "}
        {post.author.bio}
      </Typography>
      <PayloadRichTextRender data={post.body} />
    </Box>
  );
};

export default PostDetails;
