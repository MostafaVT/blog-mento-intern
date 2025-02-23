import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

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

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt="Cover"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{post.title}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
          >
            written by: {post.author.name}
          </Typography>
          <Divider orientation="vertical" />
            <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
            >
            Published At: {new Date(post.publishedAt).toLocaleDateString()}
            </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default PostCard;
