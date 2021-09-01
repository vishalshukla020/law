import MaterialTable from "material-table";

export default function FormTwoTable({ posts }) {
  console.log(posts);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
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
        ]}
        data={posts.map((post, index) => {
          return {
            serial: index + 1,
            officeName: post.officeName,
            itemCount: post.itemCount,
            preAllocatedBudget: post.preAllocatedBudget,
            expenditureSoFar: post.expenditureSoFar,
            left: post.left,
            excessDemand: post.excessDemand,
            remark: post.remark,
          };
        })}
      />
    </div>
  );
}
