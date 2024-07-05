import { Router } from "express";
import {
  getAllUsers,
  login,
  signup,
  deleteUser,
} from "../controllers/user-controllers.js";

const userRouter = Router();

// second paramater links to the controller
userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.delete("/:id", deleteUser);

export default userRouter; // use this in app.js
