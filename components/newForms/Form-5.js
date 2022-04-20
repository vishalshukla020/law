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

export default function FormFive() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              formName: "newAddedForm-5",
              username: context.user?.name,
              userId: context.user?.id,
              district: "",
              courtName: "",
              officerName: "",
              prosecutorName: "",
              discriminantName: "",
              policeStation: "",
              satraSankhya: "",
              act: "",
              filedDate: "",
              punished: "",
              freed: "",
              timeTaken: "",
              punishmentTime: "",
            }}
            validationSchema={Yup.object({
              district: Yup.string().required("required field"),
              courtName: Yup.string().required("required field"),
              officerName: Yup.string().required("required field"),
              prosecutorName: Yup.string().required("required field"),
              discriminantName: Yup.string().required("required field"),
              policeStation: Yup.string().required("required field"),

              satraSankhya: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              act: Yup.string().required("required field"),

              filedDate: Yup.date()
                .required("required field")
                .typeError("Should be a date"),

              punished: Yup.number()
                .required("required field")
                .typeError("Should be a number"),

              freed: Yup.number()
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
                    विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम के
                    नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों
                    सम्बन्धी मासिक विवरण पत्र
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
                      name="courtName"
                      label="न्यायालय का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="officerName"
                      label="पीठासीन अधिकारी का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="prosecutorName"
                      label="अभियोजक का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="discriminantName"
                      label="विवेचक का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>

                  <fieldset>
                    <legend>विरचित किये गये आरोपों का विवरण</legend>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="policeStation"
                        label="थाना"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="satraSankhya"
                        label="अ0सं0/सत्र विचारण सं०"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="act"
                        label="धारा"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>

                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="filedDate"
                        label="आरोप विरचित किये जाने का दिनांक"
                        component={DatePicker}
                        variant="outlined"
                      />
                    </div>

                    <div className="form-block">
                      <Field
                        fullWidth
                        name="punished"
                        label="सजा"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="freed"
                        label="रिहा"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="timeTaken"
                        label="आरोप विरचन से निर्णय तक की अवधि"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="punishmentTime"
                        label="सजा की अवधि"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                  </fieldset>
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
