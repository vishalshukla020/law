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

export default function Prosecution() {
  const context = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section>
      <div className="container flex">
        <Paper className="paper form-main">
          <Formik
            enableReinitialize
            initialValues={{
              formName: "batch-form-1",
              username: context.user?.name,
              userId: context.user?.id,
              district: "",
              suitsInMonthLambit: "",
              suitsInMonthDayar: "",
              suitsInMonthFinaled: "",
              suitsInMonthTotal: "",
              punishTotal: "",
              punishTotalSuspect: "",
              jurmTotal: "",
              jurmTotalSuspect: "",
              freedTotal: "",
              freedTotalSuspect: "",
              sorted: "",
              satraTotal: "",
              satraTotalSuspect: "",
              discharged: "",
              filed: "",
              left: "",
            }}
            validationSchema={Yup.object({
              district: Yup.string().required("required field"),

              suitsInMonthLambit: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              suitsInMonthDayar: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              suitsInMonthTotal: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              suitsInMonthFinaled: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishTotal: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishTotalSuspect: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              jurmTotal: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              jurmTotalSuspect: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freedTotal: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freedTotalSuspect: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              sorted: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              satraTotal: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              satraTotalSuspect: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              discharged: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              filed: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              left: Yup.number()
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
              <Form autoComplete="off">
                <Typography variant="h6" className="form-heading">
                  सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत डी०जी०सी
                  संवर्ग द्वारा अभियोजित वादो का विवरण
                </Typography>

                <FormControl className="form-block" fullWidth>
                  <InputLabel htmlFor="court-name">जनपद का नाम</InputLabel>
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
                    name="suitsInMonthLambit"
                    label="माह में लंबित वाद"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="suitsInMonthDayar"
                    label="माह में दायर वाद"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block flex">
                  <Field
                    fullWidth
                    name="suitsInMonthTotal"
                    label="कुल योग"
                    component={TextField}
                    variant="outlined"
                  />

                  <Field
                    fullWidth
                    name="suitsInMonthFinaled"
                    label="निर्णीत"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <fieldset>
                  <legend>सजा वाद </legend>
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="punishTotal"
                      label="गुण दोष के आधार / कुल वाद"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="punishTotalSuspect"
                      label="गुण दोष के आधार / कुल अभियुक्त"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>

                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="jurmTotal"
                      label="जुर्म इकबाल के / कुल वाद"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="jurmTotalSuspect"
                      label="जुर्म इकबाल के / कुल अभियुक्त"
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
                      name="freedTotal"
                      label="कुल वाद"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="freedTotalSuspect"
                      label="कुल अभियुक्त"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                </fieldset>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="sorted"
                    label="सुलह"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <fieldset>
                  <legend>सत्र सुपुर्द</legend>
                  <div className="form-block flex">
                    <Field
                      fullWidth
                      name="satraTotal"
                      label="कुल वाद"
                      component={TextField}
                      variant="outlined"
                    />
                    <Field
                      fullWidth
                      name="satraTotalSuspect"
                      label="कुल अभियुक्त"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                </fieldset>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="discharged"
                    label="उन्मोचित"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block flex">
                  <Field
                    fullWidth
                    name="filed"
                    label="दाखिल दफ्तर"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    fullWidth
                    name="left"
                    label="अवशेष"
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
            )}
          </Formik>
        </Paper>
      </div>
    </section>
  );
}
