import MaterialTable, { MTableHeader } from "material-table";
import { forwardRef } from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

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

const districtArray = [
  "Agra",
  "Aligarh",
  "Allahabad",
  "Ambedkar Nagar",
  "Amethi (Chatrapati Sahuji Mahraj Nagar)",
  "Amroha (J.P. Nagar)",
  "Auraiya",
  "Azamgarh",
  "Baghpat",
  "Bahraich",
  "Ballia",
  "Balrampur",
  "Banda",
  "Barabanki",
  "Bareilly",
  "Basti",
  "Bhadohi",
  "Bijnor",
  "Budaun",
  "Bulandshahr",
  "Chandauli",
  "Chitrakoot",
  "Deoria",
  "Etah",
  "Etawah",
  "Faizabad",
  "Farrukhabad",
  "Fatehpur",
  "Firozabad",
  "Gautam Buddha Nagar",
  "Ghaziabad",
  "Ghazipur",
  "Gonda",
  "Gorakhpur",
  "Hamirpur",
  "Hapur (Panchsheel Nagar)",
  "Hardoi",
  "Hathras",
  "Jalaun",
  "Jaunpur",
  "Jhansi",
  "Kannauj",
  "Kanpur Dehat",
  "Kanpur Nagar",
  "Kanshiram Nagar (Kasganj)",
  "Kaushambi",
  "Kushinagar (Padrauna)",
  "Lakhimpur - Kheri",
  "Lalitpur",
  "Lucknow",
  "Maharajganj",
  "Mahoba",
  "Mainpuri",
  "Mathura",
  "Mau",
  "Meerut",
  "Mirzapur",
  "Moradabad",
  "Muzaffarnagar",
  "Pilibhit",
  "Pratapgarh",
  "RaeBareli",
  "Rampur",
  "Saharanpur",
  "Sambhal (Bhim Nagar)",
  "Sant Kabir Nagar",
  "Shahjahanpur",
  "Shamali (Prabuddh Nagar)",
  "Shravasti",
  "Siddharth Nagar",
  "Sitapur",
  "Sonbhadra",
  "Sultanpur",
  "Unnao",
  "Varanasi",
];

const percentage = (num1, num2) => {
  return (num1 * 100) / num2;
};

const tableData = (records, act, reduceValue) => {
  return records
    .filter((e) => e.act == act)
    .reduce((a, e) => a + Number(e[reduceValue]), 0);
};

const obj = (records, act, actInHindi) => {
  return {
    act: actInHindi,
    totalCases: tableData(records, act, "totalCases"),
    caseIncreaseInMonth: tableData(records, act, "caseIncreaseInMonth"),
    caseDisposedOfInMonth: tableData(records, act, "caseDisposedOfInMonth"),
    deathPenalty: tableData(records, act, "deathPenalty"),
    lifeImprisonment: tableData(records, act, "lifeImprisonment"),
    moreThanTenYearJail: tableData(records, act, "moreThanTenYearJail"),
    totalPunished: tableData(records, act, "totalPunished"),
    punishmentTime: tableData(records, act, "punishmentTime"),
    argumentCount: tableData(records, act, "argumentCount"),
    prosecutorCount: tableData(records, act, "prosecutorCount"),
    freedArgumentCount: tableData(records, act, "freedArgumentCount"),
    freedProsecutorCount: tableData(records, act, "freedProsecutorCount"),
    rebel: tableData(records, act, "rebel"),
    behaviour: tableData(records, act, "behaviour"),
    noProof: tableData(records, act, "noProof"),
    asangat: tableData(records, act, "asangat"),
    appealCount: tableData(records, act, "appealCount"),
  };
};

const footerData = (records) => {
  return {
    act: "",
    totalCases: records.reduce((a, e) => a + Number(e["totalCases"]), 0),
    caseIncreaseInMonth: records.reduce(
      (a, e) => a + Number(e["caseIncreaseInMonth"]),
      0
    ),
    caseDisposedOfInMonth: records.reduce(
      (a, e) => a + Number(e["caseDisposedOfInMonth"]),
      0
    ),
    deathPenalty: records.reduce((a, e) => a + Number(e["deathPenalty"]), 0),
    lifeImprisonment: records.reduce(
      (a, e) => a + Number(e["lifeImprisonment"]),
      0
    ),
    moreThanTenYearJail: records.reduce(
      (a, e) => a + Number(e["moreThanTenYearJail"]),
      0
    ),
    totalPunished: records.reduce((a, e) => a + Number(e["totalPunished"]), 0),
    punishmentTime: records.reduce(
      (a, e) => a + Number(e["punishmentTime"]),
      0
    ),
    argumentCount: records.reduce((a, e) => a + Number(e["argumentCount"]), 0),
    prosecutorCount: records.reduce(
      (a, e) => a + Number(e["prosecutorCount"]),
      0
    ),
    freedArgumentCount: records.reduce(
      (a, e) => a + Number(e["freedArgumentCount"]),
      0
    ),
    freedProsecutorCount: records.reduce(
      (a, e) => a + Number(e["freedProsecutorCount"]),
      0
    ),
    rebel: records.reduce((a, e) => a + Number(e["rebel"]), 0),
    behaviour: records.reduce((a, e) => a + Number(e["behaviour"]), 0),
    noProof: records.reduce((a, e) => a + Number(e["noProof"]), 0),
    asangat: records.reduce((a, e) => a + Number(e["asangat"]), 0),
    appealCount: records.reduce((a, e) => a + Number(e["appealCount"]), 0),
  };
};

