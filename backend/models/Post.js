import mongoose, { Schema, model } from "mongoose";

const postSchema = new mongoose.Schema({
  images: [
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],

  date: {
    type: Date,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  subLocation: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

//posts in controllers
export default mongoose.model("Post", postSchema);
