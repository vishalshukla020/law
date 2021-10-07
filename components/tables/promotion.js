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

export default function PromotionTable({ posts }) {
  console.log(posts);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title="अभियोजन विभाग में समह–ग के पद पर प्रोन्नति के संबंध में विवरण"
        columns={[
          {
            title: "कसं",
            field: "serial",
          },
          {
            title: "कर्मचारी का नाम / पदनाम",
            field: "officerName",
          },
          {
            title: "गृह / जनपद",
            field: "district",
          },
          {
            title: "जन्मतिथि",
            field: "dob",
          },
          {
            title: "वर्तमान पद पर नियुक्ति तिथी",
            field: "presentPostDate",
          },
          {
            title: "स्थायीकरण का विवरण",
            field: "dipiction",
          },
          { title: "वर्तमान तैनाती / स्थान", field: "presentPost" },
          {
            title: "तिथि",
            field: "dateOfDeployement",
          },
          {
            title: "अभ्युक्ती",
            field: "remark",
          },
        ]}
        data={posts.map((post, index) => {
          return {
            serial: index + 1,
            officerName: post.officerName,
            district: post.district,
            dob: post.dob.substring(0, 10),
            presentPostDate: post.presentPostDate.substring(0, 10),
            presentPost: post.presentPost,
            dipiction: post.dipiction,
            dateOfDeployement: post.dateOfDeployment.substring(0, 10),
            remark: post.remark,
          };
        })}
      />
    </div>
  );
}
