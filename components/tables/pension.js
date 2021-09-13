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

export default function PensionTable({ posts }) {
  console.log(posts);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title="पेंशन पटल से मॉगी जाने वाली सूचना का प्रारूप-"
        columns={[
          {
            title: "कसं",
            field: "serial",
          },
          {
            title: "जनपद का नाम",
            field: "district",
          },
          {
            title:
              "सेवानिवृत्त होने वाले अधिकारी/कर्मचारी का नाम, जिन्हे पेंशन प्राप्त नही हो रही है।",
            field: "retiredName",
          },
          {
            title:
              "सेवानिवृत्त होने वाले अधिकारी/कर्मचारी का नाम, जिन्हे अदेयता प्रमाण पत्र निर्गत नही किया। अगर नही किया गया, तो कारण सहित उल्लेख",
            field: "dueCertificate",
          },
          {
            title:
              "सेवानिवृत्त होने वाले अधिकारी/कर्मचारी, जिन्हे जी०पी०एफ0/अनन्तिम पेंशन हेतु अनापत्ति प्रमाण पत्र निर्गत नही किया गया।",
            field: "gpf",
          },
          {
            title:
              "सेवानिवृत्त होने वाले अधिकारी/कर्मचारी, जिनके कितन सेवानिवृत्ति देयक लंबित है और भुगतान के लिये क्या कार्यवाही की गयी।",
            field: "processed",
          },
          { title: "मो0नंबर", field: "mobile" },
        ]}
        data={posts.map((post, index) => {
          return {
            serial: index + 1,
            retiredName: post.retiredName,
            district: post.district,
            dueCertificate: post.dueCertificate,
            gpf: post.gpf,
            processed: post.processed,
            mobile: post.mobile,
          };
        })}
      />
    </div>
  );
}
