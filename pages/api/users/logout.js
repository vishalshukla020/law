import cookie from "cookie";

export default function handler(req, res) {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
    return res.status(200).send("User logged out");
  }
}
