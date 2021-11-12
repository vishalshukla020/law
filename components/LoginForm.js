import { Formik, Form, Field } from "formik";
import { Typography, Paper, Button, CircularProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Image from "next/image";

const users = [
  { username: "agra", password: "agra", mobile: 9454456723 },
  { username: "mainpuri", password: "mainpuri", mobile: 9454456632 },
  { username: "mathura", password: "mathura", mobile: 9454456407 },
  { username: "firozabad", password: "firozabad", mobile: 9454456695 },
  { username: "aligarh", password: "aligarh", mobile: 9454456605 },
  { username: "etah", password: "etah", mobile: 9454456251 },
  { username: "hathras", password: "hathras", mobile: 9454456413 },
  { username: "kasganj", password: "kasganj", mobile: 9454456748 },
  { username: "azamgarh", password: "azamgarh", mobile: 9454456302 },
  { username: "ballia", password: "ballia", mobile: 9454456775 },
  { username: "mau", password: "mau", mobile: 9454466365 },
  { username: "praygaraj", password: "praygaraj", mobile: 9454456590 },
  { username: "pratapgarh", password: "pratapgarh", mobile: 9454456290 },
  { username: "fatehpur", password: "fatehpur", mobile: 9454456563 },
  { username: "kaushambi", password: "kaushambi", mobile: 9454456564 },
  { username: "bareiily", password: "bareiily", mobile: 9454456894 },
  { username: "shahjahanpur", password: "shahjahanpur", mobile: 9454456307 },
  { username: "budaun", password: "budaun", mobile: 9454456547 },
  { username: "pilibhit", password: "pilibhit", mobile: 9454456610 },
  { username: "basti", password: "basti", mobile: 9454456256 },
  {
    username: "siddharthnagar",
    password: "siddharthnagar",
    mobile: 9454456344,
  },
  {
    username: "santkabirnagar",
    password: "santkabirnagar",
    mobile: 9454456534,
  },
  { username: "chitrakoot", password: "chitrakoot", mobile: 9454456842 },
  { username: "banda", password: "banda", mobile: 9454456596 },
  { username: "hamirpur", password: "hamirpur", mobile: 9454456798 },
  { username: "mahoba", password: "mahoba", mobile: 9454456635 },
  { username: "gonda", password: "gonda", mobile: 9454456260 },
  { username: "bahraich", password: "bahraich", mobile: 9454456276 },
  { username: "shravasti", password: "shravasti", mobile: 9454456779 },
  { username: "balrampur", password: "balrampur", mobile: 9454456902 },
  { username: "ayodhya", password: "ayodhya", mobile: 9454456201 },
  { username: "sultanpur.", password: "sultanpur.", mobile: 9454456753 },
  { username: "barabanki", password: "barabanki", mobile: 9454456926 },
  { username: "ambedkarnagar", password: "ambedkarnagar", mobile: 9454456824 },
  { username: "amethi.", password: "amethi.", mobile: 9454456299 },
  { username: "gorakhpur", password: "gorakhpur", mobile: 9454456245 },
  { username: "deoria", password: "deoria", mobile: 9454456919 },
  { username: "maharajganj", password: "maharajganj", mobile: 9454456872 },
  { username: "kushinagar", password: "kushinagar", mobile: 9454456242 },
  { username: "jhansi", password: "jhansi", mobile: 9411417438 },
  { username: "jalaun", password: "jalaun", mobile: 9454456932 },
  { username: "lalitpur", password: "lalitpur", mobile: 9454456721 },
  { username: "kanpurnagar", password: "kanpurnagar", mobile: 9454456209 },
  { username: "kanpurdehat", password: "kanpurdehat", mobile: 9454456367 },
  { username: "etawah", password: "etawah", mobile: 9554151232 },
  { username: "auraiya", password: "auraiya", mobile: 9454456544 },
  { username: "farrukhabad", password: "farrukhabad", mobile: "9454456214" },
  { username: "kannauj", password: "kannauj", mobile: 9454456616 },
  { username: "lucknow", password: "lucknow", mobile: 9454456770 },
  {
    username: "lakhimpurkheri",
    password: "lakhimpurkheri",
    mobile: 9454456689,
  },
  { username: "unnao", password: "unnao", mobile: "9454456595" },
  { username: "raebareli", password: "raebareli", mobile: 9454456881 },
  { username: "hardoi", password: "hardoi", mobile: 9454456331 },
  { username: "sitapur", password: "sitapur", mobile: 9454456404 },
  { username: "mirzapur", password: "mirzapur", mobile: 9454456908 },
  { username: "bhadohi", password: "bhadohi", mobile: 9454456539 },
  { username: "sonbhadra", password: "sonbhadra", mobile: 9454456949 },
  { username: "moradabad", password: "moradabad", mobile: 9454456213 },
  { username: "rampur", password: "rampur", mobile: 9454456741 },
  { username: "bijnor", password: "bijnor", mobile: 9454456873 },
  { username: "amroha", password: "amroha", mobile: 9454456903 },
  { username: "sambhal", password: "sambhal", mobile: 9454456669 },
  { username: "meerut", password: "meerut", mobile: 9454456275 },
  { username: "baghpat", password: "baghpat", mobile: 9454456479 },
  { username: "bulandshahr", password: "bulandshahr", mobile: 9454456429 },
  { username: "gaziabad", password: "gaziabad", mobile: 9454456277 },
  {
    username: "gautambudhnagar",
    password: "gautambudhnagar",
    mobile: 9454456330,
  },
  { username: "hapur", password: "hapur", mobile: 9454456541 },
  { username: "saharanpur", password: "saharanpur", mobile: 9454456625 },
  {
    username: "muzaffarnagr",
    password: "muzaffarnagr",
    mobile: 9454456621,
  },
  { username: "shamli", password: "shamli", mobile: 9454456833 },
  { username: "varanasi", password: "varanasi", mobile: 9454456360 },
  { username: "jaunpur", password: "jaunpur", mobile: 9454456246 },
  { username: "ghazipur", password: "ghazipur", mobile: 9454456751 },
  { username: "chandauli", password: "chandauli", mobile: 9454456266 },
];

import { AuthContext } from "../context/auth";

export default function LoginForm() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  // const createUsers = () => {
  //   users.map((user) => {
  //     axios
  //       .post("/api/users/register", {
  //         username: user.username,
  //         password: user.password,
  //         phone: user.mobile,
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
