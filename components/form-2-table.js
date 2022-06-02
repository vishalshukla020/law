import MaterialTable from "material-table";
import moment from "moment";
import { forwardRef } from "react";
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

import DateRange from "./DateRange";

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

export default function FormTwoTable({ posts }) {
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
        title="अतिरिक्त बजट मांगपत्र के सम्बन्ध में निर्धारित प्रारूप"
        columns={[
          {
            title: "कसं",
            field: "serial",
          },
          {
            title: "परिक्षेत्रीय / जनपदीय कार्यालय का नाम",
            field: "officeName",
          },
          { title: "मद संख्या", field: "itemCount" },
          { title: "पूर्व आवंटित बजट", field: "preAllocatedBudget" },
          { title: "अब तक व्यय का योग", field: "expenditureSoFar" },
          { title: "अवशेष", field: "left" },
          { title: "अतिरिक्त मांग की धनराशि", field: "excessDemand" },
          {
            title: "अभ्युक्ति (लंबित बिल/अति० व्यय का विवरण)",
            field: "remark",
          },
          {
            title: "Date",
            field: "date",
          },
        ]}
        data={filteredData.map((post, index) => {
          return {
            serial: index + 1,
            officeName: post.officeName,
            itemCount: post.itemCount,
            preAllocatedBudget: post.preAllocatedBudget,
            expenditureSoFar: post.expenditureSoFar,
            left:
              parseInt(post.preAllocatedBudget) -
              parseInt(post.expenditureSoFar),
            excessDemand: post.excessDemand,
            remark: post.remark,
            date: moment(post.date).format("ll"),
          };
        })}
        options={{
          filtering: true,
          exportFileName:
            "अतिरिक्त बजट मांगपत्र के सम्बन्ध में निर्धारित प्रारूप",
          headerStyle: { backgroundColor: "#f1f1f1" },
          exportButton: true,
          pageSize: 10,
          exportButton: { csv: true },
        }}
      />
    </div>
  );
}
