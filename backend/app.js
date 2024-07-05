// dotenv to configure path for .env which holds secure credentials
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

// basic node and express setup
import express from "express";
const app = express();

// import routes - middleware
import userRouter from "./routers/user-routes.js"; // http://localhost:3000/user
import postRouter from "./routers/post-routes.js"; // http://localhost:3000/post

app.use(express.json()); //to process the json parsed data that is sent from the request to the backend
app.use("/user", userRouter); //the user based routes in user-routes will work only after the /user in routes
app.use("/post", postRouter); //the post based routes in post-routes will work only after the /post in routes

// mongoose setup
import mongoose from "mongoose";

const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connection Successful with MongoDB Cloud"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
