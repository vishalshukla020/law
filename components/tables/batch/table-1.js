import MaterialTable from "material-table";
import { forwardRef } from "react";
import moment from "moment";

import { useState, useEffect } from "react";

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
import DateRange from "../../DateRange";

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

export default function BatchTableOne({ posts }) {
  const [filteredData, setFilteredData] = useState(posts);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  useEffect(() => {
    if (to) {
      console.log("triggered");
      console.log("from: ", from, "to: ", to);
      setFilteredData(() => {
        return posts.filter((post) => {
          const postDate = new Date(post.date);

          return postDate > from && postDate < to;
        });
      });
    }
  }, [to]);
  return (
    <div style={{ maxWidth: "100%" }}>
      <DateRange setFrom={setFrom} setTo={setTo} />

      <MaterialTable
        icons={tableIcons}
        title="सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत डी०जी०सी
                  संवर्ग द्वारा अभियोजित वादो का विवरण"
        columns={[
          {
            title: "जनपद का नाम",
            field: "district",
          },
          {
            title: "माह मे लम्बित वाद",
            field: "suitsInMonthLambit",
          },
          {
            title: "माह में दायर वाद",
            field: "suitsInMonthDayar",
          },
          {
            title: "कुल योग",
            field: "suitsInMonthFinaled",
          },
          {
            title: "निर्णीत",
            field: "suitsInMonthTotal",
          },

          {
            title: "सजा वाद / गुण दोष के आधार / कुल वाद",
            field: "punishTotal",
          },
          {
            title: "सजा वाद / गुण दोष के आधार / कुल अभियुक्त",
            field: "punishTotalSuspect",
          },
          {
            title: "सजा वाद / जुर्म इकबाल के / कुल वाद",
            field: "jurmTotal",
          },
          {
            title: "सजा वाद / जुर्म इकबाल के / कुल अभियुक्त",
            field: "jurmTotalSuspect",
          },
          {
            title: "रिहा / कुल वाद",
            field: "freedTotal",
          },
          {
            title: "रिहा / कुल अभियुक्त",
            field: "freedTotalSuspect",
          },
          {
            title: "सुलह",
            field: "sorted",
          },
          {
            title: "सत्र सुपुर्द / कुल वाद",
            field: "satraTotal",
          },
          {
            title: "सत्र सुपुर्द / कुल अभियुक्त",
            field: "satraTotalSuspect",
          },
          {
            title: "उन्मोचित",
            field: "discharged",
          },
          {
            title: "दाखिल दफ्तर",
            field: "filed",
          },
          {
            title: "अवशेष",
            field: "left",
          },
          {
            title: "Date",
            field: "date",
          },
        ]}
        data={posts.map((post, index) => {
          return {
            serial: index + 1,
            district: post.district,
            suitsInMonthLambit: post.suitsInMonthLambit,
            suitsInMonthDayar: post.suitsInMonthDayar,
            suitsInMonthFinaled: post.suitsInMonthFinaled,
            suitsInMonthTotal: post.suitsInMonthTotal,
            punishTotal: post.punishTotal,
            punishTotalSuspect: post.punishTotalSuspect,
            jurmTotal: post.jurmTotal,
            jurmTotalSuspect: post.jurmTotalSuspect,
            freedTotal: post.freedTotal,
            freedTotalSuspect: post.freedTotalSuspect,
            sorted: post.sorted,
            satraTotal: post.satraTotal,
            satraTotalSuspect: post.satraTotalSuspect,
            discharged: post.discharged,
            filed: post.filed,
            left: post.left,
            date: moment(post.date).format("ll"),
          };
        })}
        options={{
          filtering: true,
          exportFileName: `सत्र न्यायालयो में गिरोहबन्द अधिनियम के अन्तर्गत डी०जी०सी
                  संवर्ग द्वारा अभियोजित वादो का विवरण`,
          headerStyle: { backgroundColor: "#f1f1f1" },
          exportButton: true,
          pageSize: 10,
          exportButton: { csv: true },
        }}
      />
    </div>
  );
}
