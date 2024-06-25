// dotenv to configure path for .env which holds secure credentials
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

// basic node and express setup
import express from "express";
const app = express();

// import routes - middleware
import userRouter from "./routers/user-routes.js";
// http://localhost:3000/user
app.use("/user", userRouter); //these routes will work only after the /user in routes

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

// //dotenv to configure path for .env which holds secure crendentials
// import dotenv from "dotenv";
// dotenv.config({ path: "config.env" });

// //basic node and express
// import express from "express";

// const app = express();

// import userRouter from "./routers/user-routes.js";
// app.use("/user", userRouter);

// app.listen(3000, () => {
//   console.log(process.env.PORT, `listening to port ${process.env.PORT}`);
// });

// console.log(process.env.PORT);

// //middleware;
// // app.use("/", (req, res, next) => {
// //   return res.send("hi");
// // });

// //mongoose
// import mongoose from "mongoose";

// mongoose
//   .connect(
//     `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
//   )
//   .then(() => console.log("Connection Successful with Mongo Cloud"))
//   .catch((err) => {
//     console.log(err);
//   });
