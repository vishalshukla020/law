import { parseCookies } from "../helper/parseCookies";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import { AuthContext } from "../context/auth";
import baseUrl from "../helper/baseURL";
import NavBar from "../components/NavBar";
import Table from "../components/Table";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";
import FormTwoTable from "../components/form-2-table";
import PensionTable from "../components/tables/pension";
import EmployementTable from "../components/tables/employement";
import PromotionTable from "../components/tables/promotion";
import PowerOneTable from "../components/tables/power-1";
import PowerTwoTable from "../components/tables/power-2";

export default function Admin({ token, posts, user }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const [state, setState] = useState({
    prosecution: true,
    budget: false,
    pension: false,
    employement: false,
    promotion: false,
    powerOne: false,
    powerTwo: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (formname) => {
    setState({ [formname]: true });
    setAnchorEl(null);
  };

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
  console.log(posts);

  return (
    <section id="page">
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="container" style={{ paddingBottom: "1em" }}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          disableElevation
          fullWidth
          color="secondary"
          variant="contained"
        >
          Select form
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{
            marginLeft: "55%",
            transform: "translate(-50%,45px)",
          }}
        >
          <MenuItem onClick={() => handleClose("prosecution")}>
            (Form-1) प्रदेश में हुए अभियोजन कार्य
          </MenuItem>
          <MenuItem onClick={() => handleClose("budget")}>
            (Form-2) अतिरिक्त बजट मांगपत्र के सम्बन्ध में निर्धारित प्रारूप
          </MenuItem>
          <MenuItem onClick={() => handleClose("pension")}>
            (Form-3) पेंशन पटल से मॉगी जाने वाली सूचना का प्रारूप-
          </MenuItem>
          <MenuItem onClick={() => handleClose("employement")}>
            (Form-4) वेतन समिति (2008) की संस्तुतियों पर लिये गये निर्णयानुसार
            राज्य कर्मचारियों के लिये सुनिश्चित कैरियर प्रोन्नयन (ए0सी0पी0) की
            व्यवस्था।
          </MenuItem>
          <MenuItem onClick={() => handleClose("promotion")}>
            (Form-5) अभियोजन विभाग में समह–ग के पद पर प्रोन्नति के संबंध में
            विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("powerOne")}>
            (Form-6) मिशन शक्ति - राज्य अभियोजन सेवा संवर्ग
          </MenuItem>
          <MenuItem onClick={() => handleClose("powerTwo")}>
            (Form-7) मिशन शक्ति - शासकीय अधिवक्ता सेवा संवर्ग
          </MenuItem>

          <MenuItem>
            <Link href="#">
              <a href="">(Form-8)</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#">
              <a href="">(Form-9)</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#">
              <a href="">(Form-10)</a>
            </Link>
          </MenuItem>
        </Menu>
      </div>
      <div className="containerTable">
        {state.prosecution && (
          <Table
            posts={posts.filter((post) => post.formName == "prosecution")}
          />
        )}
        {state.budget && (
          <FormTwoTable
            posts={posts.filter((post) => post.formName == "extraBudget")}
          />
        )}
        {state.pension && (
          <PensionTable
            posts={posts.filter((post) => post.formName == "pension")}
          />
        )}
        {state.employement && (
          <EmployementTable
            posts={posts.filter((post) => post.formName == "employement")}
          />
        )}
        {state.promotion && (
          <PromotionTable
            posts={posts.filter((post) => post.formName == "promotion")}
          />
        )}
        {state.powerOne && (
          <PowerOneTable
            posts={posts.filter((post) => post.formName == "power-1")}
          />
        )}
        {state.powerTwo && (
          <PowerTwoTable
            posts={posts.filter((post) => post.formName == "power-2")}
          />
        )}
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
