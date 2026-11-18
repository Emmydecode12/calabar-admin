import { Card, Badge, DataTable } from "../ui";
import { reports } from "../../data/mockData";

const columns = [
  { key: "reason", label: "Reason" },
  { key: "listing", label: "Listing" },
  {
    key: "status",
    label: "Status",
    render: (row) => (
      <Badge tone={row.status === "Open" ? "warning" : "success"}>
        {row.status}
      </Badge>
    ),
  },
];

export default function ReportedListings() {
  return (
    <Card title="Reported listings">
      <DataTable columns={columns} rows={reports} />
    </Card>
  );
}