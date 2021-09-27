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
              formName: "pension",
              district: "",
              retiredName: "",
              dueCertificate: "",
              gpf: "",
              processed: "",
              mobile: "",
            }}
            validationSchema={Yup.object({
             
              retiredName: Yup.string().required("Required"),
              dueCertificate: Yup.string().required("Required"),
              gpf: Yup.string().required("Required"),
              processed: Yup.string().required("Required"),
              mobile: Yup.string().required("Required"),
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
                पेंशन पटल से मॉगी जाने वाली सूचना का प्रारूप-
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
                  name="retiredName"
                  label="सेवानिवृत्त होने वाले अधिकारी/कर्मचारी का नाम, जिन्हे पेंशन प्राप्त नही हो रही है।"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="dueCertificate"
                  label="सेवानिवृत्त होने वाले अधिकारी/कर्मचारी का नाम, जिन्हे अदेयता प्रमाण पत्र निर्गत नही किया। अगर नही किया गया, तो कारण सहित उल्लेख "
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="gpf"
                  label="सेवानिवृत्त होने वाले अधिकारी/कर्मचारी, जिन्हे जी०पी०एफ0/अनन्तिम पेंशन हेतु अनापत्ति प्रमाण पत्र निर्गत नही किया गया।"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="processed"
                  label="सेवानिवृत्त होने वाले अधिकारी/कर्मचारी, जिनके कितन सेवानिवृत्ति देयक लंबित है और भुगतान के लिये क्या कार्यवाही की गयी।"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="mobile"
                  label="मो0नंबर"
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
