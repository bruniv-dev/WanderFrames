// import mongoose, { Schema, model } from "mongoose";

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 6,
//   },
//   profileImage: {
//     type: String,
//     default:
//       "https://yourteachingmentor.com/wp-content/uploads/2020/12/istockphoto-1223671392-612x612-1.jpg",
//   },
//   posts: [
//     {
//       type: mongoose.Types.ObjectId,
//       ref: "Post",
//     },
//   ],
//   favorites: [
//     {
//       type: mongoose.Types.ObjectId,
//       ref: "Post",
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// //model("name of model", schema of model)
// //Mongodb will store this collection as users in the database
// export default model("User", userSchema);

import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  bio: {
    type: String,
    default: "Hi, I'm excited to share my travel stories.",
  },
  profileImage: {
    type: String,
    default:
      "https://yourteachingmentor.com/wp-content/uploads/2020/12/istockphoto-1223671392-612x612-1.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
  favorites: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export default model("User", userSchema);
