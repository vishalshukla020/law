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

export default function FormThree() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              formName: "Form-2B",
              username: context.user?.name,
              userId: context.user?.id,
              district: "",
              total: "",
              punised: "",
              freed: "",
            }}
            validationSchema={Yup.object({
              district: Yup.string().required("required field"),

              total: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punished: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freed: Yup.number()
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
                    प्रारूप (ब) - पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ
                    किये जाने वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र
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

                  <fieldset>
                    <legend>निर्णीत वादों का विवरण</legend>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="total"
                        label="कुल"
                        component={TextField}
                        variant="outlined"
                      />
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
