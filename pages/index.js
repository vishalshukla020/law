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
import PromotionForm from "../components/forms/promotion";
import PowerOneForm from "../components/forms/power-1";
import PowerTwoForm from "../components/forms/power-2";

//batch forms total of 6
import BatchFormOne from "../components/forms/batch/form-1";
import BatchFormTwo from "../components/forms/batch/form-2";
import BatchFormThree from "../components/forms/batch/form-3";
import BatchFormFour from "../components/forms/batch/form-4";
import BatchFormFive from "../components/forms/batch/form-5";

//batch from total of two
import BatchTwoFormOne from "../components/forms/batchtwo/form-1";
import BatchTwoFormTwo from "../components/forms/batchtwo/form-2";
import BatchTwoFormThree from "../components/forms/batchtwo/form-3";

export default function Home({ token }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    prosecution: true,
    budget: false,
    employement: false,
    pension: false,
    promotion: false,
    powerOne: false,
    powerTwo: false,
    batchFormOne: false,
    batchFormTwo: false,
    batchFormThree: false,
    batchFormFour: false,
    batchFormFive: false,
    batchTwoFormOne: false,
    batchTwoFormTwo: false,
    batchTwoFormThree: false,
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
          <MenuItem onClick={() => handleClose("batchFormOne")}>
            (Form-7) सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत डी०जी०सी
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormTwo")}>
            (Form-8) सत्र न्यायालयो में एससीएसटी एक्ट के अन्तर्गत डी0जी0सी
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormThree")}>
            (Form-9) सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत अभियोजन
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormFour")}>
            (Form-10) सत्र न्यायालयो में भा0द0वि0 के अन्तर्गत डी०जी०सी संवर्ग
            द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormFive")}>
            (Form-11) : सत्र न्यायालयो में अन्य अधिनियम के अन्तर्गत डी0जी0सी
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoFormOne")}>
            (Form-12) : पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoFormTwo")}>
            (Form-13) : विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध
            अधिनियम व आबकारी अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा
            निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoFormThree")}>
            (Form-14) : माफियाओं, गैंगस्टर, गुण्डों एवं जनपदों व थानों के टॉप-10
            व STF/ATS के अपराधियों के विरूद्ध माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
        </Menu>
      </div>
      {state.prosecution && <Prosecution />}
      {state.budget && <BudgetForm />}
      {state.pension && <PensionForm />}
      {state.employement && <EmployementForm />}
      {state.promotion && <PromotionForm />}
      {state.powerOne && <PowerOneForm />}
      {state.powerTwo && <PowerTwoForm />}
      {state.batchFormOne && <BatchFormOne />}
      {state.batchFormTwo && <BatchFormTwo />}
      {state.batchFormThree && <BatchFormThree />}
      {state.batchFormFour && <BatchFormFour />}
      {state.batchFormFive && <BatchFormFive />}
      {state.batchTwoFormOne && <BatchTwoFormOne />}
      {state.batchTwoFormTwo && <BatchTwoFormTwo />}
      {state.batchTwoFormThree && <BatchTwoFormThree />}
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
