import { Schema, model } from "mongoose";

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
  posts: [
    {
      type: String,
    },
  ],
});

//model("name of model", schema of model)
//Mongodb will store this collection as users in the database
export default model("User", userSchema);
