import { Formik, Form, Field } from "formik";
import { Typography, Paper, Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext } from "react";

import { AuthContext } from "../context/auth";

export default function LoginForm() {
  const context = useContext(AuthContext);
  const router = useRouter();

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
            <Typography variant="h3" className="form-heading">
              Log in
            </Typography>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button"
              fullWidth
            >
              Login
            </Button>
          </Form>
        </Formik>
      </Paper>
    </section>
  );
}
