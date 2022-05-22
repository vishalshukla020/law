import jwt from "jsonwebtoken";
import cookie from "cookie";

import User from "../../../models/User";
import dbConnect from "../../../helper/db";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone } = req.body;
    const user = await User.findOne({ phone });

    //if the user doesnt exist in db

    if (!user) {
      return res.status(404).send("user does not exist");
    }

    //if the user exists and credentials are correct
    res.status(200).send({ data: user });
  } else {
    res.status(422).send("req method not supported");
  }
}
