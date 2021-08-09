import jwt from "jsonwebtoken";
import cookie from "cookie";

import User from "../../../models/User";
import Post from "../../../models/Post";
import dbConnect from "../../../helper/db";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const type = req.body.type;
    const id = req.body.id;
    if (type === "approve") {
      try {
        await Post.findByIdAndUpdate(id, { approved: true })
          .then((updatedPost) => {
            return res.status(200).send(updatedPost);
          })
          .catch((err) => {
            return res.status(500).send(err);
          });
      } catch (error) {
        return res.status(404).send(error.message);
      }
    } else if (type === "delete") {
      try {
        await Post.findByIdAndDelete(id)
          .then(() => {
            return res.status(200).send("deleted");
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send(err);
          });
      } catch (error) {
        return res.status(404).send(error.message);
      }
    }
  } else {
    res.status(422).send("req method not supported");
  }
}
