import NavBar from "../components/NavBar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { parseCookies } from "../helper/parseCookies";
import baseUrl from "../helper/baseURL";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";

export default function User({ token, data }) {
  const context = useContext(AuthContext);
  console.log(data)

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
              {item.formName === "budgetForm"
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
