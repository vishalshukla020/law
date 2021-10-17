import Navbar from "../components/NavBar";
import { parseCookies } from "../helper/parseCookies";
import axios from "axios";
import baseUrl from "../helper/baseURL";
import jwt from "jsonwebtoken";

import { useContext, useEffect } from "react";

import { AuthContext } from "../context/auth";
import { Paper } from "@material-ui/core";

const formsName = {
  prosecution: "प्रदेश में हुए अभियोजन कार्य / Prosecution done in the state",
  employement:
    "वेतन समिति (2008) की संस्तुतियों पर लिये गये निर्णयानुसार राज्य कर्मचारियों के लिये सुनिश्चित कैरियर प्रोन्नयन (ए0सी0पी0) की व्यवस्था।",
  promotion: "अभियोजन विभाग में समह–ग के पद पर प्रोन्नति के संबंध में विवरण",
  pension: "पेंशन पटल से मॉगी जाने वाली सूचना",
  extraBudget: "अतिरिक्त बजट मांगपत्र के सम्बन्ध में",
};

export default function Logs({ token, posts, user }) {
  const context = useContext(AuthContext);

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
    <section id="page">
      <Navbar username={context.user?.name} role={context.user?.role} />
      <div className="container">
        <div className="user-data">
          <div className="wrapper row">
            {posts.map((post) => (
              <Paper className="user-data">
                <ul className="log-list">
                  <li>
                    <div className="heading">Form: </div>
                    <span>{formsName[post.formName]}</span>
                  </li>
                  <li>
                    <div className="heading">User: </div>
                    <span>{post.username}</span>
                  </li>
                  <li>
                    <div className="heading">Date: </div>
                    <span>{post.date.substring(0, 10)}</span>
                  </li>
                </ul>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </section>
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
