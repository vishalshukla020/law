import Post from "../../../models/Post";
import dbConnect from "../../../helper/db";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const post = new Post({ ...req.body });

    await post
      .save()
      .then((post) => {
        res.status(202).send(post);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } else if (req.method === "GET") {
    try {
      await Post.find({ approved: true})
        .then((posts) => {
          return res.status(200).send(posts);
        })
        .catch((err) => {
          console.error(err);
          res.status(400).send(err);
        });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
