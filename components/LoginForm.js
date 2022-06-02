import { Formik, Form, Field } from "formik";
import { Typography, Paper, Button, CircularProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Image from "next/image";

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
            }, 20000);
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
            <Typography
              className="forgot-password"
              onClick={() => router.push("/forgot-password")}
            >
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
