// import { Router } from "express";
// import {
//   getAllUsers,
//   login,
//   signup,
//   deleteUser,
//   toggleFavorite,
//   getFavorites,
//   getUserProfile,
//   getUserPosts,
//   getUserById,
//   deleteUserAccount,
//   editProfileDetails,
// } from "../controllers/user-controllers.js";

// const userRouter = Router();

// // second paramater links to the controller
// userRouter.get("/", getAllUsers);
// userRouter.post("/signup", signup);
// userRouter.post("/login", login);
// userRouter.delete("/:id", deleteUser);
// userRouter.post("/toggleFavorite", toggleFavorite);
// userRouter.get("/favorites/:userId", getFavorites);
// userRouter.get("/profile/:id", getUserProfile);
// userRouter.get("/posts/:userId", getUserPosts);
// userRouter.get("/:userId", getUserById);
// userRouter.delete("/user/:id", deleteUserAccount);
// userRouter.put("/user/:id", editProfileDetails);

// export default userRouter;

import { Router } from "express";
import multer from "multer";
import {
  getAllUsers,
  login,
  signup,
  deleteUser,
  toggleFavorite,
  getFavorites,
  getUserProfile,
  getUserPosts,
  getUserById,
  deleteUserAccount,
} from "../controllers/user-controllers.js";

const userRouter = Router();
const upload = multer({ dest: "uploads/" }); // Configure multer

// Define routes
userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.delete("/:id", deleteUser);
userRouter.post("/toggleFavorite", toggleFavorite);
userRouter.get("/favorites/:userId", getFavorites);
userRouter.get("/profile/:id", getUserProfile);
userRouter.get("/posts/:userId", getUserPosts);
userRouter.get("/:userId", getUserById);
userRouter.delete("/:id", deleteUserAccount);

export default userRouter;
