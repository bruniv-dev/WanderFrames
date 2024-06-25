import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRouter = Router();

// second paramater links to the controller
userRouter.get("/", getAllUsers);

export default userRouter; // use this in app.js
