import User from "../../../models/User";
import dbConnect from "../../../helper/db";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password, phone } = req.body;
    const user = await new User({ username, password, phone });
    try {
      await user
        .save()
        .then(() => {
          res.status(201).send("user created");
        })
        .catch((err) => {
          res.status(403).send("user not created. Plz try again");
        });
    } catch (error) {
      res.status(402).send(error.message);
    }
  } else {
    res.status(422).send("req method not supported");
  }
}
