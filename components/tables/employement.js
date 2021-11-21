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

export default function EmployementTable({ posts }) {
  console.log(posts);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title="वेतन समिति (2008) की संस्तुतियों पर लिये गये निर्णयानुसार
                  राज्य कर्मचारियों के लिये सुनिश्चित कैरियर प्रोन्नयन
                  (ए0सी0पी0) की व्यवस्था।"
        columns={[
          {
            title: "कसं",
            field: "serial",
          },
          {
            title: "अधिकारी का नाम",
            field: "officerName",
          },
          {
            title: "पदनाम/जन्मतिथि",
            field: "dob",
          },
          {
            title: "वर्तमान वेतनमान / लेबल",
            field: "presentSalary",
          },
          {
            title: "नियुक्ति जनपद",
            field: "presentDistrict",
          },
          {
            title: "अजनपदीय संस्थान",
            field: "institute",
          },
          { title: "नियुक्ति की तिथि", field: "dateOfDeployment" },
          {
            title:
              "10 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित तिथि/प्रस्तावित वेतनमान व लेबल",
            field: "tenthIncrement",
          },
          {
            title:
              "16 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित तिथि/प्रस्तावित वेतनमान व लेबल",
            field: "sixteenIncrement",
          },
          {
            title:
              "26 वर्ष की सेवा पर प्रथम वित्तीय स्तरोन्नयन की प्रस्तावित तिथि/प्रस्तावित वेतनमान व लेबल",
            field: "twentySixthIncrement",
          },
          {
            title:
              "प्रक्षा/दितीय/ उत्तीय पदोन्नति के पद पर नर्यभार ग्रहण |करने की तिथि",
            field: "latestDeployementDate",
          },
          {
            title: "विभागीय जाँच /अनुशासनिक कार्यवाही का विवरण यदि कोई हो।",
            field: "case",
          },
        ]}
        data={posts.map((post, index) => {
          return {
            serial: index + 1,
            officerName: post.officerName,
            dob: post.dob.substring(0, 10),
            presentSalary: post.presentSalary,
            presentDistrict: post.presentDistrict,
            institute: post.institute,
            dateOfDeployment: post.dateOfDeployment.substring(0, 10),
            tenthIncrement: post.tenthIncrement.substring(0, 10),
            sixteenIncrement: post.sixteenIncrement.substring(0, 10),
            twentySixthIncrement: post.twentySixthIncrement.substring(0, 10),
            latestDeployementDate: post.latestDeployementDate.substring(0, 10),
            case: post.case,
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
