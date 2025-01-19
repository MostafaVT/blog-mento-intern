import axiosInstance from "./axiosInstance";

export const fetchAuthors = async () => {
  try {
    const response = await axiosInstance.get("/api/authors");
    return response.data.docs;
  } catch (error) {
    throw error;
  }
};

export const createAuthor = async (data: {
  name: string;
  email: string;
  bio: string;
}) => {
  try {
    const response = await axiosInstance.post("/api/authors", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAuthorById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/authors/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
