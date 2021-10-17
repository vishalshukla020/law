import { Formik, Form, Field } from "formik";
import { Typography, Paper, Button, CircularProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Image from "next/image";

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

import { AuthContext } from "../context/auth";

export default function LoginForm() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  // const createUsers = () => {
  //   district.map((user) => {
  //     axios
  //       .post("/api/users/register", {
  //         username: user,
  //         password: user,
  //         phone: 8318218163,
  //       })
  //       .then((res) => {
  //         if (res.status == 201) {
  //           console.log(`created ${user}`);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // };

  return (
    <section className="container max-height flex">
      <Paper className="paper login-form ">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Password can't be empty"),
          })}
          onSubmit={(values, actions) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
            }, 5000);
            axios
              .post("/api/users/login", { ...values })
              .then((res) => {
                if (res.status === 200) {
                  if (res.data.role == "admin") {
                    //saving the user in context
                    context.login(res.data.token);
                    //redirect to admin page
                    router.push("/admin-panel");
                  } else {
                    //redirect to main page
                    router.push("/");
                  }
                }
              })
              .catch((err) => {
                if (err.response.status === 403) {
                  alert("incorrect credentials");
                } else if (err.response.status === 404) {
                  alert("user not found");
                }
              });
            actions.resetForm();
          }}
        >
          <Form autoComplete="off">
            <center>
              <Image
                src="/logo.png"
                alt="logo"
                height={150}
                width={150}
                layout="intrinsic"
              />
              <Typography variant="h4" className="form-heading">
                उत्तर प्रदेश अभियोजन <br />
                LOG IN
              </Typography>
            </center>
            <div className="form-block">
              <Field
                fullWidth
                name="username"
                label="Username"
                component={TextField}
                variant="outlined"
              />
            </div>
            <div className="form-block">
              <Field
                fullWidth
                name="password"
                label="Password"
                component={TextField}
                variant="outlined"
              />
            </div>
            <Typography className="forgot-password">
              Forgot Password?
            </Typography>
            {submitting ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button"
                fullWidth
              >
                Login
              </Button>
            )}
            {/* <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={createUsers}
            >
              Create users
            </Button> */}
          </Form>
        </Formik>
      </Paper>
    </section>
  );
}
