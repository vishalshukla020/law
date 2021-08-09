import { Formik, Form, Field } from "formik";
import { Typography, Paper, Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import axios from "axios";

export default function Register({ setOpen }) {
  return (
    <div className="form">
      <Paper className="paper register">
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
            phone: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string()
              .required("Password can't be empty")
              .min(6, "Password must be at least 6 characters long"),
            confirmPassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Passwords do not match"
            ),
            phone: Yup.number()
              .required("A phone number is required")
              .typeError("That doesn't look like a phone number")
              .integer("A phone number can't include a decimal point")
              .min(1000000000, "Invalid phone number"),
          })}
          onSubmit={(values, actions) => {
            axios
              .post("/api/users/register", { ...values })
              .then((res) => {
                if (res.status == 201) {
                  setOpen(false);
                  actions.resetForm();
                  alert(res.data);
                }
              })
              .catch((err) => console.log(err));
          }}
        >
          <Form autoComplete="off">
            <Typography variant="h3" className="form-heading">
              new user
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
                name="phone"
                label="Phone no."
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
            <div className="form-block">
              <Field
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                component={TextField}
                variant="outlined"
              />
            </div>

            <Button
              className="button"
              variant="contained"
              color="primary"
              type="submit"
            >
              create
            </Button>
            <Button
              className="button"
              variant="contained"
              color="secondary"
              style={{ marginLeft: "1rem" }}
              onClick={() => setOpen(false)}
            >
              cancel
            </Button>
          </Form>
        </Formik>
      </Paper>
    </div>
  );
}
