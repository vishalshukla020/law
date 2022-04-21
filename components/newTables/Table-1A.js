import MaterialTable, { MTableHeader } from "material-table";
import { forwardRef } from "react";
import moment from "moment";

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

const percentage = (num1, num2) => {
  return (num1 * 100) / num2;
};

export default function TableOne({ posts }) {
  console.log(posts);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title="प्रदेश के 25 चिन्हित माफिया अपराधी एवं उनके गिरोह के विरूद्ध माह में कृत कार्यवाही
तथा निर्णीत वादों सम्बन्धी मासिक विवरण पत्र"
        columns={[
          {
            title: "क्र०सं0",
            field: "serial",
          },
          {
            title: "चिन्हित माफिया अपराधी का नाम",
            field: "criminalName",
          },
          {
            title: "न्यायालय का नाम",
            field: "courtName",
          },
          {
            title: "अभियोजक का नाम",
            field: "prosecutor",
          },
          {
            title: "थाना",
            field: "policeStation",
          },
          {
            title: "गिरोहबन्द अधिनियम",
          },
          {
            title: "अ0सं0 / सत्र विचारण सं0",
            field: "satraSankhya",
          },

          {
            title: "धारा",
            field: "act",
          },
          {
            title: "आरोप विरचित किये जाने का दिनांक",
            field: "dated",
          },
          {
            title: "लाइसेन्स  निरस्तीकरण",
            field: "liscenseTermination",
          },
          {
            title:
              "धारा 14 (1) के अन्तर्गत कुर्क तथा जब्तीकरण,ध्वस्ती करण एवं अवमुक्त सम्पति का मूल्य",
            field: "propertyValue",
          },

          {
            title: "सजा / गिरोहबन्द",
            field: "punishGiroh",
          },
          {
            title: "सजा / भा0द0वि0",
            field: "punishBhav",
          },

          {
            title: "रिहा / गिरोहबन्द",
            field: "freedGiroh",
          },
          {
            title: "रिहा / भा0द0वि0",
            field: "freedBhav",
          },
          {
            title: "आरोप विरचन से निर्णय अवधि",
            field: "timeTaken",
          },
          {
            title: "सजा की अवधि",
            field: "punishmentTime",
          },

          {
            title: "Date",
            field: "date",
          },
        ]}
        data={posts.map((post, index) => {
          return {
            serial: index + 1,
            courtName: post.courtName,
            district: post.courtName,
            criminalName: post.criminalName,
            prosecutor: post.prosecutorName,
            policeStation: post.policeStation,
            satraSankhya: post.satraSankhya,
            act: post.act,
            dated: moment(post.filedDate).format("ll"),
            liscenseTermination: moment(post.liscenseTermination).format("ll"),
            propertyValue: post.netWorth,
            totalGiroh: post.totalGiroh,
            totalBhav: post.totalBhav,
            punishGiroh: post.punishGiroh,
            punishBhav: post.punishBhav,
            freedGiroh: post.freedGiroh,
            freedBhav: post.freedBhav,

            timeTaken: post.timeTaken,
            punishmentTime: post.punishmentTime,
            punishmentPercentage: `${percentage(
              post.punishGiroh + post.punishBhav,
              post.totalGiroh + post.totalBhav
            ).toFixed(2)} %`,

            date: moment(post.date).format("ll"),
          };
        })}
        options={{
          filtering: true,
          headerStyle: { backgroundColor: "#f1f1f1" },
          exportButton: true,
          pageSize: 10,
          exportButton: { csv: true },
        }}
      />
    </div>
  );
}
