import { parseCookies } from "../../helper/parseCookies";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import { AuthContext } from "../../context/auth";
import baseUrl from "../../helper/baseURL";
import NavBar from "../../components/NavBar";
import Table from "../../components/Table";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Link from "next/link";
import FormTwoTable from "../../components/form-2-table";
import PensionTable from "../../components/tables/pension";
import EmployementTable from "../../components/tables/employement";
import PromotionTable from "../../components/tables/promotion";
import PowerOneTable from "../../components/tables/power-1";
import PowerTwoTable from "../../components/tables/power-2";

//batch tables
import BatchTableOne from "../../components/tables/batch/table-1";
import BatchTableTwo from "../../components/tables/batch/table-2";
import BatchTableThree from "../../components/tables/batch/table-3";
import BatchTableFour from "../../components/tables/batch/table-4";
import BatchTableFive from "../../components/tables/batch/table-5";

//batchTableTwo
import BatchTwoTableOne from "../../components/tables/batchtwo/table-1";
import BatchTwoTableTwo from "../../components/tables/batchtwo/table-2";
import BatchTwoTableThree from "../../components/tables/batchtwo/table-3";
import BatchTwoTableFour from "../../components/tables/batchtwo/table-4";
import BatchTwoTableFive from "../../components/tables/batchtwo/table-5";

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
    batchTableOne: false,
    batchTableTwo: false,
    batchTableThree: false,
    batchTableFour: false,
    batchTableFive: false,
    batchTwoTableOne: false,
    batchTwoTableTwo: false,
    batchTwoTableThree: false,
    batchTwoTableFour: false,
    batchTwoTableFive: false,
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
        <Link href="/admin-panel/new-forms">
          <Button
            disableElevation
            fullWidth
            color="primary"
            variant="contained"
          >
            शासन के प्रारूप
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
          <MenuItem onClick={() => handleClose("batchTableOne")}>
            (Form-8) सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत डी०जी०सी
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTableTwo")}>
            (Form-9) सत्र न्यायालयो में एससीएसटी एक्ट के अन्तर्गत डी0जी0सी
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTableThree")}>
            (Form-10) सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत अभियोजन
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTableFour")}>
            (Form-11) : सत्र न्यायालयो में भा0द0वि0 के अन्तर्गत डी०जी०सी संवर्ग
            द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTableFive")}>
            (Form-12) सत्र न्यायालयो में अन्य अधिनियम के अन्तर्गत डी0जी0सी
            संवर्ग द्वारा अभियोजित वादो का विवरण
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoTableOne")}>
            (Form-13) पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoTableTwo")}>
            (Form-14) विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम
            व आबकारी अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत
            वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoTableThree")}>
            (Form-15) माफियाओं, गैंगस्टर, गुण्डों एवं जनपदों व थानों के टॉप-10 व
            STF/ATS के अपराधियों के विरूद्ध माह में विचारण प्रारम्भ किये जाने
            वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoTableFour")}>
            (Form-16) विशष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से
            सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के विधारण
            प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchTwoTableFive")}>
            (Form-17) प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के
            विरूद्ध माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
            पत्र
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
        {state.batchTableOne && (
          <BatchTableOne
            posts={posts.filter((post) => post.formName == "batch-form-1")}
          />
        )}
        {state.batchTableTwo && (
          <BatchTableTwo
            posts={posts.filter((post) => post.formName == "batch-form-2")}
          />
        )}
        {state.batchTableThree && (
          <BatchTableThree
            posts={posts.filter((post) => post.formName == "batch-form-3")}
          />
        )}
        {state.batchTableFour && (
          <BatchTableFour
            posts={posts.filter((post) => post.formName == "batch-form-4")}
          />
        )}
        {state.batchTableFive && (
          <BatchTableFive
            posts={posts.filter((post) => post.formName == "batch-form-5")}
          />
        )}
        {state.batchTwoTableOne && (
          <BatchTwoTableOne
            posts={posts.filter((post) => post.formName == "batchTwoForm-1")}
          />
        )}
        {state.batchTwoTableTwo && (
          <BatchTwoTableTwo
            posts={posts.filter((post) => post.formName == "batchTwoForm-2")}
          />
        )}
        {state.batchTwoTableThree && (
          <BatchTwoTableThree
            posts={posts.filter((post) => post.formName == "batchTwoForm-3")}
          />
        )}
        {state.batchTwoTableFour && (
          <BatchTwoTableFour
            posts={posts.filter((post) => post.formName == "batchTwoForm-4")}
          />
        )}
        {state.batchTwoTableFive && (
          <BatchTwoTableFive
            posts={posts.filter((post) => post.formName == "batchTwoForm-5")}
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
