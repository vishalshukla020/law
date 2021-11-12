import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username can't be empty"],
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Required"],
    minlength: [10, "Phone no. must be at least 10 characters long"],
  },
  password: {
    type: String,
    required: [true, "Password can't be empty"],
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};
var User = mongoose.model("User", userSchema);

export default User;
