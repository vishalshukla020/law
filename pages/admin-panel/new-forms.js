import { parseCookies } from "../../helper/parseCookies";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import { AuthContext } from "../../context/auth";
import baseUrl from "../../helper/baseURL";
import NavBar from "../../components/NavBar";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";

import TableOne from "../../components/newTables/Table-1";
import TableTwo from "../../components/newTables/Table-2";
import TableThree from "../../components/newTables/Table-3";
import TableFour from "../../components/newTables/Table-4";
import TableFive from "../../components/newTables/Table-5";
import TableSix from "../../components/newTables/Table-6";
import TableSeven from "../../components/newTables/Table-7";

export default function Admin({ token, posts, user }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const [state, setState] = useState({
    tableOne: true,
    tableTwo: false,
    tableThree: false,
    tableFour: false,
    tableFive: false,
    tableSix: false,
    tableSeven: false,
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
  return (
    <section id="page">
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="container" style={{ paddingBottom: "1em" }}>
        <Link href="/admin-panel">
          <Button
            disableElevation
            fullWidth
            color="primary"
            variant="contained"
          >
            Select from old forms
          </Button>
        </Link>
      </div>
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
            marginBottom: "5rem",
            transform: "translate(-50%,45px)",
            width: "80%",
          }}
        >
          <MenuItem onClick={() => handleClose("tableOne")}>
            (Form-1) प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के
            विरूद्ध माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
            पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("tableThree")}>
            (Form-2) प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के
            विरूद्ध माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
            पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("tableTwo")}>
            (Form-3) पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("tableFour")}>
            (Form-4) पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("tableSeven")}>
            (Form-5) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से
            सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के विचारण
            प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("tableFive")}>
            (Form-6) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम
            के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी
            मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("tableSix")}>
            (Form-7) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम
            के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी
            मासिक विवरण पत्र
          </MenuItem>
        </Menu>
      </div>
      <div className="containerTable">
        {state.tableOne && (
          <TableOne
            posts={posts.filter((post) => post.formName == "newAddedForm-1")}
          />
        )}
        {state.tableTwo && (
          <TableTwo
            posts={posts.filter((post) => post.formName == "newAddedForm-2")}
          />
        )}
        {state.tableThree && (
          <TableThree
            posts={posts.filter((post) => post.formName == "newAddedForm-3")}
          />
        )}
        {state.tableFour && (
          <TableFour
            posts={posts.filter((post) => post.formName == "newAddedForm-4")}
          />
        )}
        {state.tableFive && (
          <TableFive
            posts={posts.filter((post) => post.formName == "newAddedForm-5")}
          />
        )}
        {state.tableSix && (
          <TableSix
            posts={posts.filter((post) => post.formName == "newAddedForm-6")}
          />
        )}
        {state.tableSeven && (
          <TableSeven
            posts={posts.filter((post) => post.formName == "newAddedForm-7")}
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
