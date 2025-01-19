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
        Post Details -{post.title} - {post.author.name}
      </Typography>
      <PayloadRichTextRender data={post.body} />
    </Box>
  );
};

export default PostDetails;
