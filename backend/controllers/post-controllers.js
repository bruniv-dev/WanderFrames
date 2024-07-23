import mongoose from "mongoose";
import Post from "../models/Post.js";
import User from "../models/User.js";
import { uploadDir } from "../app.js";
import path from "path";

//get all posts
export const getAllPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    return console.log(err);
  }

  if (!posts) {
    res.status(500).json({ message: "Unexpected Error occured" });
  }

  return res.status(200).json({ posts });
};

//get post by id
export const getPostById = async (req, res) => {
  const id = req.params.id;

  let post;
  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    res.status(404).json({ message: "No Post Found" });
  }

  return res.status(200).json({ post });
};

// Define the base URL
const baseUrl = process.env.BASE_URL || "http://localhost:5000";

// Inside your addPost function
export const addPost = async (req, res, next) => {
  const { subLocation, description, location, date, user } = req.body;
  const imagePath = req.file ? req.file.path : "";
  const imageUrl = imagePath
    ? `${baseUrl}/uploads/${path.basename(imagePath)}`
    : "";

  // Create the post object
  let post;
  try {
    post = new Post({
      subLocation,
      description,
      location,
      date: new Date(date),
      user,
      image: {
        url: imageUrl,
      },
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    const existingUser = await User.findById(user);
    existingUser.posts.push(post);
    await existingUser.save({ session });
    post = await post.save({ session });
    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    return console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ post });
};


//update post
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { subLocation, description, image, location, date } = req.body;
  if (
    !subLocation &&
    subLocation.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !image &&
    image.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    date.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Input data" });
  }
  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      subLocation,
      description,
      image,
      location,
      date: new Date(`${date}`),
    });
  } catch (err) {
    return console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  //created with req so 201
  return res.status(201).json({ post });
};

//delete a user

export const deletePost = async (req, res) => {
  const id = req.params.id;
  let post;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    post = await Post.findById(id).populate("user");
    post.user.posts.pull(post);
    await post.user.save({ session });
    post = await Post.findByIdAndDelete(id);
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  //created with req so 201
  return res.status(201).json({ message: "Post deleted Successfully" });
};
