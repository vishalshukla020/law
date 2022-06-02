import { Button } from "@material-ui/core";
import moment from "moment";
import { useState } from "react";

import { Formik, Form, Field } from "formik";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DateRange({ setFrom, setTo }) {
  return (
    <Formik
      initialValues={{ fromDate: "", toDate: "" }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
        const x = new Date(values.fromDate);
        const y = new Date(values.toDate);
        setFrom(() => x);
        setTo(() => y);
      }}
    >
      {({ handleSubmit, handleChange, isSubmitting }) => (
        <Form>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="form-block flex-gap">
              <Field
                fullWidth
                name="fromDate"
                label="From"
                component={DatePicker}
                variant="filled"
              />
              <Field
                fullWidth
                name="toDate"
                label="To"
                component={DatePicker}
                variant="filled"
              />
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Filter
                </Button>
              </div>
            </div>
          </MuiPickersUtilsProvider>
        </Form>
      )}
    </Formik>
  );
}
