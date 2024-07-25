import axios from "axios";

export const getAllPosts = async () => {
  try {
    const res = await axios.get("/post");
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

export const sendAuthRequest = async (signup, data) => {
  const endpoint = signup ? "/user/signup/" : "/user/login/";

  try {
    const res = await axios.post(endpoint, {
      name: data.username ? data.username : "", // Assuming username is sent for signup
      email: data.email,
      password: data.password,
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data;
      console.log("Authentication successful:", resData);
      return resData;
    } else {
      console.log("Unexpected status code:", res.status);
    }
  } catch (error) {
    console.error("Error during authentication:", error.message);
    throw error; // Propagate the error to handle it further if needed
  }
};

export const addPost = async (data) => {
  const res = await axios
    .post("/post/addPost", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    throw new Error("Error Occurred");
  }

  return res.data;
};

export const toggleFavorite = async (postId) => {
  const userId = localStorage.getItem("userId");
  if (!userId || !postId) {
    throw new Error("User ID or Post ID is missing");
  }

  try {
    const res = await axios.post("/user/toggleFavorite", { userId, postId });
    return res.data; // Data should include the updated favorites list
  } catch (error) {
    console.error("Error toggling favorite:", error.message);
    throw error;
  }
};

// Fetch favorites for the logged-in user
export const fetchFavorites = async () => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    throw new Error("User ID is missing");
  }

  try {
    const response = await axios.get(`/user/favorites/${userId}`);
    return response.data; // Data should include the favorites list
  } catch (err) {
    console.error("Error fetching favorites:", err);
    throw err;
  }
};
