import axiosInstance from "./axiosInstance";

export const fetchPosts = async () => {
  try {
    const response = await axiosInstance.get("/api/posts");
    return response.data.docs;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data: {
  title: string;
  body: string;
  author: string;
}) => {
  try {
    const response = await axiosInstance.post("/api/posts", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPostDetails = async (postId: string, authorId: string) => {
  try {
    const response = await axiosInstance.get(`/api/posts`);
    return response.data.docs.filter(
      (post: any) => post.author.id === authorId && post.id === postId
    );
  } catch (error) {
    throw error;
  }
};
