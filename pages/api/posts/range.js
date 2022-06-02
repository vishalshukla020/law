import Post from "../../../models/Post";
import dbConnect from "../../../helper/db";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { fromDate, toDate } = req.body;

      const posts = await Post.find({
        date: {
          $gte: new Date(fromDate),
          $lt: new Date(toDate),
        },
        approved: true,
      });

      if (posts) {
        return res.status(200).send(posts);
      } else {
        return res.status(404).send("No posts found");
      }
    } catch (err) {
      return res.status(404).send({ message: err });
    }
  } else {
    return res.status(404).send("request method not allowed");
  }
}
