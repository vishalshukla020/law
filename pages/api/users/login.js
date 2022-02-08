import jwt from "jsonwebtoken";
import cookie from "cookie";

import User from "../../../models/User";
import dbConnect from "../../../helper/db";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    //if the user doesnt exist in db

    if (!user) {
      return res.status(404).send("user does not exist");
    }

    //if the password is incorrect
    if (user.password !== password) {
      return res.status(403).send("incorrect credentials");
    }

    //if the user exists and credentials are correct
    const token = jwt.sign(
      { id: user.id, name: user.username, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "60m" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );

    res.status(200).send({ token: token, role: user.role });
  } else {
    res.status(422).send("req method not supported");
  }
}
