import { parseCookies } from "../helper/parseCookies";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import { AuthContext } from "../context/auth";
import baseUrl from "../helper/baseURL";
import NavBar from "../components/NavBar";
import Table from "../components/Table";

export default function Admin({ token, posts, user }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.user && token) {
      context.login(token);
    } else if (!context.user && !token) {
      router.push("/login");
    } else if (user.role !== "admin") {
      router.push("/login");
    }
  });

  if (user.role !== "admin") {
    return (
      <div
        className="container flex max-height"
        style={{ justifyContent: "center" }}
      >
        <h1>Not Authortized</h1>
      </div>
    );
  }

  return (
    <>
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="containerTable">
        <Table posts={posts} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params, req, res }) {
  const { token } = parseCookies(req);
  const { data } = await axios.get(`${baseUrl}/api/posts`);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  return {
    props: { token: token, posts: data, user: jwt.decode(token) }, // will be passed to the page component as props
  };
}
