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

export const fetchUserDetailsById = async (userId) => {
  try {
    const response = await axios.get(`/user/${userId}`);
    return response.data; // Return the entire user object
  } catch (err) {
    console.error("Error fetching user details:", err);
    throw err;
  }
};

// Fetch a single post by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await axios.get(`/post/${postId}`);
    return response.data; // Return the post data from the response
  } catch (error) {
    console.error("Error fetching post by ID:", error.message);
    throw error; // Propagate the error to handle it further if needed
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

export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`/user/profile/${userId}`);
    return response.data; // Ensure this matches the API response
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await axios.get(`/user/posts/${userId}`);
    return response.data.posts;
  } catch (err) {
    console.error("Error fetching user posts:", err);
    throw err;
  }
};

export const updatePost = async (id, postData, imageFile = null) => {
  try {
    // Create a FormData object to handle the file upload
    const formData = new FormData();

    // Append post data
    Object.keys(postData).forEach((key) => {
      formData.append(key, postData[key]);
    });

    // Append image file if provided
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const response = await axios.put(`/post/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure the correct content type for FormData
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to update the post");
    }

    return response.data;
  } catch (error) {
    console.error("Error updating post:", error.message);
    throw error;
  }
};

export const deletePostById = async (id) => {
  try {
    const response = await axios.delete(`/post/${id}`);
    return response.data; // Ensure this matches the API response structure
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    throw error;
  }
};
