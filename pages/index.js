import { parseCookies } from "../helper/parseCookies";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../context/auth";
import Prosecution from "../components/Prosecution";
import NavBar from "../components/NavBar";

export default function Home({ token }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.user && token) {
      context.login(token);
    } else if (!context.user && !token) {
      router.push("/login");
    }
  });

  return (
    <>
      <NavBar username={context.user?.name} role={context.user?.role} />
      <Prosecution />
    </>
  );
}

export async function getServerSideProps({ params, req, res }) {
  const { token } = parseCookies(req);

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
    props: { token: token }, // will be passed to the page component as props
  };
}
