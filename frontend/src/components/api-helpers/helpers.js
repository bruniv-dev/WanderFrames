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

// export const addPost = async (data) => {
//   const res = await axios
//     .post("/post/addPost/", {
//       location: data.location,
//       subLocation: data.subLocation,
//       description: data.description,
//       images: data.images,
//       date: data.date,
//       user: localStorage.getItem("userId"),
//     })
//     .catch((err) => console.log(err));
//   if (res.status !== 200) {
//     console.log("Error Occurred");
//   }
//   const resData = res.data;
//   return resData;
// };

export const addPost = async (data) => {
  console.log("Data being sent to the server:", data); // Debug log

  if (!data.images || data.images.length === 0 || !data.images[0].url) {
    console.error("Error: Image URL is required");
    return; // Early return if image URL is missing
  }

  try {
    const res = await axios.post("/post/addPost/", {
      location: data.location,
      subLocation: data.subLocation,
      description: data.description,
      images: data.images,
      date: data.date,
      user: localStorage.getItem("userId"),
    });

    if (res.status !== 200) {
      console.log("Error Occurred");
    } else {
      return res.data;
    }
  } catch (err) {
    console.log("Error occurred while adding post:", err);
  }
};
