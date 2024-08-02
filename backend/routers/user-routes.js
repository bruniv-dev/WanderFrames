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
  updateUserProfile,
  requestReset,
  resetPassword,
  verifySecurityAnswer,
} from "../controllers/user-controllers.js";

const upload = multer({ dest: "uploads/" }); // Configure multer

const userRouter = Router();

// const adminOnly = (req, res, next) => {
//   if (req.user.role !== 'admin') {
//     return res.status(403).send('Access denied');
//   }
//   next();
// };

// // Example route that only admins can access
// router.delete('/posts/:id', adminOnly, (req, res) => {
//   // Delete post logic
// });

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
userRouter.put("/:userId", upload.single("profileImage"), updateUserProfile);
userRouter.post("/requestReset", requestReset);
userRouter.post("/verifySecurityAnswer", verifySecurityAnswer);
userRouter.post("/reset-password/:userId", resetPassword);

export default userRouter;
