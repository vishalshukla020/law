import { Formik, Form, Field } from "formik";
import {
  Typography,
  Paper,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import { useContext, useState } from "react";
import axios from "axios";

//date
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

import { AuthContext } from "../../../context/auth";

const district = [
  "Agra",
  "Aligarh",
  "Allahabad",
  "Ambedkar Nagar",
  "Amethi (Chatrapati Sahuji Mahraj Nagar)",
  "Amroha (J.P. Nagar)",
  "Auraiya",
  "Azamgarh",
  "Baghpat",
  "Bahraich",
  "Ballia",
  "Balrampur",
  "Banda",
  "Barabanki",
  "Bareilly",
  "Basti",
  "Bhadohi",
  "Bijnor",
  "Budaun",
  "Bulandshahr",
  "Chandauli",
  "Chitrakoot",
  "Deoria",
  "Etah",
  "Etawah",
  "Faizabad",
  "Farrukhabad",
  "Fatehpur",
  "Firozabad",
  "Gautam Buddha Nagar",
  "Ghaziabad",
  "Ghazipur",
  "Gonda",
  "Gorakhpur",
  "Hamirpur",
  "Hapur (Panchsheel Nagar)",
  "Hardoi",
  "Hathras",
  "Jalaun",
  "Jaunpur",
  "Jhansi",
  "Kannauj",
  "Kanpur Dehat",
  "Kanpur Nagar",
  "Kanshiram Nagar (Kasganj)",
  "Kaushambi",
  "Kushinagar (Padrauna)",
  "Lakhimpur - Kheri",
  "Lalitpur",
  "Lucknow",
  "Maharajganj",
  "Mahoba",
  "Mainpuri",
  "Mathura",
  "Mau",
  "Meerut",
  "Mirzapur",
  "Moradabad",
  "Muzaffarnagar",
  "Pilibhit",
  "Pratapgarh",
  "RaeBareli",
  "Rampur",
  "Saharanpur",
  "Sambhal (Bhim Nagar)",
  "Sant Kabir Nagar",
  "Shahjahanpur",
  "Shamali (Prabuddh Nagar)",
  "Shravasti",
  "Siddharth Nagar",
  "Sitapur",
  "Sonbhadra",
  "Sultanpur",
  "Unnao",
  "Varanasi",
];

export default function BatchTwoFormOne() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              formName: "batchTwoForm-1",
              username: context.user?.name,
              userId: context.user?.id,
              courtName: "",
              district: "",
              officerName: "",
              discriminantName: "",
              prosecutor: "",
              policeStation: "",
              satraSankhya: "",
              act: "",
              dated: "",
              totalCases: "",
              punished: "",
              punishmentTime: "",
              freed: "",
              timeTaken: "",
            }}
            validationSchema={Yup.object({
              courtName: Yup.string().required("required field"),
              district: Yup.string().required("required field"),

              officerName: Yup.string().required("required field"),
              prosecutor: Yup.string().required("required field"),
              discriminantName: Yup.string().required("required field"),
              policeStation: Yup.string().required("required field"),
              satraSankhya: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              act: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              dated: Yup.date().required("required field"),
              totalCases: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punished: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishmentTime: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freed: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              timeTaken: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
            })}
            onSubmit={(values, actions) => {
              setSubmitting(true);
              setTimeout(() => {
                setSubmitting(false);
              }, 5000);
              axios
                .post("/api/posts", { ...values })
                .then((res) => {
                  console.log(res);
                  if (res.status == 202) {
                    window.alert("Form successfully submitted");
                    actions.resetForm();
                    location.reload();
                  }
                })
                .catch((err) =>
                  window.alert(
                    "Something went wrong, please try again later",
                    err.message
                  )
                );
              actions.resetForm();
            }}
          >
            {(props) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form autoComplete="off">
                  <Typography variant="h6" className="form-heading">
                    ?????????????????? ?????????????????????????????? ????????? ????????? ????????? ?????????????????? ???????????????????????? ???????????? ???????????? ????????????
                    ????????? ????????????????????? ??????????????? ???????????????????????? ??????????????? ??????????????? ????????????
                  </Typography>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="district"
                      label="????????????"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="courtName"
                      label="???????????????????????? ?????? ?????????"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="officerName"
                      label="????????????????????? ????????????????????? ?????? ?????????"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="prosecutor"
                      label="????????????????????? ?????? ?????????"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="discriminantName"
                      label="?????????????????? ?????? ?????????"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="policeStation"
                      label="????????????"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <fieldset>
                    <legend>????????? ????????? ?????????????????? ???????????? ????????? ?????????????????? ?????? ???????????????</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="satraSankhya"
                        label="???0??????0 / ???????????? ?????????????????? ??????0"
                        component={TextField}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="act"
                        label="????????????"
                        component={TextField}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="dated"
                        label="???????????? ?????????????????? ???????????? ???????????? ?????? ??????????????????"
                        component={DatePicker}
                        variant="outlined"
                      />
                    </div>
                  </fieldset>
                  <div className="form-block">
                    <fieldset>
                      <legend>????????? ????????? ????????????????????? ??????????????? ?????? ???????????????</legend>
                      <div className="form-block">
                        <Field
                          fullWidth
                          name="totalCases"
                          label="????????? ????????????????????? ?????????"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                      <div className="form-block">
                        <Field
                          fullWidth
                          name="punished"
                          label="?????????"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                      <div className="form-block">
                        <Field
                          fullWidth
                          name="punishmentTime"
                          label="????????? ?????? ????????????"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                      <div className="form-block">
                        <Field
                          fullWidth
                          name="freed"
                          label="????????????"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>

                      <div className="form-block">
                        <Field
                          fullWidth
                          name="timeTaken"
                          label="???????????? ??????????????? ?????? ?????????????????? ?????? ????????????"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                    </fieldset>
                  </div>

                  {submitting ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      type="submit"
                      className="button"
                      variant="contained"
                      color="primary"
                    >
                      submit
                    </Button>
                  )}
                </Form>
              </MuiPickersUtilsProvider>
            )}
          </Formik>
        </Paper>
      </div>
    </section>
  );
}
