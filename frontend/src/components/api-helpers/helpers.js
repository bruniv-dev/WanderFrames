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

export const fetchPostById = async (postId) => {
  const res = await axios.get(`/post/${postId}`).catch((err) => {
    console.log(err);
  });
  if (res.status !== 200) {
    return console.log("Error fetching post data");
  }
  const resData = await res.data;
  return resData;
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

export const updatePost = async (id, data, imageFile = null) => {
  try {
    const response = await axios
      .put(`/post/${id}`, {
        image: data.image?.url || null,
        location: data.location,
        subLocation: data.subLocation,
        description: data.description,
        locationUrl: data.locationUrl || "",
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct content type for FormData
        },
      })
      .catch((err) => console.log(err));

    if (response.status !== 200) {
      throw new Error("Failed to update the post");
    }

    const resData = await response.data;
    return resData;
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

// API call to delete user account
export const deleteUserAccount = async (userId) => {
  try {
    const response = await axios.delete(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user account:", error.message);
    throw error;
  }
};

export const updateUserProfile = async (userId, formData) => {
  try {
    const response = await axios.put(`/user/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error.response
      ? error.response.data
      : new Error("Error updating user profile");
  }
};
