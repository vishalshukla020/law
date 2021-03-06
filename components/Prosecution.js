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

import { AuthContext } from "../context/auth";

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
              formName: "prosecution",
              username: context.user?.name,
              userId: context.user?.id,
              courtName: "",
              suite: "",
              newSuits: "",
              suitsInJan: "",
              punishment: "",
              reconciliation: "",
              session: "",
              discharged: "",
              filed: "",
              decided: "",
              freed: "",
              left: "",
              district: "",
            }}
            validationSchema={Yup.object({
              courtName: Yup.string().required("required field"),
              suite: Yup.string().required("required field"),
              suitsInJan: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              newSuits: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishment: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              reconciliation: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              session: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              discharged: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              filed: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              decided: Yup.number()
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
                  ?????????????????? ????????? ????????? ????????????????????? ??????????????? / Prosecution done in the state
                </Typography>
                <FormControl className="form-block" fullWidth>
                  <InputLabel htmlFor="court-name">Select Court</InputLabel>
                  <Field
                    component={Select}
                    name="courtName"
                    id="court-name"
                    inputProps={{ id: "court-name" }}
                  >
                    <MenuItem value="subordinate-court">
                      ????????????????????? ???????????????????????? / Subordinate Court
                    </MenuItem>
                    <MenuItem value="session-court">
                      ???????????? ???????????????????????? (????????????????????? ?????????????????? ) / Session Court
                      (prosecution cadre)
                    </MenuItem>
                    <MenuItem value="DGC-session-court">
                      ???????????? ???????????????????????? ( ??????.??????.????????? /???.??????.??????.????????? ?????????????????? ) /
                      Subordinate Court(DGC / ADGC cadre)
                    </MenuItem>
                  </Field>
                </FormControl>
                <FormControl
                  className="form-block"
                  fullWidth
                  style={{ paddingBottom: "1em" }}
                >
                  <InputLabel htmlFor="suite-name">
                    Type of suit / ????????? ?????? ??????????????????
                  </InputLabel>
                  <Field
                    component={Select}
                    name="suite"
                    id="suite-name"
                    inputProps={{ id: "suite-name" }}
                  >
                    <MenuItem value="riot">
                      ????????? ?????? ????????? / Product Amendment Act
                    </MenuItem>
                    <MenuItem value="other">???????????? ???????????? / other</MenuItem>
                    <MenuItem value="scst">?????????????????? ?????????????????? / SC/ST Act</MenuItem>
                    <MenuItem value="mafia">
                      ???????????????????????? ???????????? ????????? ?????????????????? / gangster or mafia
                    </MenuItem>
                    <MenuItem value="posco">
                      ?????????????????? ???????????????????????? ?????? ?????????????????? ?????? ????????????????????? / POCSO
                    </MenuItem>
                  </Field>
                </FormControl>
                <FormControl className="form-block" fullWidth>
                  <InputLabel htmlFor="court-name">????????????</InputLabel>
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
                    name="suitsInJan"
                    label="????????? ?????? ???????????????????????? ????????? ??????????????? ????????? / 
Cases pending at the beginning of month"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="newSuits"
                    label="?????????????????? ???????????? ????????? ???????????? ????????? / suits filed in the year"
                    component={TextField}
                    variant="outlined"
                  />
                </div>

                <div className="form-block flex">
                  <Field
                    name="punishment"
                    label="????????? / Convicted"
                    component={TextField}
                    variant="outlined"
                  />

                  <Field
                    name="reconciliation"
                    label="????????????  / compounding"
                    component={TextField}
                    variant="outlined"
                  />

                  <Field
                    name="session"
                    label="???????????? ????????????????????? / session commited"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    name="left"
                    label="?????????  / left"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block flex">
                  <Field
                    name="discharged"
                    label="???????????????????????? / discharged"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    name="filed"
                    label="??????????????? ??????????????? / filed"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    name="freed"
                    label="????????????  / freed"
                    component={TextField}
                    variant="outlined"
                  />
                  <Field
                    name="decided"
                    label="????????????????????? / decided"
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
