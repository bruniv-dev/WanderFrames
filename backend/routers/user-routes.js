// // import { Router } from "express";
// // import multer from "multer";

// // import {
// //   getAllUsers,
// //   login,
// //   signup,
// //   deleteUser,
// //   toggleFavorite,
// //   getFavorites,
// //   getUserProfile,
// //   getUserPosts,
// //   getUserById,
// //   deleteUserAccount,
// //   updateUserProfile,
// //   verifySecurityAnswer,
// //   resetPassword,
// //   updateUserIsAdmin,
// //   checkUsernameAvailability,
// //   requestReset,
// //   forgotPasswordReset,
// // } from "../controllers/user-controllers.js";

// // const upload = multer({ dest: "uploads/" }); // Configure multer

// // const userRouter = Router();

// // // const adminOnly = (req, res, next) => {
// // //   if (req.user.role !== 'admin') {
// // //     return res.status(403).send('Access denied');
// // //   }
// // //   next();
// // // };

// // // // Example route that only admins can access
// // // router.delete('/posts/:id', adminOnly, (req, res) => {
// // //   // Delete post logic
// // // });

// // // Multer setup
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix =
// //       new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
// //     cb(null, uniqueSuffix);
// //   },
// // });
// // const uploadSingle = multer({ storage: storage });

// // // Define routes
// // userRouter.get("/", getAllUsers);
// // userRouter.post("/signup", signup);
// // userRouter.post("/login", login);
// // userRouter.delete("/:id", deleteUser);
// // userRouter.post("/toggleFavorite", toggleFavorite);
// // userRouter.get("/favorites/:userId", getFavorites);
// // userRouter.get("/profile/:id", getUserProfile);
// // userRouter.get("/posts/:userId", getUserPosts);
// // userRouter.get("/:userId", getUserById);
// // userRouter.delete("/:id", deleteUserAccount);
// // userRouter.put(
// //   "/:userId",
// //   uploadSingle.single("profileImage"),
// //   updateUserProfile
// // );
// // userRouter.put("/:userId/isAdmin", updateUserIsAdmin);
// // userRouter.post("/requestReset", requestReset);
// // userRouter.post("/verifySecurityAnswer", verifySecurityAnswer);
// // userRouter.post("/forgot-password-reset/:userId", forgotPasswordReset);
// // userRouter.post("/reset-password/:userId", resetPassword);
// // userRouter.get("/check-username/:username", checkUsernameAvailability);

// // export default userRouter;

// // import { Router } from "express";
// // import multer from "multer";
// // import path from "path"; // Import path module if needed

// // import {
// //   getAllUsers,
// //   login,
// //   signup,
// //   deleteUser,
// //   toggleFavorite,
// //   getFavorites,
// //   getUserProfile,
// //   getUserPosts,
// //   getUserById,
// //   deleteUserAccount,
// //   updateUserProfile,
// //   verifySecurityAnswer,
// //   resetPassword,
// //   updateUserIsAdmin,
// //   checkUsernameAvailability,
// //   requestReset,
// //   forgotPasswordReset,
// // } from "../controllers/user-controllers.js";

// // // Define upload directory
// // const uploadDir = path.join(__dirname, "../uploads"); // Adjust path if necessary

// // // Multer setup
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix =
// //       new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
// //     cb(null, uniqueSuffix);
// //   },
// // });
// // const uploadSingle = multer({ storage: storage });

// // const userRouter = Router();

// // // Define routes
// // userRouter.get("/", getAllUsers);
// // userRouter.post("/signup", signup);
// // userRouter.post("/login", login);
// // userRouter.delete("/:id", deleteUser);
// // userRouter.post("/toggleFavorite", toggleFavorite);
// // userRouter.get("/favorites/:userId", getFavorites);
// // userRouter.get("/profile/:id", getUserProfile);
// // userRouter.get("/posts/:userId", getUserPosts);
// // userRouter.get("/:userId", getUserById);
// // userRouter.delete("/account/:id", deleteUserAccount); // Updated route for clarity
// // userRouter.put(
// //   "/:userId",
// //   uploadSingle.single("profileImage"),
// //   updateUserProfile
// // );
// // userRouter.put("/:userId/isAdmin", updateUserIsAdmin);
// // userRouter.post("/requestReset", requestReset);
// // userRouter.post("/verifySecurityAnswer", verifySecurityAnswer);
// // userRouter.post("/forgot-password-reset/:userId", forgotPasswordReset);
// // userRouter.post("/reset-password/:userId", resetPassword);
// // userRouter.get("/check-username/:username", checkUsernameAvailability);

// // export default userRouter;

// import { Router } from "express";
// import multer from "multer";
// import { uploadSingle } from "../app.js";
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
//   updateUserProfile,
//   verifySecurityAnswer,
//   resetPassword,
//   updateUserIsAdmin,
//   checkUsernameAvailability,
//   requestReset,
//   forgotPasswordReset,
// } from "../controllers/user-controllers.js";

// const userRouter = Router();

// // Define routes

// // Public routes
// userRouter.get("/", getAllUsers); // Get all users
// userRouter.post("/signup", signup); // User signup
// userRouter.post("/login", login); // User login
// userRouter.post("/requestReset", requestReset); // Request password reset
// userRouter.post("/verifySecurityAnswer", verifySecurityAnswer); // Verify security answer
// userRouter.post("/forgot-password-reset/:userId", forgotPasswordReset); // Forgot password reset
// userRouter.post("/reset-password/:userId", resetPassword); // Reset password
// userRouter.get("/check-username/:username", checkUsernameAvailability); // Check username availability

// // Protected routes
// userRouter.delete("/:id", deleteUser); // Delete user
// userRouter.post("/toggleFavorite", toggleFavorite); // Toggle favorite
// userRouter.get("/favorites/:userId", getFavorites); // Get user favorites
// userRouter.get("/profile/:id", getUserProfile); // Get user profile
// userRouter.get("/posts/:userId", getUserPosts); // Get user posts
// userRouter.get("/:userId", getUserById); // Get user by ID
// userRouter.delete("/:id", deleteUserAccount); // Delete user account
// userRouter.put(
//   "/:userId",
//   uploadSingle.single("profileImage"), // Use multer middleware for single file upload
//   updateUserProfile // Update user profile
// );
// userRouter.put("/:userId/isAdmin", updateUserIsAdmin); // Update user admin status

// export default userRouter;

// user-routes.js
import { Router } from "express";
import multer from "multer";
import { uploadDir } from "../app.js";

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
  verifySecurityAnswer,
  resetPassword,
  updateUserIsAdmin,
  checkUsernameAvailability,
  requestReset,
  forgotPasswordReset,
} from "../controllers/user-controllers.js";

// Multer setup for single file uploads
// const storageSingle = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix =
//       new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });

// const uploadSingle = multer({ storage: storageSingle });

// Multer setup
const storageSingle = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const uploadSingle = multer({ storage: storageSingle });
// const upload = multer({ dest: "uploads/" }); // Configure multer
const userRouter = Router();

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
userRouter.put(
  "/:userId",
  uploadSingle.single("profileImage"),
  updateUserProfile
); // Use multer middleware for single file upload
userRouter.put("/:userId/isAdmin", updateUserIsAdmin);
userRouter.post("/requestReset", requestReset);
userRouter.post("/verifySecurityAnswer", verifySecurityAnswer);
userRouter.post("/forgot-password-reset/:userId", forgotPasswordReset);
userRouter.post("/reset-password/:userId", resetPassword);
userRouter.get("/check-username/:username", checkUsernameAvailability);

export default userRouter;
