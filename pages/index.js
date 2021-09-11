import { parseCookies } from "../helper/parseCookies";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../context/auth";
import Prosecution from "../components/Prosecution";
import NavBar from "../components/NavBar";
import BudgetForm from "../components/budgetForm";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";
import PensionForm from "../components/forms/pension";
import EmployementForm from "../components/forms/employment";

export default function Home({ token }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    prosecution: true,
    budget: false,
    pension: false,
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
    }
  });

  return (
    <>
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

          <MenuItem>
            <Link href="#">
              <a href="">(Form-5)</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#">
              <a href="">(Form-6)</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#">
              <a href="">(Form-7)</a>
            </Link>
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
      {state.prosecution && <Prosecution />}
      {state.budget && <BudgetForm />}
      {state.pension && <PensionForm />}
      {state.employement && <EmployementForm />}
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
