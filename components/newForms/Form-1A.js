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

import { AuthContext } from "../../context/auth";

//dated version
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

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

export default function FormOne() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              formName: "Form-1A",
              username: context.user?.name,
              userId: context.user?.id,
              district: "",
              criminalName: "",
              courtName: "",
              prosecutorName: "",
              policeStation: "",
              satraSankhya: "",
              act: "",
              filedDate: "",
              liscenseTermination: "",
              netWorth: "",
              punishGiroh: "",
              punishBhav: "",
              freedGiroh: "",
              freedBhav: "",
              timeTaken: "",
              punishmentTime: "",
            }}
            validationSchema={Yup.object({
              criminalName: Yup.string().required("required field"),
              courtName: Yup.string().required("required field"),
              prosecutorName: Yup.string().required("required field"),
              policeStation: Yup.string().required("required field"),

              satraSankhya: Yup.string().required("required field"),
              act: Yup.string().required("required field"),

              filedDate: Yup.date()
                .required("required field")
                .typeError("Should be a date"),
              liscenseTermination: Yup.date()
                .required("required field")
                .typeError("Should be a date"),
              netWorth: Yup.string().required("required field"),
              punishGiroh: Yup.string().required("required field"),
              punishBhav: Yup.string().required("required field"),
              freedGiroh: Yup.string().required("required field"),
              freedBhav: Yup.string().required("required field"),
              timeTaken: Yup.string().required("required field"),
              punishmentTime: Yup.string().required("required field"),
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
                    ????????????????????? (???) - ?????????????????? ?????? 25 ????????????????????? ?????????????????? ?????????????????? ????????? ????????????
                    ??????????????? ?????? ????????????????????? ????????? ????????? ????????? ??????????????????????????? ????????? ????????????????????? ???????????????
                    ???????????????????????? ??????????????? ??????????????? ????????????
                  </Typography>
                  <FormControl className="form-block" fullWidth>
                    <InputLabel htmlFor="district">????????????</InputLabel>
                    <Field
                      component={Select}
                      name="district"
                      id="district"
                      inputProps={{ id: "district" }}
                    >
                      {district.map((item, i) => (
                        <MenuItem value={item} key={i}>
                          {item}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="criminalName"
                      label="????????????????????? ?????????????????? ?????????????????? ?????? ?????????"
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
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="prosecutorName"
                      label="????????????????????? ?????? ?????????"
                      component={TextField}
                      variant="outlined"
                    />

                    <Field
                      fullWidth
                      name="policeStation"
                      label="????????????"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <fieldset>
                    <legend>??????????????????????????? ?????????????????????</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="satraSankhya"
                        label="???0??????0/???????????? ?????????????????? ?????????"
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
                    </div>

                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="filedDate"
                        label="???????????? ?????????????????? ???????????? ???????????? ?????? ??????????????????"
                        component={DatePicker}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="liscenseTermination"
                        label="???????????????????????? ??????????????????????????????"
                        component={DatePicker}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="netWorth"
                        label="???????????? 14 (1) ?????? ???????????????????????? ??????????????? ????????? ????????????????????????,?????????????????????????????? ????????? ????????????????????? ?????????????????? ?????? ???????????????"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>?????????</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="punishGiroh"
                        label="???????????????????????????"
                        component={TextField}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="punishBhav"
                        label="??????0???0??????0"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>????????????</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="freedGiroh"
                        label="???????????????????????????"
                        component={TextField}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="freedBhav"
                        label="??????0???0??????0"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                  </fieldset>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="timeTaken"
                      label="???????????? ??????????????? ?????? ?????????????????? ?????? ?????? ????????????"
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
