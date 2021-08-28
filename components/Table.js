import MaterialTable from "material-table";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const myFilter = (array, court, setCourt, suite, setSuite, reduceValue) => {
  return array
    .filter((e) => e[court] === setCourt)
    .filter((e) => e[suite] === setSuite)
    .reduce((a, e) => a + Number(e[reduceValue]), 0);
};

export default function Table({ posts }) {
 
  const obj = (posts, courtname, suitename, court, suite) => {
    return {
      courtName: courtname,
      suite: suitename,
      suitsInJan: myFilter(
        posts,
        "courtName",
        court,
        "suite",
        suite,
        "suitsInJan"
      ),
      newSuits: myFilter(posts, "courtName", court, "suite", suite, "newSuits"),
      sum:
        myFilter(posts, "courtName", court, "suite", suite, "suitsInJan") +
        myFilter(posts, "courtName", court, "suite", suite, "newSuits"),
      decided: myFilter(posts, "courtName", court, "suite", suite, "decided"),
      punishment: myFilter(
        posts,
        "courtName",
        court,
        "suite",
        suite,
        "punishment"
      ),
      freed: myFilter(posts, "courtName", court, "suite", suite, "freed"),
      reconciliation: myFilter(
        posts,
        "courtName",
        court,
        "suite",
        suite,
        "reconciliation"
      ),
      session: myFilter(posts, "courtName", court, "suite", suite, "session"),
      discharged: myFilter(
        posts,
        "courtName",
        court,
        "suite",
        suite,
        "discharged"
      ),
      filed: myFilter(posts, "courtName", court, "suite", suite, "filed"),
      left: "left",
      percentage:
        (
          (myFilter(posts, "courtName", court, "suite", suite, "punishment") /
            (myFilter(posts, "courtName", court, "suite", suite, "punishment") +
              myFilter(posts, "courtName", court, "suite", suite, "freed"))) *
          100
        ).toFixed(2) + "%",
    };
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        columns={[
          { title: "न्यायालय का नाम", field: "courtName" },
          { title: "वाद का प्रकार", field: "suite" },
          { title: "जनवरी माह के प्रारम्भ में लंबित वाद", field: "suitsInJan" },
          { title: "वर्ष में दायर वाद", field: "newSuits" },
          { title: "योग", field: "sum" },
          { title: "निर्णीत", field: "decided" },
          { title: "सजा", field: "punishment" },
          { title: "रिहा", field: "freed" },
          { title: "सुलह", field: "reconciliation" },
          { title: "सत्र सुपुर्द", field: "session" },
          { title: "उन्मोचित", field: "discharged" },
          { title: "दाखिल दफ्तर", field: "filed" },
          { title: "अवशेष", field: "left" },
          { title: "सजा का प्रतिशत ", field: "percentage" },
        ]}
        data={[
          obj(
            posts,
            "अधीनस्थ न्यायालय",
            "भा० द० वि०",
            "subordinate-court",
            "riot"
          ),
          obj(posts, "", "अन्य अधि०	", "subordinate-court", "other"),
          obj(
            posts,
            "सत्र न्यायालय (अभियोजन संवर्ग )",
            "भा० द० वि०",
            "session-court",
            "riot"
          ),
          obj(posts, "", "अन्य अधि०", "session-court", "other"),
          obj(posts, "", "एस०सी० एस०टी०", "session-court", "scst"),
          obj(posts, "", "गिरोहबंद अधि० एवं माफिया", "session-court", "mafia"),
          obj(
            posts,
            "सत्र न्यायालय ( डी.जी.सी० /ए.डी.जी.सी० संवर्ग )",
            "भा० द० वि०",
            "DGC-session-court",
            "riot"
          ),
          obj(posts, "", "अन्य अधि०", "DGC-session-court", "other"),
          obj(posts, "", "एस०सी० एस०टी०", "DGC-session-court", "scst"),
          obj(
            posts,
            "",
            "गिरोहबंद अधि० एवं माफिया",
            "DGC-session-court",
            "mafia"
          ),
        ]}
        title=" प्रदेश में हुए अभियोजन कार्य दिनांक ०१ जंवरी, २०२० से दिनांक ३१
              डिसम्बर, २०२० तक"
        options={{
          headerStyle: { backgroundColor: "#f1f1f1" },
          exportButton: true,
          pageSize: 10,
          exportButton: { csv: true },
        }}
      />
    </div>
  );
}
