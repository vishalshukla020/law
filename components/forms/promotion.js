import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Paper, Typography } from "@material-ui/core";
import { TimePicker } from "@material-ui/pickers";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useContext, useState } from "react";
import * as Yup from "yup";
import DateFnsUtils from "@date-io/date-fns";

import { AuthContext } from "../../context/auth";

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

export default function PromotionForm() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              username: context.user?.name,
              userId: context.user?.id,
              formName: "promotion",
              officerName: "",
              district: "",
              dob: "",
              presentPostDate: "",
              dipiction: "",
              presentPost: "",
              dateOfdeployment: "",
              remark: "",
            }}
            validationSchema={Yup.object({
              officerName: Yup.string().required("Required"),
              district: Yup.string().required("Required"),
              dob: Yup.date().required("Required"),
              presentPostDate: Yup.date().required("Required"),
              dipiction: Yup.string().required("Required"),
              presentPost: Yup.string().required("Required"),
              dateOfDeployment: Yup.date().required("Required"),
              remark: Yup.string().required("Required"),
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

              actions.resetForm();
            }}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form autoComplete="off">
                <Typography variant="h6" className="form-heading">
                  अभियोजन विभाग में समह–ग के पद पर प्रोन्नति के संबंध में विवरण
                </Typography>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="officerName"
                    label="कर्मचारी का नाम / पदनाम"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <FormControl className="form-block" fullWidth>
                  <InputLabel htmlFor="court-name">गृह / जनपद</InputLabel>
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
                    name="dob"
                    label="जन्मतिथि "
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="presentPostDate"
                    label="वर्तमान पद पर नियुक्ति तिथी"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="dipiction"
                    label="स्थायीकरण का विवरण "
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="presentPost"
                    label="वर्तमान तैनाती / स्थान "
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="dateOfDeployment"
                    label="तिथि"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="remark"
                    label="अभ्युक्ती "
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
          </Formik>
        </Paper>
      </div>
    </section>
  );
}
