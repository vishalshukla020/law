import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { useContext, useState } from "react";
import * as Yup from "yup";
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

const punishmentArray = [
  "मृत्युदण्ड",
  "आजीवन कारावास",
  "दस वर्ष से अधिक की सजा",
  "दस वर्ष से कम की सजा ",
  "जमानत निरस्त",
];

export default function PensionForm() {
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
              formName: "power-2",
              district: "",
              prosecutorName: "",
              postName: "",
              count: "",
              act: "",
              policeStation: "",
              versus: "",
              punishment: "",
            }}
            validationSchema={Yup.object({
              prosecutorName: Yup.string().required("Required"),
              postName: Yup.string().required("Required"),
              count: Yup.string().required("Required"),
              act: Yup.string().required("Required"),
              policeStation: Yup.string().required("Required"),
              versus: Yup.string().required("Required"),
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
            <Form autoComplete="off">
              <Typography variant="h6" className="form-heading">
                मिशन शक्ति - शासकीय अधिवक्ता सेवा संवर्ग
              </Typography>
              <FormControl className="form-block" fullWidth>
                <InputLabel htmlFor="court-name">जनपद</InputLabel>
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
                  name="prosecutorName"
                  label="अभियोजक का नाम"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="postName"
                  label="पद नाम"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="count"
                  label="अ0सं0"
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
              <div className="form-block">
                <Field
                  fullWidth
                  name="policeStation"
                  label="थाना"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <FormControl className="form-block" fullWidth>
                <InputLabel htmlFor="court-name">सज़ा</InputLabel>
                <Field
                  component={Select}
                  name="punishment"
                  id="punishment"
                  inputProps={{ id: "punishment" }}
                >
                  {punishmentArray.map((item, i) => (
                    <MenuItem value={item} key={i + 50}>
                      {item}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
              <div className="form-block">
                <Field
                  fullWidth
                  name="versus"
                  label="बनाम"
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
          </Formik>
        </Paper>
      </div>
    </section>
  );
}
