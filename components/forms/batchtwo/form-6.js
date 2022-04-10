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
              district: "",
              act: "",
              totalCases: "",
              caseIncreaseInMonth: "",
              caseDisposedOfInMonth: "",
              deathPenalty: "",
              lifeImprisonment: "",
              argumentCount: "",
              prosecutorCount: "",
              freedArgumentCount: "",
              freedProsecutorCount: "",
              rebel: "",
              behaviour: "",
              noProof: "",
              temp: "",
              appealCount: "",
              timeTaken: "",
            }}
            validationSchema={Yup.object({
              act: Yup.string().required("required field"),
              district: Yup.string().required("required field"),
              totalCases: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              caseIncreaseInMonth: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              caseDisposedOfInMonth: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              deathPenalty: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              lifeImprisonment: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              totalPunished: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              punishmentTime: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              argumentCount: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              prosecutorCount: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freedArgumentCount: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              freedProsecutorCount: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              rebel: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              behaviour: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              noProof: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              temp: Yup.number()
                .required("required field")
                .typeError("Should be a number"),
              appealCount: Yup.number()
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
                    महिलाओं के विरुद्ध लैंगिक/बलात्कार/ गम्भीर अपराधों से
                    सम्बन्धित विवरण पत्र
                  </Typography>
                  <FormControl className="form-block" fullWidth>
                    <InputLabel htmlFor="district">जनपद</InputLabel>
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
                  <FormControl className="form-block" fullWidth>
                    <InputLabel htmlFor="act">धारा</InputLabel>
                    <Field
                      component={Select}
                      name="act"
                      id="act"
                      inputProps={{ id: "act" }}
                    >
                      <MenuItem value="बलात्कार धारा 378 भा०द०वि०">
                        बलात्कार धारा 378 भा०द०वि०
                      </MenuItem>
                      <MenuItem value="बलात्कार सहित हत्या">
                        बलात्कार सहित हत्या
                      </MenuItem>
                      <MenuItem value="लज्जा मंग धारा 354 भा०द०वि०">
                        लज्जा मंग धारा 354 भा०द०वि०
                      </MenuItem>
                      <MenuItem value="यौन उत्पीड़न धारा 354 ए.बी.सी.टी. भा०द०वि०">
                        यौन उत्पीड़न धारा 354 ए.बी.सी.टी. भा०द०वि०
                      </MenuItem>
                      <MenuItem value="अश्लीलता धारा 294 भा०द०वि०">
                        अश्लीलता धारा 294 भा०द०वि०
                      </MenuItem>
                    </Field>
                  </FormControl>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="totalCases"
                      label="कुल लम्बित वादों की संख्या "
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="caseIncreaseInMonth"
                      label="माह में बढे़ वादों की संख्या"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <div className="form-block">
                    <Field
                      fullWidth
                      name="caseDisposedOfInMonth"
                      label="माह में कुल निस्तारित वादों की संख्या"
                      component={TextField}
                      variant="outlined"
                    />
                  </div>
                  <fieldset>
                    <legend>दोषसिद्ध वादों की संख्या</legend>
                    <div className="form-block flex">
                      <Field
                        fullWidth
                        name="deathPenalty"
                        label="फांसी"
                        component={TextField}
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        name="lifeImprisonment"
                        label="आजीवन कारावास"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <fieldset>
                      <legend>10 वर्ष से कम की सजा </legend>
                      <div className="form-block flex">
                        <Field
                          fullWidth
                          name="totalPunished"
                          label="कुल सजा"
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
                    </fieldset>
                    <fieldset>
                      <legend>कुल सजा हुए वाद</legend>
                      <div className="form-block flex">
                        <Field
                          fullWidth
                          name="argumentCount"
                          label="वादों की संख्या"
                          component={TextField}
                          variant="outlined"
                        />
                        <Field
                          fullWidth
                          name="prosecutorCount"
                          label="अभियुक्तों की संख्या"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                    </fieldset>
                  </fieldset>
                  <fieldset>
                    <legend>दोषमुक्त वादों की संख्या</legend>
                    <fieldset>
                      <legend>कुल रिहा हुए वाद</legend>
                      <div className="form-block flex">
                        <Field
                          fullWidth
                          name="freedArgumentCount"
                          label="वादों की संख्या"
                          component={TextField}
                          variant="outlined"
                        />
                        <Field
                          fullWidth
                          name="freedProsecutorCount"
                          label="अभियुक्तों की संख्या"
                          component={TextField}
                          variant="outlined"
                        />
                      </div>
                    </fieldset>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="rebel"
                        label="पक्षद्रोही के कारण"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="behaviour"
                        label="गुड़ दोष के आधार पर"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="noProof"
                        label="साक्ष्य के आभाव के कारण"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    {/* temporary */}
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="temp"
                        label="दोषमुक्ति"
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="appealCount"
                        label="अपील की संस्तुति एवं अपील दायर किये गए वादों इन संख्या "
                        component={TextField}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-block">
                      <Field
                        fullWidth
                        name="timeTaken"
                        label="वाद निस्तारण में कुल लगी अवधि "
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
