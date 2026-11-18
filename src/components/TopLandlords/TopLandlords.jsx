import { Card, DataTable } from "../ui";
import { topLandlords } from "../../data/mockData";

const columns = [
  { key: "landlord", label: "Landlord" },
  { key: "listings", label: "Listings" },
  { key: "rented", label: "Rented" },
  { key: "enquiries", label: "Enquiries" },
];

export default function TopLandlords() {
  return (
    <Card title="Top landlords">
      <DataTable columns={columns} rows={topLandlords} />
    </Card>
  );
}