import MaterialTable from "material-table";
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

export default function BatchTwoTableThree({ posts }) {
  console.log(posts);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title="विशष व स्थानीय विधि (एस.एल.एल.) के अन्तर्गत जहरीली शराब से
                    सम्बन्धित धारा 60 (क) उ0प्र0 आबकारी अधिनियम के नवीन वादों के
                    विधारण प्रारम्भ होने तथा निर्णीत वादों सम्बन्धी मासिक विवरण
                    पत्र"
        columns={[
          {
            title: "जनपद",
            field: "district",
          },
          {
            title: "न्यायालय का नाम",
            field: "courtName",
          },
          {
            title: "पीठासीन अधिकारी का नाम",
            field: "officerName",
          },
          {
            title: "अभियोजक का नाम",
            field: "prosecutor",
          },
          {
            title: "विवेचक का नाम",
            field: "discriminantName",
          },
          {
            title: "थाना",
            field: "policeStation",
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
            title: "कुल निर्णीत वाद",
            field: "totalCases",
          },
          {
            title: "सजा",
            field: "punished",
          },
          {
            title: "रिहा",
            field: "freed",
          },
          {
            title: "आरोप विरचन से निर्णय तक अवधि",
            field: "timeTaken",
          },
          {
            title: "सजा की अवधि",
            field: "punishmentTime",
          },
          {
            title: "सजा का प्रतिशत",
            field: "punishedPercentage",
          },
          {
            title: "सत्र सुपुर्द",
            field: "satraSupurd",
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
            officerName: post.officerName,
            prosecutor: post.prosecutor,
            discriminantName: post.discriminantName,
            policeStation: post.policeStation,
            satraSankhya: post.satraSankhya,
            act: post.act,
            dated: moment(post.dated).format("ll"),
            totalCases: post.totalCases,
            punished: post.punished,
            freed: post.freed,
            timeTaken: post.timeTaken,
            punishmentTime: post.punishmentTime,
            satraSupurd: post.satraSupurd,
            punishedPercentage: `${percentage(
              post.punished,
              post.totalCases
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
