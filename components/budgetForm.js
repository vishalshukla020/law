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
import { AuthContext } from "../context/auth";

const madd = [
  "01 वेतन",
  "02 मजदूरी",
  "03 महगाईभत्ता",
  "04 यात्रा व्यय",
  "05 स्थानांतरण यात्रा व्यय",
  "06 अन्य भत्ते",
  "07 मानदेय",
  "08 कार्यालय व्यय",
  "09 विद्युत देयों",
  "10 जलकर / जलप्रभार",
  "11 लेखन सामग्री और फार्मों की छपाई ",
  "12 कार्यालय फर्नीचर एवं उपकरण",
  "13 टेलीफोन पर व्यय",
  "14 मोटर गाड़ियों का क्रय",
  "15 गाड़ियों का अनुरक्षण और पेट्रोल आदि की खरीद",
  "16 व्यावसायिक तथा विशेष सेवाओं के लिये भुगतान",
  "17 किराया, उपशुल्क और कर स्वामिस्व",
  "18 प्रकाशन",
  "19 विज्ञापन, बिक्री और विख्यापन व्यय",
  "20 सहायता अनुदान -सामान्य (गैर वेतन)",
  "21 छात्रवृत्तियों और छात्रवेतन",
  "22  आतिथ्य व्यय / व्यय विषयक भत्ता आदि ",
  "23 गुप्त सेवा व्यय",
  "24 वृहत निर्माण कार्य ",
  "25 लघु निर्माण कार्य",
  "26 मशीनें और सज्जा उपकरण और संयंत्र",
  "27 सब्सिडी",
  "28 समनुदेशन",
  "29 अनुरक्षण",
  "30 निवेश / ऋण ",
  "31 सहायता अनुदान -सामान्य (वेतन)",
  "32  व्याज / लाभाँश",
  "33 पेंशन | आनुतोषिक । अन्य सेवानिवृत्ति हित लाभ",
  "34 अवमूल्यन",
  "35 पूँजीगत परिसम्पतियों के सृजन हेतु अनुदान",
  "36 बट्टा खाता । हानियाँ ",
  "37 उचन्त",
  "38 अन्तरिम सहायता ",
  "39 औषधि तथा रसायन ",
  "40 औषधालय सम्बन्धी आवश्यक सज्जा",
  "41 भोजन व्यय",
  "42 अन्य व्यय",
  "43 सामग्री एवं सम्पूर्ति",
  "44 प्रशिक्षण हेतु यात्रा एवं अन्य प्रासंगिक व्यय",
  "45 अवकाश यात्रा व्यय",
  "46 कम्प्यूटर हार्डवेयर। सॉफ्टवेयर का कार्य",
  "47 कम्प्यूटर अनुरक्षण। तत्सम्बन्धी स्टेशनरी का क्रय",
  "48 अन्तलेखा संक्रमण",
  "49 चिकित्सा व्यय",
  "50 मंहगाई वेतन",
  "51 वर्दी व्यय",
  "52 पुनरीक्षित वेतन का अवशेष (राजकीय)",
  "53 पुनरीक्षित वेतन का अवशेष (राज्य सहायता)",
  "54 पेंशन अवशेषों का भुगतान",
  "55 मकान किराया भता",
  "56 नगर प्रतिकर भत्ता",
  "57 प्रैक्टिस बन्दी भत्ता",
  "58 आउट सोसिंग सेवाओं हेतु भुगतान",
];

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

              <FormControl className="form-block" fullWidth>
                <InputLabel htmlFor="court-name">मद संख्या</InputLabel>
                <Field
                  component={Select}
                  name="itemCount"
                  id="item-count"
                  inputProps={{ id: "item-count" }}
                >
                  {madd.map((item,i)=>(

                  <MenuItem value={item} key={i}>{item}</MenuItem>
                  ))}
                  
                </Field>
              </FormControl>
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
