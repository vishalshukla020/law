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

import { CircularProgress } from "@material-ui/core";

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
import BatchTwoFormFour from "../components/forms/batchtwo/form-4";
import BatchTwoFormFive from "../components/forms/batchtwo/form-5";
import BatchTwoFormSix from "../components/forms/batchtwo/form-6";

export default function Home({ token }) {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

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
    BatchTwoFormFour: false,
    BatchTwoFormFive: false,
    BatchTwoFormSix: false,
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

  const progress = () => {
    setSubmitting(true);
    router.push("/new-forms");
    setTimeout(() => {
      setSubmitting(false);
    }, 10000);
  };

  return (
    <section id="page">
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="container" style={{ paddingBottom: "1em" }}>
        {!submitting ? (
          <Button
            disableElevation
            fullWidth
            color="secondary"
            variant="contained"
            onClick={progress}
          >
            ???????????? ?????? ?????????????????????
          </Button>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="container" style={{ paddingBottom: "1em" }}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          disableElevation
          fullWidth
          color="primary"
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
            (Form-1) ?????????????????? ????????? ????????? ????????????????????? ???????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("budget")}>
            (Form-2) ???????????????????????? ????????? ???????????????????????? ?????? ????????????????????? ????????? ??????????????????????????? ?????????????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("pension")}>
            (Form-3) ??????????????? ????????? ?????? ???????????? ???????????? ???????????? ??????????????? ?????? ?????????????????????-
          </MenuItem>
          <MenuItem onClick={() => handleClose("employement")}>
            (Form-4) ???????????? ??????????????? (2008) ?????? ????????????????????????????????? ?????? ???????????? ????????? ????????????????????????????????????
            ??????????????? ????????????????????????????????? ?????? ???????????? ??????????????????????????? ?????????????????? ??????????????????????????? (???0??????0??????0) ??????
            ???????????????????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("promotion")}>
            (Form-5) ????????????????????? ??????????????? ????????? ??????????????? ?????? ?????? ?????? ??????????????????????????? ?????? ??????????????? ?????????
            ???????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("powerOne")}>
            (Form-6) ???????????? ??????????????? - ??????????????? ????????????????????? ???????????? ??????????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("powerTwo")}>
            (Form-7) ???????????? ??????????????? - ?????????????????? ???????????????????????? ???????????? ??????????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormOne")}>
            (Form-7) ???????????? ??????????????????????????? ????????? ??????????????????????????? ????????????????????? ?????? ???????????????????????? ????????????????????????
            ?????????????????? ?????????????????? ???????????????????????? ???????????? ?????? ???????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormTwo")}>
            (Form-8) ???????????? ??????????????????????????? ????????? ???????????????????????? ???????????? ?????? ???????????????????????? ??????0??????0??????
            ?????????????????? ?????????????????? ???????????????????????? ???????????? ?????? ???????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormThree")}>
            (Form-9) ???????????? ??????????????????????????? ????????? ??????????????????????????? ????????????????????? ?????? ???????????????????????? ?????????????????????
            ?????????????????? ?????????????????? ???????????????????????? ???????????? ?????? ???????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormFour")}>
            (Form-10) ???????????? ??????????????????????????? ????????? ??????0???0??????0 ?????? ???????????????????????? ???????????????????????? ??????????????????
            ?????????????????? ???????????????????????? ???????????? ?????? ???????????????
          </MenuItem>
          <MenuItem onClick={() => handleClose("batchFormFive")}>
            (Form-11) : ???????????? ??????????????????????????? ????????? ???????????? ????????????????????? ?????? ???????????????????????? ??????0??????0??????
            ?????????????????? ?????????????????? ???????????????????????? ???????????? ?????? ???????????????
          </MenuItem>
          {/* <MenuItem onClick={() => handleClose("batchTwoFormOne")}>
            (Form-12) : ?????????????????? ?????????????????????????????? ????????? ????????? ????????? ?????????????????? ???????????????????????? ???????????? ????????????
            ???????????? ????????? ????????????????????? ??????????????? ???????????????????????? ??????????????? ??????????????? ????????????
          </MenuItem> */}
          {/* <MenuItem onClick={() => handleClose("batchTwoFormTwo")}>
            (Form-13) : ??????????????? ??? ????????????????????? ???????????? (??????.??????.??????.) ?????? ???????????????????????? ????????????
            ????????????????????? ??? ?????????????????? ????????????????????? ?????? ???????????? ??????????????? ?????? ?????????????????? ???????????????????????? ???????????? ?????????
            ????????????????????? ??????????????? ???????????????????????? ??????????????? ??????????????? ????????????
          </MenuItem> */}
          <MenuItem onClick={() => handleClose("batchTwoFormThree")}>
            (Form-12) : ????????????????????????, ????????????????????????, ????????????????????? ????????? ?????????????????? ??? ??????????????? ?????? ?????????-10
            ??? STF/ATS ?????? ??????????????????????????? ?????? ????????????????????? ????????? ????????? ?????????????????? ???????????????????????? ???????????? ????????????
            ???????????? ????????? ????????????????????? ??????????????? ???????????????????????? ??????????????? ??????????????? ????????????
          </MenuItem>
          {/* <MenuItem onClick={() => handleClose("batchTwoFormFour")}>
            (Form-15) : ???????????? ??? ????????????????????? ???????????? (??????.??????.??????.) ?????? ???????????????????????? ?????????????????? ????????????
            ?????? ??????????????????????????? ???????????? 60 (???) ???0?????????0 ?????????????????? ????????????????????? ?????? ???????????? ??????????????? ??????
            ?????????????????? ???????????????????????? ???????????? ????????? ????????????????????? ??????????????? ???????????????????????? ??????????????? ??????????????? ????????????
          </MenuItem> */}
          {/* <MenuItem onClick={() => handleClose("batchTwoFormFive")}>
            (Form-16) : ?????????????????? ?????? 25 ????????????????????? ?????????????????? ?????????????????? ????????? ???????????? ??????????????? ??????
            ????????????????????? ????????? ????????? ????????? ??????????????????????????? ????????? ????????????????????? ??????????????? ???????????????????????? ??????????????? ???????????????
            ????????????
          </MenuItem> */}
          {/* <MenuItem onClick={() => handleClose("batchTwoFormSix")}>
            (Form-17) : ????????????????????? ?????? ????????????????????? ??????????????????/????????????????????????/ ?????????????????? ????????????????????? ??????
            ??????????????????????????? ??????????????? ????????????
          </MenuItem> */}
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
      {state.batchTwoFormFour && <BatchTwoFormFour />}
      {state.batchTwoFormFive && <BatchTwoFormFive />}
      {state.batchTwoFormSix && <BatchTwoFormSix />}
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
