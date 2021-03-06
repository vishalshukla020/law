import Post from "../../../models/Post";
import User from "../../../models/User";
import dbConnect from "../../../helper/db";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.user;
    // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    //   // it's an ObjectID
    //   return res.status(400).send('invalid id')
    // } 
    const user = await User.findById(id);

    await Post.find({ username: user.username })
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  } else {
    res.status(422).send("req method not supported");
  }
}
