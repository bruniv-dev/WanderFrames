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

//USERS SIGN UP

export const signup = async (req, res, next) => {
  // Destructure name, email, and password from the request body
  const { name, email, password } = req.body;

  // Validate input fields
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.length < 6
  ) {
    // Unprocessable Entity status for invalid data
    return res.status(422).json({ message: "Invalid Data" });
  }

  // Hash the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = hashSync(password, saltRounds);

  let user;
  try {
    // Create a new user instance with the hashed password
    user = new User({ name, email, password: hashedPassword });
    // Save the user to the database
    await user.save();
  } catch (err) {
    // Log any error that occurs during saving
    return console.log(err);
  }

  // If user creation failed, send an error response
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  // Send a success response with the created user
  return res.status(201).json({ user });
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
