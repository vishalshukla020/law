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

import DateRange from "../DateRange";
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

export default function PensionTable({ posts }) {
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
        title="मिशन शक्ति  - शासकीय अधिवक्ता सेवा संवर्ग"
        columns={[
          {
            title: "जनपद",
            field: "district",
          },
          {
            title: "अभियोजक का नाम",
            field: "prosecutorName",
          },
          {
            title: "पद नाम",
            field: "postName",
          },
          {
            title: "अ0सं0",
            field: "count",
          },
          {
            title: "धारा",
            field: "act",
          },
          {
            title: "थाना",
            field: "policeStation",
          },
          {
            title: "बनाम",
            field: "versus",
          },
          {
            title: "सज़ा",
            field: "punishment",
          },
          {
            title: "Date",
            field: "date",
          },
        ]}
        data={filteredData.map((post, index) => {
          return {
            serial: index + 1,
            district: post.district,
            prosecutorName: post.prosecutorName,
            postName: post.postName,
            count: post.count,
            act: post.act,
            policeStation: post.policeStation,
            versus: post.versus,
            punishment: post.punishment,
            date: moment(post.date).format("ll"),
          };
        })}
        options={{
          filtering: true,
          exportFileName: "मिशन शक्ति  - शासकीय अधिवक्ता सेवा संवर्ग",
          headerStyle: { backgroundColor: "#f1f1f1" },
          exportButton: true,
          pageSize: 10,
          exportButton: { csv: true },
        }}
      />
    </div>
  );
}
