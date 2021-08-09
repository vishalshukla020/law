const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    formName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { strict: false }
);

mongoose.models = {};
var Post = mongoose.model("Post", postSchema);
export default Post;
