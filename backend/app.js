// // // // dotenv to configure path for .env which holds secure credentials
// // // import dotenv from "dotenv";
// // // import path from "path";
// // // import { fileURLToPath } from "url";

// // // dotenv.config({
// // //   path: path.resolve(fileURLToPath(import.meta.url), "..", "config.env"),
// // // });

// // // // basic node and express setup
// // // import express from "express";
// // // import cors from "cors";
// // // import fs from "fs";
// // // import multer from "multer";
// // // import mongoose from "mongoose";

// // // // Define __dirname for ES modules
// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = path.dirname(__filename);

// // // // Create an uploads directory if it doesn't exist
// // // export const uploadDir = path.join(__dirname, "uploads");
// // // if (!fs.existsSync(uploadDir)) {
// // //   fs.mkdirSync(uploadDir, { recursive: true });
// // // }

// // // // Serve static files from "uploads" directory
// // // const app = express();
// // // app.use("/uploads", express.static(uploadDir));

// // // // // Multer setup
// // // // const storage = multer.diskStorage({
// // // //   destination: (req, file, cb) => {
// // // //     cb(null, uploadDir);
// // // //   },
// // // //   filename: (req, file, cb) => {
// // // //     const uniqueSuffix =
// // // //       new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
// // // //     cb(null, uniqueSuffix);
// // // //   },
// // // // });
// // // // const upload = multer({ storage: storage });

// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     cb(null, "uploads/");
// // //   },
// // //   filename: (req, file, cb) => {
// // //     cb(null, Date.now() + path.extname(file.originalname));
// // //   },
// // // });

// // // const upload = multer({ storage });

// // // export const uploadMultiple = upload.array("images", 3); // Limit to 3 files

// // // // Import routes - middleware
// // // import userRouter from "./routers/user-routes.js"; // http://localhost:3000/user
// // // import postRouter from "./routers/post-routes.js"; // http://localhost:3000/post

// // // // Middleware setup
// // // app.use(cors());
// // // app.use(express.json()); // to process JSON data sent from requests

// // // // Routes
// // // app.use("/user", userRouter); // User-based routes
// // // app.use("/post", postRouter); // Post-based routes

// // // // mongoose setup
// // // const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// // // mongoose
// // //   .connect(mongoUri)
// // //   .then(() => console.log("Connection Successful with MongoDB Cloud"))
// // //   .catch((err) => {
// // //     console.error("MongoDB connection error:", err);
// // //   });

// // // // Start server
// // // const port = process.env.PORT || 5000;
// // // app.listen(port, () => {
// // //   console.log(`Server is listening on port ${port}`);
// // // });

// // // Importing required modules
// // import dotenv from "dotenv";
// // import path from "path";
// // import { fileURLToPath } from "url";
// // import express from "express";
// // import cors from "cors";
// // import fs from "fs";
// // import mongoose from "mongoose";
// // import multer from "multer";

// // // Import routes
// // import userRouter from "./routers/user-routes.js"; // Adjust the path if necessary
// // import postRouter from "./routers/post-routes.js"; // Adjust the path if necessary

// // // Load environment variables from .env file
// // dotenv.config({
// //   path: path.resolve(fileURLToPath(import.meta.url), "..", "config.env"),
// // });

// // // Define __dirname for ES modules
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // // Create an uploads directory if it doesn't exist
// // export const uploadDir = path.join(__dirname, "uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir, { recursive: true });
// // }

// // // Serve static files from "uploads" directory
// // const app = express();
// // app.use("/uploads", express.static(uploadDir));

// // // Multer setup for single file upload
// // const singleFileStorage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir); // Directory for storing files
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix = Date.now() + path.extname(file.originalname);
// //     cb(null, uniqueSuffix); // Unique file name
// //   },
// // });

// // export const uploadSingle = multer({ storage: singleFileStorage }); // Middleware for single file upload

// // // Multer setup for multiple file upload
// // const multipleFilesStorage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir); // Directory for storing files
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix = Date.now() + "-" + file.originalname;
// //     cb(null, uniqueSuffix); // Unique file name
// //   },
// // });

// // export const uploadMultiple = multer({ storage: multipleFilesStorage }).array(
// //   "images",
// //   3
// // ); // Middleware for multiple file uploads, limit to 3 files

// // // Middleware setup
// // app.use(cors());
// // app.use(express.json()); // To process JSON data sent from requests

// // // Define routes
// // app.use("/user", userRouter); // User-based routes
// // app.use("/post", postRouter); // Post-based routes

// // // MongoDB setup
// // const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// // mongoose
// //   .connect(mongoUri)
// //   .then(() => console.log("Connection Successful with MongoDB Cloud"))
// //   .catch((err) => {
// //     console.error("MongoDB connection error:", err);
// //   });

// // // Start server
// // const port = process.env.PORT || 5000;
// // app.listen(port, () => {
// //   console.log(`Server is listening on port ${port}`);
// // });

// // app.js
// import express from "express";
// import cors from "cors";
// import fs from "fs";
// import multer from "multer";
// import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";
// // Import routes
// import userRouter from "./routers/user-routes.js";
// import postRouter from "./routers/post-routes.js";

// // Define __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Create an uploads directory if it doesn't exist
// export const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer setup for single file uploads
// const storageSingle = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// export const uploadSingle = multer({ storage: storageSingle });

// // Multer setup for multiple file uploads
// const storageMultiple = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// export const uploadMultiple = multer({ storage: storageMultiple }).array(
//   "images",
//   3
// ); // Limit to 3 files

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(uploadDir));

// // Routes
// app.use("/user", userRouter);
// app.use("/post", postRouter);

// // mongoose setup
// const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log("Connection Successful with MongoDB Cloud"))
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// // app.js
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import express from "express";
// import cors from "cors";
// import fs from "fs";
// import mongoose from "mongoose";

// // Load environment variables from .env file
// dotenv.config({
//   path: path.resolve(fileURLToPath(import.meta.url), "..", "config.env"),
// });

// // Define __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Create an uploads directory if it doesn't exist
// export const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Serve static files from the "uploads" directory
// const app = express();
// app.use("/uploads", express.static(uploadDir));

// // Middleware setup
// app.use(cors());
// app.use(express.json()); // To process JSON data sent from requests

// // Import routes
// import userRouter from "./routers/user-routes.js"; // User-related routes
// import postRouter from "./routers/post-routes.js"; // Post-related routes

// // Routes
// app.use("/user", userRouter); // User-based routes
// app.use("/post", postRouter); // Post-based routes

// // MongoDB setup
// const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log("Connection successful with MongoDB Cloud"))
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// dotenv to configure path for .env which holds secure credentials
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({
  path: path.resolve(fileURLToPath(import.meta.url), "..", "config.env"),
});

// basic node and express setup
import express from "express";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import mongoose from "mongoose";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an uploads directory if it doesn't exist
export const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve static files from "uploads" directory
const app = express();
app.use("/uploads", express.static(uploadDir));

// Import routes - middleware
import userRouter from "./routers/user-routes.js"; // http://localhost:3000/user
import postRouter from "./routers/post-routes.js"; // http://localhost:3000/post

// Middleware setup
app.use(cors());
app.use(express.json()); // to process JSON data sent from requests

// Routes
app.use("/user", userRouter); // User-based routes
app.use("/post", postRouter); // Post-based routes

// mongoose setup
const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.psmtpt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connection Successful with MongoDB Cloud"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
