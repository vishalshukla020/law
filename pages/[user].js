import NavBar from "../components/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { parseCookies } from "../helper/parseCookies";
import baseUrl from "../helper/baseURL";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";
import moment from "moment";

export default function User({ token, data }) {
  const context = useContext(AuthContext);

  useEffect(() => {
    if (!context.user && token) {
      context.login(token);
    } else if (!context.user && !token) {
      router.push("/login");
    }
  });

  data = data.reverse();
  return (
    <>
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="container">
        {data
          .filter((post) => post.formName == "prosecution")
          .map((item) => (
            <CardComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "extraBudget")
          .map((item) => (
            <CardComponentTwo item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "pension")
          .map((item) => (
            <PensionComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "employement")
          .map((item) => (
            <EmployementComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "promotion")
          .map((item) => (
            <PromotionComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "power-1")
          .map((item) => (
            <PowerComponent
              item={item}
              name="मिशन शक्ति - राज्य अभियोजन सेवा संवर्ग"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "power-2")
          .map((item) => (
            <PowerComponent
              item={item}
              name="मिशन शक्ति  - शासकीय अधिवक्ता सेवा संवर्ग"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batch-form-1")
          .map((item) => (
            <BatchComponent
              item={item}
              name="सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत डी०जी०सी संवर्ग द्वारा अभियोजित वादो का विवरण"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batch-form-2")
          .map((item) => (
            <BatchComponent
              item={item}
              name="सत्र न्यायालयो में एससीएसटी एक्ट के अन्तर्गत डी0जी0सी संवर्ग द्वारा अभियोजित वादो का विवरण"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batch-form-3")
          .map((item) => (
            <BatchComponent
              item={item}
              name="सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत अभियोजन संवर्ग द्वारा अभियोजित वादो का विवरण"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batch-form-4")
          .map((item) => (
            <BatchComponent
              item={item}
              name="सत्र न्यायालयो में भा0द0वि0 के अन्तर्गत डी०जी०सी संवर्ग द्वारा अभियोजित वादो का विवरण"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batch-form-5")
          .map((item) => (
            <BatchComponent
              item={item}
              name="सत्र न्यायालयो में अन्य अधिनियम के अन्तर्गत डी0जी0सी संवर्ग द्वारा अभियोजित वादो का विवरण"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batchTwoForm-1")
          .map((item) => (
            <BatchTwoComponent
              item={item}
              name="पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने वाले
                  तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batchTwoForm-2")
          .map((item) => (
            <BatchTwoComponent
              item={item}
              name="विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम व
                    आबकारी अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा
                    निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batchTwoForm-3")
          .map((item) => (
            <BatchTwoComponent
              item={item}
              name="माफियाओं, गैंगस्टर, गुण्डों एवं जनपदों व थानों के टॉप-10 व
                    STF/ATS के अपराधियों के विरूद्ध माह में विचारण प्रारम्भ किये
                    जाने वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batchTwoForm-4")
          .map((item) => (
            <BatchTwoComponent
              item={item}
              name="विशष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से
                    सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के
                    विधारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण
                    पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "batchTwoForm-5")
          .map((item) => (
            <CriminalComponent
              item={item}
              name="प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के विरूद्ध
                    माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
                    पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-1A")
          .map((item) => (
            <New1A
              item={item}
              name="प्रारूप (अ) - प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के विरूद्ध
                    माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
                    पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-1B")
          .map((item) => (
            <New1B
              item={item}
              name="प्रारूप (ब) - प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के विरूद्ध
                    माह में कृत कार्यवाही तथा निर्णीत वादों सम्बन्धी मासिक विवरण
                    पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-2A")
          .map((item) => (
            <New2A
              item={item}
              name="प्रारूप (अ) - पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-2B")
          .map((item) => (
            <New2B
              item={item}
              name="प्रारूप (ब) - पॉक्सो न्यायालयों में माह में विचारण प्रारम्भ किये जाने वाले तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-4A")
          .map((item) => (
            <New2A
              item={item}
              name="प्रारूप (अ) - विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-4B")
          .map((item) => (
            <New2B
              item={item}
              name="प्रारूप (ब) - विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-5A")
          .map((item) => (
            <New2A
              item={item}
              name="प्रारूप (अ) - विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "Form-5B")
          .map((item) => (
            <New2B
              item={item}
              name="प्रारूप (ब) - विशेष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत आयुध अधिनियम के नवीन वादों के विचारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
              key={item._id}
            />
          ))}
      </div>
    </>
  );
}

//components for new added formsName
const New1A = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">न्यायालय का नाम :</div>
            <span>{item.courtName}</span>
          </li>
          <li>
            <div className="heading">चिन्हित माफिया अपराधी का नाम :</div>
            <span>{item.criminalName}</span>
          </li>
          <li>
            <div className="heading">अभियोजक का नाम :</div>
            <span>{item.prosecutorName}</span>
          </li>
          <li>
            <div className="heading">थाना :</div>
            <span>{item.policeStation}</span>
          </li>
          <fieldset>
            <legend>गिरोहबन्द अधिनियम</legend>
            <li>
              <div className="heading">अ0सं0 / सत्र विचारण सं0 :</div>
              <span>{item.satraSankhya}</span>
            </li>
            <li>
              <div className="heading">धारा :</div>
              <span>{item.act}</span>
            </li>
            <li>
              <div className="heading">आरोप विरचित किये जाने का दिनांक :</div>
              <span>{moment(item.filedDate).format("ll")}</span>
            </li>
            <li>
              <div className="heading">लाइसेन्स निरस्तीकरण :</div>
              <span>{moment(item.liscenseTermination).format("ll")}</span>
            </li>
            <li>
              <div className="heading">
                धारा 14 (1) के अन्तर्गत कुर्क तथा जब्तीकरण,ध्वस्ती करण एवं
                अवमुक्त सम्पति का मूल्य :
              </div>
              <span>{item.netWorth}</span>
            </li>
          </fieldset>

          <fieldset>
            <legend>माह में निर्णीत वादों का विवरण</legend>
            <fieldset>
              <legend>कुल निर्णीत वाद</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.totalGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.totalBhav}</span>
              </li>
            </fieldset>
            <fieldset>
              <legend>सजा</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.punishGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.punishBhav}</span>
              </li>
            </fieldset>
            <fieldset>
              <legend>रिहा</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.freedGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.freedBhav}</span>
              </li>
            </fieldset>
          </fieldset>
          <li>
            <div className="heading">आरोप विरचन से निर्णय अवधि :</div>
            <span>{item.timeTaken}</span>
          </li>
          <li>
            <div className="heading">सजा की अवधि :</div>
            <span>{item.punishmentTime}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const New2A = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">न्यायालय का नाम :</div>
            <span>{item.courtName}</span>
          </li>
          <li>
            <div className="heading">अभियोजक का नाम :</div>
            <span>{item.prosecutorName}</span>
          </li>
          <li>
            <div className="heading">विवेचक का नाम :</div>
            <span>{item.discriminantName}</span>
          </li>
          <li>
            <div className="heading">पीठासीन अधिकारी का नाम :</div>
            <span>{item.officerName}</span>
          </li>
          <li>
            <div className="heading">थाना :</div>
            <span>{item.policeStation}</span>
          </li>
          <fieldset>
            <legend>विरचित किये गये आरोपों का विवरण</legend>
            <li>
              <div className="heading">अ0सं0 / सत्र विचारण सं0 :</div>
              <span>{item.satraSankhya}</span>
            </li>
            <li>
              <div className="heading">धारा :</div>
              <span>{item.act}</span>
            </li>
            <li>
              <div className="heading">आरोप विरचित किये जाने का दिनांक :</div>
              <span>{moment(item.filedDate).format("ll")}</span>
            </li>

            <li>
              <div className="heading">सजा :</div>
              <span>{item.punished}</span>
            </li>
            <li>
              <div className="heading">रिहा :</div>
              <span>{item.freed}</span>
            </li>
            <li>
              <div className="heading">आरोप विरचन से निर्णय अवधि :</div>
              <span>{item.timeTaken}</span>
            </li>
            <li>
              <div className="heading">सजा की अवधि :</div>
              <span>{item.punishmentTime}</span>
            </li>
          </fieldset>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const New1B = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">जनपद :</div>
            <span>{item.district}</span>
          </li>

          <fieldset>
            <legend>माह में निर्णीत वादों का विवरण</legend>
            <fieldset>
              <legend>कुल निर्णीत वाद</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.totalGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.totalBhav}</span>
              </li>
            </fieldset>
            <fieldset>
              <legend>सजा</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.punishGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.punishBhav}</span>
              </li>
            </fieldset>
            <fieldset>
              <legend>रिहा</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.freedGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.freedBhav}</span>
              </li>
            </fieldset>
          </fieldset>
          <li>
            <div className="heading">आरोप विरचन से निर्णय अवधि :</div>
            <span>{item.timeTaken}</span>
          </li>
          <li>
            <div className="heading">सजा की अवधि :</div>
            <span>{item.punishmentTime}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const New2B = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>

          <fieldset>
            <legend>निर्णीत वादों का विवरण</legend>

            <li>
              <div className="heading">कुल : </div>
              <span>{item.total}</span>
            </li>
            <li>
              <div className="heading">सजा : </div>
              <span>{item.punished}</span>
            </li>
            <li>
              <div className="heading">रिहा : </div>
              <span>{item.freed}</span>
            </li>
          </fieldset>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const BatchComponent = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">जनपद का नाम :</div>
            <span>{item.district}</span>
          </li>
          <li>
            <div className="heading">माह मे लम्बित वाद :</div>
            <span>{item.suitsInMonthLambit}</span>
          </li>
          <li>
            <div className="heading">माह में दायर वाद :</div>
            <span>{item.suitsInMonthDayar}</span>
          </li>
          <li>
            <div className="heading">कुल योग :</div>
            <span>{item.suitsInMonthFinaled}</span>
          </li>
          <li>
            <div className="heading">निर्णीत :</div>
            <span>{item.suitsInMonthTotal}</span>
          </li>
          <li>
            <div className="heading">सजा वाद / गुण दोष के आधार / कुल वाद :</div>
            <span>{item.punishTotal}</span>
          </li>
          <li>
            <div className="heading">
              सजा वाद / गुण दोष के आधार / कुल अभियुक्त :
            </div>
            <span>{item.punishTotalSuspect}</span>
          </li>
          <li>
            <div className="heading">सजा वाद / जुर्म इकबाल के / कुल वाद :</div>
            <span>{item.jurmTotal}</span>
          </li>
          <li>
            <div className="heading">
              सजा वाद / जुर्म इकबाल के / कुल अभियुक्त :
            </div>
            <span>{item.jurmTotalSuspect}</span>
          </li>
          <li>
            <div className="heading">रिहा / कुल वाद :</div>
            <span>{item.freedTotal}</span>
          </li>
          <li>
            <div className="heading">रिहा / कुल अभियुक्त :</div>
            <span>{item.freedTotalSuspect}</span>
          </li>
          <li>
            <div className="heading">सुलह :</div>
            <span>{item.sorted}</span>
          </li>
          <li>
            <div className="heading">सत्र सुपुर्द / कुल वाद :</div>
            <span>{item.satraTotal}</span>
          </li>
          <li>
            <div className="heading">सत्र सुपुर्द / कुल अभियुक्त :</div>
            <span>{item.satraTotalSuspect}</span>
          </li>
          <li>
            <div className="heading">उन्मोचित :</div>
            <span>{item.discharged}</span>
          </li>
          <li>
            <div className="heading">दाखिल दफ्तर :</div>
            <span>{item.filed}</span>
          </li>
          <li>
            <div className="heading">अवशेष :</div>
            <span>{item.left}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const CriminalComponent = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">न्यायालय का नाम :</div>
            <span>{item.courtName}</span>
          </li>
          <li>
            <div className="heading">जनपद :</div>
            <span>{item.district}</span>
          </li>
          <li>
            <div className="heading">चिन्हित माफिया अपराधी का नाम :</div>
            <span>{item.criminalName}</span>
          </li>
          <li>
            <div className="heading">अभियोजक का नाम :</div>
            <span>{item.prosecutor}</span>
          </li>
          <li>
            <div className="heading">थाना :</div>
            <span>{item.policeStation}</span>
          </li>
          <fieldset>
            <legend>गिरोहबन्द अधिनियम</legend>
            <li>
              <div className="heading">अ0सं0 / सत्र विचारण सं0 :</div>
              <span>{item.satraSankhya}</span>
            </li>
            <li>
              <div className="heading">धारा :</div>
              <span>{item.act}</span>
            </li>
            <li>
              <div className="heading">आरोप विरचित किये जाने का दिनांक :</div>
              <span>{moment(item.dated).format("ll")}</span>
            </li>
            <li>
              <div className="heading">लाइसेन्स निरस्तीकरण :</div>
              <span>{moment(item.liscenseTermination).format("ll")}</span>
            </li>
            <li>
              <div className="heading">
                धारा 14 (1) के अन्तर्गत कुर्क तथा जब्तीकरण,ध्वस्ती करण एवं
                अवमुक्त सम्पति का मूल्य :
              </div>
              <span>{item.propertyValue}</span>
            </li>
          </fieldset>

          <fieldset>
            <legend>माह में निर्णीत वादों का विवरण</legend>
            <fieldset>
              <legend>कुल निर्णीत वाद</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.totalGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.totalBhav}</span>
              </li>
            </fieldset>
            <fieldset>
              <legend>सजा</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.punishGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.punishBhav}</span>
              </li>
            </fieldset>
            <fieldset>
              <legend>रिहा</legend>
              <li>
                <div className="heading">गिरोहबन्द :</div>
                <span>{item.freedGiroh}</span>
              </li>
              <li>
                <div className="heading">भा0द0वि0 :</div>
                <span>{item.freedBhav}</span>
              </li>
            </fieldset>
          </fieldset>
          <li>
            <div className="heading">आरोप विरचन से निर्णय अवधि :</div>
            <span>{item.timeTaken}</span>
          </li>
          <li>
            <div className="heading">सजा की अवधि :</div>
            <span>{item.punishmentTime}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const BatchTwoComponent = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">न्यायालय का नाम :</div>
            <span>{item.courtName}</span>
          </li>
          <li>
            <div className="heading">पीठासीन अधिकारी का नाम :</div>
            <span>{item.officerName}</span>
          </li>
          <li>
            <div className="heading">अभियोजक का नाम :</div>
            <span>{item.prosecutor}</span>
          </li>
          <li>
            <div className="heading">थाना :</div>
            <span>{item.policeStation}</span>
          </li>
          <li>
            <div className="heading">अ0सं0 / सत्र विचारण सं0 :</div>
            <span>{item.satraSankhya}</span>
          </li>
          <li>
            <div className="heading">धारा :</div>
            <span>{item.act}</span>
          </li>
          <li>
            <div className="heading">आरोप विरचित किये जाने का दिनांक :</div>
            <span>{item.dated}</span>
          </li>
          <li>
            <div className="heading">कुल निर्णीत वाद :</div>
            <span>{item.totalCases}</span>
          </li>
          <li>
            <div className="heading">सजा :</div>
            <span>{item.punished}</span>
          </li>
          <li>
            <div className="heading">सजा की अवधि :</div>
            <span>{item.punishmentTime}</span>
          </li>
          <li>
            <div className="heading">आरोप विरचन से निर्णय तक अवधि :</div>
            <span>{item.timeTaken}</span>
          </li>
          <li>
            <div className="heading">सजा का प्रतिशत :</div>
            <span>{item.punishedPercentage}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const CardComponent = ({ item }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>
              {item.formName === "prosecution"
                ? "प्रदेश में हुए अभियोजन कार्य / Prosecution done in the state"
                : item.formName}
            </span>
          </li>
          <li>
            <div className="heading">Courtname :</div>
            <span>{item.courtName}</span>
          </li>
          <li>
            <div className="heading">Type of suit / वाद का प्रकार :</div>
            <span>{item.suite}</span>
          </li>
          <li>
            <div className="heading">
              जनवरी माह के प्रारम्भ में लंबित वाद / Cases pending at the
              beginning of January :
            </div>
            <span>{item.suitsInJan}</span>
          </li>
          <li>
            <div className="heading">
              वर्ष में दायर वाद / suits filed in the year :
            </div>
            <span>{item.newSuits}</span>
          </li>
          <li>
            <div className="heading">सजा / Punishment :</div>
            <span>{item.punishment}</span>
          </li>
          <li>
            <div className="heading">सुलह / reconciliation : </div>
            <span>{item.reconciliation}</span>
          </li>
          <li>
            <div className="heading">सत्र सुपुर्द / session handed over :</div>
            <span>{item.session}</span>
          </li>
          <li>
            <div className="heading">उन्मोचित / discharged :</div>
            <span>{item.discharged}</span>
          </li>
          <li>
            <div className="heading">दाखिल दफ्तर / filed :</div>
            <span>{item.filed}</span>
          </li>
          <li>
            <div className="heading">रिहा / freed :</div>
            <span>{item.freed}</span>
          </li>
          <li>
            <div className="heading">निर्णीत / decided :</div>
            <span>{item.decided}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const CardComponentTwo = ({ item }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>
              {item.formName === "extraBudget"
                ? "अतिरिक्त बजट मांगपत्र के सम्बन्ध में निर्धारित प्रारूप"
                : item.formName}
            </span>
          </li>
          <li>
            <div className="heading">
              परिक्षेत्रीय/ जनपदीय कार्यालय का नाम :
            </div>
            <span>{item.officeName}</span>
          </li>
          <li>
            <div className="heading">मद संख्या :</div>
            <span>{item.itemCount}</span>
          </li>
          <li>
            <div className="heading">पूर्व आवंटित बजट :</div>
            <span>{item.preAllocatedBudget}</span>
          </li>
          <li>
            <div className="heading">अब तक व्यय का योग :</div>
            <span>{item.expenditureSoFar}</span>
          </li>
          <li>
            <div className="heading">अतिरिक्त मांग की धनराशि :</div>
            <span>{item.excessDemand}</span>
          </li>
          <li>
            <div className="heading">
              अभ्युक्ति (लंबित बिल/अति० व्यय का विवरण) :
            </div>
            <span>{item.remark}</span>
          </li>
          <li>
            <div className="heading">अवशेष :</div>
            <span>{item.left}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const PowerComponent = ({ item, name }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>{name}</span>
          </li>
          <li>
            <div className="heading">जनपद :</div>
            <span>{item.district}</span>
          </li>
          <li>
            <div className="heading">अभियोजक का नाम :</div>
            <span>{item.prosecutorName}</span>
          </li>
          <li>
            <div className="heading">पद नाम :</div>
            <span>{item.postName}</span>
          </li>
          <li>
            <div className="heading">अ0सं0 :</div>
            <span>{item.count}</span>
          </li>
          <li>
            <div className="heading">धारा :</div>
            <span>{item.act}</span>
          </li>
          <li>
            <div className="heading">थाना :</div>
            <span>{item.policeStation}</span>
          </li>
          <li>
            <div className="heading">बनाम :</div>
            <span>{item.verus}</span>
          </li>
          <li>
            <div className="heading">सज़ा :</div>
            <span>{item.punishment}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const PensionComponent = ({ item }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>
              {item.formName === "pension"
                ? "पेंशन पटल से मॉगी जाने वाली सूचना का प्रारूप-"
                : item.formName}
            </span>
          </li>
          <li>
            <div className="heading">जनपद का नाम :</div>
            <span>{item.district}</span>
          </li>
          <li>
            <div className="heading">
              सेवानिवृत्त होने वाले अधिकारी/कर्मचारी का नाम, जिन्हे पेंशन
              प्राप्त नही हो रही है। :
            </div>
            <span>{item.retiredName}</span>
          </li>
          <li>
            <div className="heading">
              सेवानिवृत्त होने वाले अधिकारी/कर्मचारी का नाम, जिन्हे अदेयता
              प्रमाण पत्र निर्गत नही किया। अगर नही किया गया, तो कारण सहित उल्लेख
              :
            </div>
            <span>{item.dueCertificate}</span>
          </li>
          <li>
            <div className="heading">
              सेवानिवृत्त होने वाले अधिकारी/कर्मचारी, जिन्हे जी०पी०एफ0/अनन्तिम
              पेंशन हेतु अनापत्ति प्रमाण पत्र निर्गत नही किया गया। :
            </div>
            <span>{item.gpf}</span>
          </li>
          <li>
            <div className="heading">
              सेवानिवृत्त होने वाले अधिकारी/कर्मचारी, जिनके कितन सेवानिवृत्ति
              देयक लंबित है और भुगतान के लिये क्या कार्यवाही की गयी। :
            </div>
            <span>{item.processed}</span>
          </li>
          <li>
            <div className="heading">मो0नंबर :</div>
            <span>{item.mobile}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const EmployementComponent = ({ item }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>
              {item.formName === "employement"
                ? "वेतन समिति (2008) की संस्तुतियों पर लिये गये निर्णयानुसार राज्य कर्मचारियों के लिये सुनिश्चित कैरियर प्रोन्नयन (ए0सी0पी0) की व्यवस्था।"
                : item.formName}
            </span>
          </li>
          <li>
            <div className="heading">अधिकारी का नाम :</div>
            <span>{item.officerName}</span>
          </li>
          <li>
            <div className="heading">पदनाम/जन्मतिथि :</div>
            <span>{item.dob}</span>
          </li>
          <li>
            <div className="heading">वर्तमान वेतनमान / लेबल :</div>
            <span>{item.presentSalary}</span>
          </li>
          <li>
            <div className="heading">नियुक्ति जनपद :</div>
            <span>{item.presentDistrict}</span>
          </li>
          <li>
            <div className="heading">अजनपदीय संस्थान :</div>
            <span>{item.institute}</span>
          </li>
          <li>
            <div className="heading">नियुक्ति की तिथि :</div>
            <span>{item.dateOfDeployment}</span>
          </li>
          <li>
            <div className="heading">
              10 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित
              तिथि/प्रस्तावित वेतनमान व लेबल :
            </div>
            <span>{item.tenthIncrement}</span>
          </li>
          <li>
            <div className="heading">
              16 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित
              तिथि/प्रस्तावित वेतनमान व लेबल :
            </div>
            <span>{item.sixteenIncrement}</span>
          </li>
          <li>
            <div className="heading">
              26 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित
              तिथि/प्रस्तावित वेतनमान व लेबल :
            </div>
            <span>{item.twentySixthIncrement}</span>
          </li>
          <li>
            <div className="heading">
              प्रक्षा/दितीय/ उत्तीय पदोन्नति के पद पर नर्यभार ग्रहण |करने की
              तिथि :
            </div>
            <span>{item.latestDeployementDate}</span>
          </li>
          <li>
            <div className="heading">
              विभागीय जाँच /अनुशासनिक कार्यवाही का विवरण यदि कोई हो। :
            </div>
            <span>{item.case}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

const PromotionComponent = ({ item }) => {
  const approve = (type, id) => {
    console.log(type, id);
    axios
      .post("api/users/approve", { type, id })
      .then((res) => {
        if (res.status == 200) {
          alert("request submitted");
          location.reload();
        }
      })
      .catch((err) => {
        alert(error.message);
        console.error(err);
      });
  };
  return (
    <Paper className="user-data">
      <div className="wrapper row">
        <ul>
          <li>
            <div className="heading">Form : </div>
            <span>
              {item.formName === "promotion"
                ? "अभियोजन विभाग में समह–ग के पद पर प्रोन्नति के संबंध में विवरण"
                : item.formName}
            </span>
          </li>
          <li>
            <div className="heading">कर्मचारी का नाम / पदनाम : </div>
            <span>{item.officerName}</span>
          </li>
          <li>
            <div className="heading">गृह / जनपद :</div>
            <span>{item.district}</span>
          </li>
          <li>
            <div className="heading">जन्मतिथि :</div>
            <span>{item.dob}</span>
          </li>
          <li>
            <div className="heading">वर्तमान पद पर नियुक्ति तिथी :</div>
            <span>{item.presentPostDate}</span>
          </li>
          <li>
            <div className="heading">स्थायीकरण का विवरण : </div>
            <span>{item.dipiction}</span>
          </li>
          <li>
            <div className="heading">वर्तमान तैनाती / स्थान : </div>
            <span>{item.presentPost}</span>
          </li>
          <li>
            <div className="heading">तिथि :</div>
            <span>{item.dateOfDeployment}</span>
          </li>
          <li>
            <div className="heading">अभ्युक्ती : </div>
            <span>{item.remark}</span>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={item.approved}
          onClick={() => approve("approve", item._id)}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => approve("delete", item._id)}
        >
          delete
        </Button>
      </div>
    </Paper>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const { token } = parseCookies(req);
  const { data } = await axios.get(`${baseUrl}/api/users/${params.user}`);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  return {
    props: { token: token, data: data }, // will be passed to the page component as props
  };
}
