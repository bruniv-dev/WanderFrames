import { compareSync, hashSync } from "bcrypt";
import User from "../models/User.js";
import mongoose from "mongoose";
import Post from "../models/Post.js";

//GET ALL USERS
export const getAllUsers = async (req, res) => {
  let users;
  // Communicates with MongoDB
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unexpected Error" });
  }

  // If users is falsy
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }

  // If users has a truthy value
  return res.status(200).json({ users });
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId); // Fetch all fields
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Send the entire user object
  } catch (error) {
    console.error("Failed to get user by ID:", error);
    res.status(500).json({ message: "Failed to get user", error });
  }
};

// Signup Controller
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input fields
  if (
    !name ||
    name.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !password ||
    password.length < 6
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  // Hash the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = hashSync(password, saltRounds);

  try {
    // Create a new user instance with the hashed password and current date
    const user = new User({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(), // Add the current date when creating a new user
    });

    // Save the user to the database
    await user.save();

    // Send a success response with the created user
    return res.status(201).json({ user });
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
};

//login
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate input fields
  if (!email && email.trim() === "" && !password && password.length < 6) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return res.status(500).json({ message: "Error finding user" });
  }

  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "No user found with the given email." });
  }

  // Compare password
  let isPasswordCorrect;
  try {
    isPasswordCorrect = compareSync(password, existingUser.password);
  } catch (err) {
    return res.status(500).json({ message: "Error comparing passwords" });
  }

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  return res
    .status(200)
    .json({ id: existingUser._id, message: "Login Successful" });
};

// Delete a user and their posts
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  let session;

  try {
    // Start a session and transaction
    session = await mongoose.startSession();
    session.startTransaction();

    // Find and delete the user
    const user = await User.findByIdAndDelete(id, { session });

    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "User not found" });
    }

    // Delete all posts linked to the user
    await Post.deleteMany({ user: id }, { session });

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    // Respond with success message
    return res
      .status(200)
      .json({ message: "User and associated posts deleted successfully" });
  } catch (err) {
    if (session) {
      await session.abortTransaction();
      session.endSession();
    }
    console.log(err);
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
};

export const toggleFavorite = async (req, res) => {
  const userId = req.body.userId;
  const postId = req.body.postId;

  console.log("User ID:", userId);
  console.log("Post ID:", postId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isFavorite = user.favorites.includes(postId);
    if (isFavorite) {
      user.favorites.pull(postId); // Remove from favorites
    } else {
      user.favorites.push(postId); // Add to favorites
    }

    await user.save(); // Save the updated user
    console.log("Favorites updated:", user.favorites); // Log updated favorites

    return res.status(200).json({ favorites: user.favorites });
  } catch (error) {
    console.error("Failed to toggle favorite:", error);
    return res
      .status(500)
      .json({ message: "Failed to toggle favorite", error });
  }
};

export const getFavorites = async (req, res) => {
  const userId = req.params.userId; // Get userId from URL parameter

  try {
    const user = await User.findById(userId).populate("favorites"); // Populate to get post details
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ favorites: user.favorites });
  } catch (error) {
    console.error("Failed to get favorites:", error);
    return res.status(500).json({ message: "Failed to get favorites", error });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Failed to fetch user profile" });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch the user and populate the posts
    const user = await User.findById(userId).populate("posts");
    console.log(`u ${user}`);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const posts = user.posts;
    // if (!posts || posts.length === 0) {
    //   return res.status(404).json({ message: "No posts found for this user" });
    // }

    res.status(200).json({ posts });
  } catch (error) {
    console.error("Failed to get user posts:", error);
    res.status(500).json({ message: "Failed to get user posts", error });
  }
};

export const deleteUserAccount = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const { bio, name } = req.body;
  const profileImage = req.file?.path; // Assuming you're using multer for file uploads

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (bio) user.bio = bio;
    if (name) user.name = name;
    if (profileImage) user.profileImage = profileImage;

    await user.save();

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};
