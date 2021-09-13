import { Button, CircularProgress, Paper, Typography } from "@material-ui/core";
import { TimePicker } from "@material-ui/pickers";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useContext, useState } from "react";
import * as Yup from "yup";
import DateFnsUtils from "@date-io/date-fns";

import { AuthContext } from "../../context/auth";

export default function EmployementForm() {
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
              formName: "employement",
              officerName: "",
              dob: "",
              presentSalary: "",
              presentDistrict: "",
              institute: "",
              dateOfdeployment: "",
              tenthIncrement: "",
              sixteenIncrement: "",
              twentySixthIncrement: "",
              latestDeployementDate: "",
              case: "",
            }}
            validationSchema={Yup.object({
              officerName: Yup.string().required("Required"),
              dob: Yup.date().required("Required"),
              presentSalary: Yup.string().required("Required"),
              presentDistrict: Yup.string().required("Required"),
              institute: Yup.string().required("Required"),
              dateOfdeployment: Yup.date().required("Required"),
              tenthIncrement: Yup.date().required("Required"),
              sixteenIncrement: Yup.date().required("Required"),
              twentySixthIncrement: Yup.date().required("Required"),
              latestDeployementDate: Yup.date().required("Required"),
              case: Yup.string().nullable(),
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form autoComplete="off">
                <Typography variant="h6" className="form-heading">
                  वेतन समिति (2008) की संस्तुतियों पर लिये गये निर्णयानुसार
                  राज्य कर्मचारियों के लिये सुनिश्चित कैरियर प्रोन्नयन
                  (ए0सी0पी0) की व्यवस्था।
                </Typography>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="officerName"
                    label="अधिकारी का नाम"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="dob"
                    label="पदनाम/जन्मतिथि"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="presentSalary"
                    label="वर्तमान वेतनमान / लेबल"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="presentDistrict"
                    label="नियुक्ति जनपद"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="institute"
                    label="अजनपदीय संस्थान"
                    component={TextField}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="dateOfDeployment"
                    label="नियुक्ति की तिथि"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="tenthIncrement"
                    label="10 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित तिथि/प्रस्तावित वेतनमान व लेबल"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="sixteenIncrement"
                    label="16 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित तिथि/प्रस्तावित वेतनमान व लेबल"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="twentySixthIncrement"
                    label="26 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित तिथि/प्रस्तावित वेतनमान व लेबल"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="latestDeployementDate"
                    label="प्रक्षा/दितीय/ उत्तीय पदोन्नति के पद पर नर्यभार ग्रहण |करने की तिथि"
                    component={DatePicker}
                    variant="outlined"
                  />
                </div>
                <div className="form-block">
                  <Field
                    fullWidth
                    name="case"
                    label="विभागीय जाँच /अनुशासनिक कार्यवाही का विवरण यदि कोई हो।"
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
            </MuiPickersUtilsProvider>
          </Formik>
        </Paper>
      </div>
    </section>
  );
}
