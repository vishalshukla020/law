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

export default function BatchTwoFormFour() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              formName: "batchTwoForm-5",
              username: context.user?.name,
              userId: context.user?.id,
              courtName: "",
              district: "",
              criminalName: "",
              prosecutor: "",
              policeStation: "",
              satraSankhya: "",
              act: "",
              dated: "",
              liscenseTermination: "",
              propertyValue: "",
              totalGiroh: "",
              totalBhav: "",
              punishGiroh: "",
              punishBhav: "",
              freedGiroh: "",
              freedBhav: "",
              timeTaken: "",
              punishmentTime: "",
            }}
            validationSchema={Yup.object({
              courtName: Yup.string().required("required field"),
              district: Yup.string().required("required field"),
              criminalName: Yup.string().required("required field"),
              prosecutor: Yup.string().required("required field"),
              policeStation: Yup.string().required("required field"),
              satraSankhya: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              act: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              dated: Yup.date().required("required field"),
              liscenseTermination: Yup.date().required("required field"),
              propertyValue: Yup.number()
                .required("required field")
                .typeError("Should be a number"),

              totalGiroh: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              totalBhav: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishGiroh: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishBhav: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freedGiroh: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freedBhav: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              timeTaken: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishmentTime: Yup.number()
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
                    प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के विरूद्ध
                    माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
                    पत्र
                  </Typography>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="district"
                      label="जनपद"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="criminalName"
                      label="चिन्हित माफिया अपराधी का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="courtName"
                      label="न्यायालय का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>

                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="prosecutor"
                      label="अभियोजक का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="policeStation"
                      label="थाना"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <fieldset>
                    <legend>गिरोहबन्द अधिनियम</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="satraSankhya"
                        label="अ0सं0 / सत्र विचारण सं0"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="act"
                        label="धारा"
                        component={TextField}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="dated"
                        label="आरोप विरचित किये जाने का दिनांक"
                        component={DatePicker}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="liscenseTermination"
                        label="लाइसेन्स  निरस्तीकरण"
                        component={DatePicker}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="propertyValue"
                        label="धारा 14 (1) के अन्तर्गत कुर्क तथा जब्तीकरण,ध्वस्ती करण एवं अवमुक्त सम्पति का मूल्य"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                  </fieldset>
                  <div className="form-block">
                    <fieldset>
                      <legend>माह में निर्णीत वादों का विवरण</legend>
                      <fieldset>
                        <legend>कुल निर्णीत वाद</legend>
                        <div className="form-block flex">
                          <Field
                            fullWidth
                            name="totalGiroh"
                            label="गिरोहबन्द"
                            component={TextField}
                            variant="outlined"
                          />
                          <Field
                            fullWidth
                            name="totalBhav"
                            label="भा0द0वि0"
                            component={TextField}
                            variant="outlined"
                          />
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>सजा</legend>
                        <div className="form-block flex">
                          <Field
                            fullWidth
                            name="punishGiroh"
                            label="गिरोहबन्द"
                            component={TextField}
                            variant="outlined"
                          />
                          <Field
                            fullWidth
                            name="punishBhav"
                            label="भा0द0वि0"
                            component={TextField}
                            variant="outlined"
                          />
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>रिहा</legend>
                        <div className="form-block flex">
                          <Field
                            fullWidth
                            name="freedGiroh"
                            label="गिरोहबन्द"
                            component={TextField}
                            variant="outlined"
                          />
                          <Field
                            fullWidth
                            name="freedBhav"
                            label="भा0द0वि0"
                            component={TextField}
                            variant="outlined"
                          />
                        </div>
                      </fieldset>
                    </fieldset>
                  </div>
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="timeTaken"
                      label="आरोप विरचन से निर्णय अवधि"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="punishmentTime"
                      label="सजा की अवधि"
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
