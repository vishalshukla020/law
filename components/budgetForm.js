import { Button, CircularProgress, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { AuthContext } from "../context/auth";

export default function BudgetForm() {
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
              formName: "extraBudget",
              officeName: "",
              itemCount: "",
              preAllocatedBudget: "",
              expenditureSoFar: "",
              left: "",
              excessDemand: "",
              remark: "",
            }}
            validationSchema={Yup.object({
              officeName: Yup.string().required("Required"),
              itemCount: Yup.number()
                .required("Required")
                .typeError("Must be a number"),
              preAllocatedBudget: Yup.number()
                .required("Required")
                .typeError("Must be a number"),
              expenditureSoFar: Yup.number()
                .required("Required")
                .typeError("Must be a number"),
              left: Yup.number()
                .required("Required")
                .typeError("Must be a number"),
              excessDemand: Yup.number()
                .required("Required")
                .typeError("Must be a number"),
              remark: Yup.string()
                .required("Required")
                .typeError("Must be a string"),
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
                अतिरिक्त बजट मांगपत्र के सम्बन्ध में निर्धारित प्रारूप
              </Typography>
              <div className="form-block">
                <Field
                  fullWidth
                  name="officeName"
                  label="परिक्षेत्रीय/जनपदीय कार्यालय का नाम"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="itemCount"
                  label="मद संख्या"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="preAllocatedBudget"
                  label="पूर्व आवंटित बजट"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="expenditureSoFar"
                  label="अब तक व्यय का योग"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="left"
                  label="अवशेष"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="excessDemand"
                  label="अतिरिक्त मांग की धनराशि"
                  component={TextField}
                  variant="outlined"
                />
              </div>
              <div className="form-block">
                <Field
                  fullWidth
                  name="remark"
                  label="अभ्युक्ति (लंबित बिल/अति० व्यय का विवरण)"
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
