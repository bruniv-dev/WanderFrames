import { Router } from "express";
import {
  addPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post-controllers.js";
const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/addPost", addPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
