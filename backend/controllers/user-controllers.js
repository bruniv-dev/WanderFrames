import User from "../models/User.js";

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
