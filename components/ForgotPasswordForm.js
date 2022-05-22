import { Formik, Form, Field } from "formik";
import { Typography, Paper, Button, CircularProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Image from "next/image";

import { AuthContext } from "../context/auth";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
          initialValues={{ phone: "" }}
          validationSchema={Yup.object({
            phone: Yup.string().matches(
              phoneRegExp,
              "Phone number is not valid"
            ),
          })}
          onSubmit={(values, actions) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
            }, 5000);
            axios
              .post("/api/users/forgot-password", { ...values })
              .then((res) => {
                if (res.status === 200) {
                  alert(
                    "Your are credentials are successfully sent to your email id. Your are now being redirect to login page. "
                  );
                  router.push("/login");
                }
              })
              .catch((err) => {
                if (err.response.status === 403) {
                  alert("incorrect credentials");
                } else if (err.response.status === 404) {
                  alert(
                    "User not found. Please enter the correct registered phone number"
                  );
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
                Forgot Password Recovery
              </Typography>
            </center>
            <div className="form-block">
              <Field
                fullWidth
                name="phone"
                label="Enter Registered Phone Number"
                component={TextField}
                variant="outlined"
              />
            </div>

            <Typography
              className="forgot-password"
              onClick={() => router.push("/login")}
            >
              Remember Password?
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
