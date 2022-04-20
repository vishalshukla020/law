import { parseCookies } from "../helper/parseCookies";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../context/auth";
import NavBar from "../components/NavBar";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";
import NewFormOne from "../components/newForms/Form-1";
import NewFormTwo from "../components/newForms/Form-2";
import NewFormThree from "../components/newForms/Form-3";
import NewFormFour from "../components/newForms/Form-4";
import NewFormFive from "../components/newForms/Form-5";
import NewFormSix from "../components/newForms/Form-6";
import NewFormSeven from "../components/newForms/Form-7";

export default function HomeTwo({ token }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    newFormOne: true,
    newFormTwo: false,
    newFormThree: false,
    newFormFour: false,
    newFormFive: false,
    newFormSix: false,
    newFormSeven: false,
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
    <section id="page">
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="container" style={{ paddingBottom: "1em" }}>
        <Link href="/">
          <Button
            disableElevation
            fullWidth
            color="primary"
            variant="contained"
          >
            Select From Old Forms
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
          <MenuItem onClick={() => handleClose("newFormOne")}>
            (Form-1) प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के
            विरूद्ध माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
            पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("newFormTwo")}>
            (Form-2) पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("newFormThree")}>
            (Form-3) प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के
            विरूद्ध माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
            पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("newFormFour")}>
            (Form-4) पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("newFormFive")}>
            (Form-5) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम
            के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी
            मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("newFormSix")}>
            (Form-6) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम
            के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी
            मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("newFormSix")}>
            (Form-7) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से
            सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के विचारण
            प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
        </Menu>
      </div>

      {state.newFormOne && <NewFormOne />}
      {state.newFormTwo && <NewFormTwo />}
      {state.newFormThree && <NewFormThree />}
      {state.newFormFour && <NewFormFour />}
      {state.newFormFive && <NewFormFive />}
      {state.newFormSix && <NewFormSix />}
      {state.newFormSeven && <NewFormSeven />}
    </section>
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
