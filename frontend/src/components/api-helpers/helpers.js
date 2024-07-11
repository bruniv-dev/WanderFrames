import axios from "axios";

export const getAllPosts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/post");
    if (res.status !== 200) {
      console.log("Error Occurred");
    }
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};
