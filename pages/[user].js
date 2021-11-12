import NavBar from "../components/NavBar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { parseCookies } from "../helper/parseCookies";
import baseUrl from "../helper/baseURL";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";

export default function User({ token, data }) {
  const context = useContext(AuthContext);
  console.log(data);

  useEffect(() => {
    if (!context.user && token) {
      context.login(token);
    } else if (!context.user && !token) {
      router.push("/login");
    }
  });

  return (
    <>
      <NavBar username={context.user?.name} role={context.user?.role} />
      <div className="container">
        {data
          .filter((post) => post.formName == "prosecution")
          .reverse()
          .map((item) => (
            <CardComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "extraBudget")
          .reverse()
          .map((item) => (
            <CardComponentTwo item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "pension")
          .reverse()
          .map((item) => (
            <PensionComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "employement")
          .reverse()
          .map((item) => (
            <EmployementComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "promotion")
          .reverse()
          .map((item) => (
            <PromotionComponent item={item} key={item._id} />
          ))}
        {data
          .filter((post) => post.formName == "power-1")
          .reverse()
          .map((item) => (
            <PowerComponent
              item={item}
              name="मिशन शक्ति - राज्य अभियोजन सेवा संवर्ग"
              key={item._id}
            />
          ))}
        {data
          .filter((post) => post.formName == "power-2")
          .reverse()
          .map((item) => (
            <PowerComponent
              item={item}
              name="मिशन शक्ति  - शासकीय अधिवक्ता सेवा संवर्ग"
              key={item._id}
            />
          ))}
      </div>
    </>
  );
}

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
