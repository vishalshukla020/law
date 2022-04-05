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
              officerName: "",
              prosecutor: "",
              policeStation: "",
              satraSankhya: "",
              act: "",
              dated: "",
              totalCases: "",
              punished: "",
              freed: "",
              timeTaken: "",
              punishedPercentage: "",
            }}
            validationSchema={Yup.object({
              courtName: Yup.string().required("required field"),

              officerName: Yup.string().required("required field"),
              prosecutor: Yup.string().required("required field"),
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
              freed: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              timeTaken: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishedPercentage: Yup.number()
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
                    पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने वाले
                    तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
                  </Typography>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="courtName"
                      label="न्यायालय का नाम"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="officerName"
                      label="पीठासीन अधिकारी का नाम"
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
                    <legend>माह में विरचित किये गये आरोपों का विवरण</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="satraSankhya"
                        label="अ0सं0 / सत्र विचारण सं0"
                        component={TextField}
                        variant="outlined"
                      />
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
                  </fieldset>
                  <div className="form-block">
                    <fieldset>
                      <legend>माह में निर्णीत वादों का विवरण</legend>
                      <div className="form-block">
                        <Field
                          fullWidth
                          name="totalCases"
                          label="कुल निर्णीत वाद"
                          component={TextField}
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
                          label="आरोप विरचन से निर्णय तक अवधि"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                      <div className="form-block">
                        <Field
                          fullWidth
                          name="punishedPercentage"
                          label="सजा का प्रतिशत"
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