export default function TableThreeA({ posts }) {
  const [district, setDistrict] = useState("All");
  const [filteredData, setFilteredData] = useState(posts);

  useEffect(() => {
    setFilteredData(
      district == "All"
        ? posts
        : posts.filter((post) => post.district === district)
    );
  }, [district]);

  return (
    <div style={{ maxWidth: "100%" }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={district}
          displayEmpty
          onChange={(e) => setDistrict(e.target.value)}
        >
          <MenuItem>
            <em>All</em>
          </MenuItem>
          {districtArray.map((item, i) => (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select District</FormHelperText>
      </FormControl>
      <MaterialTable
        icons={tableIcons}
        title="महिलाओं के विरुद्ध लैंगिक/बलात्कार/ गम्भीर अपराधों से
                    सम्बन्धित विवरण पत्र"
        columns={[
          {
            title: "धारा",
            field: "act",
          },
          {
            title: "कुल लम्बित वादों की संख्या",
            field: "totalCases",
          },
          {
            title: "माह में बढे़ वादों की संख्या",
            field: "caseIncreaseInMonth",
          },
          {
            title: "माह में कुल निस्तारित वादों की संख्या",
            field: "caseDisposedOfInMonth",
          },
          {
            title: "दोषसिद्ध वादों की संख्या",
          },
          {
            title: "फांसी",
            field: "deathPenalty",
          },
          {
            title: "आजीवन कारावास",
            field: "lifeImprisonment",
          },
          {
            title: "दस वर्ष या उससे अधिक की सजा",
            field: "moreThanTenYearJail",
          },
          {
            title: "10 वर्ष से कम की सजा",
          },

          {
            title: "कुल सजा",
            field: "totalPunished",
          },
          {
            title: "सजा की अवधि",
            field: "punishmentTime",
          },
          {
            title: "कुल सजा हुए वाद",
          },
          {
            title: "वादों की संख्या",
            field: "argumentCount",
          },
          {
            title: "अभियुक्तों की संख्या",
            field: "prosecutorCount",
          },
          {
            title: "दोषमुक्त वादों की संख्या",
          },
          {
            title: "वादों की संख्या",
            field: "freedArgumentCount",
          },
          {
            title: "अभियुक्तों की संख्या",
            field: "freedProsecutorCount",
          },
          {
            title: "पक्षद्रोही के कारण",
            field: "rebel",
          },
          {
            title: "गुड़ दोष के आधार पर",
            field: "behaviour",
          },
          {
            title: "साक्ष्य के आभाव के कारण",
            field: "noProof",
          },
          {
            title: "असंगत दोषमुक्ति",
            field: "asangat",
          },
          {
            title: "अपील की संस्तुति एवं अपील दायर किये गए वादों इन संख्या",
            field: "appealCount",
          },
        ]}
        data={[
          obj(filteredData, "rape", "बलात्कार धारा 378 भा०द०वि०"),
          obj(filteredData, "rapeAndMurder", "बलात्कार सहित हत्या"),
          obj(filteredData, "lajjaBhang", "लज्जा मंग धारा 354 भा०द०वि०"),
          obj(
            filteredData,
            "molestation",
            "यौन उत्पीड़न धारा 354 ए.बी.सी.टी. भा०द०वि०"
          ),
          obj(filteredData, "indecency", "अश्लीलता धारा 294 भा०द०वि०"),
          footerData(filteredData),
        ]}
        options={{
          filtering: true,
          headerStyle: { backgroundColor: "#f1f1f1" },
          exportButton: true,
          pageSize: 6,
          pageSizeOptions: [5, 10, 20, 30, 50, 75, 100, 1000, 10000],

          exportButton: { csv: true },
        }}
      />
    </div>
  );
}
