import { useState } from "react";
import { Card, Button, DataTable } from "../ui";
import { approvals } from "../../data/mockData";

export default function ApprovalTable() {
  const [rows, setRows] = useState(approvals);

  const remove = (id) => setRows(rows.filter((r) => r.id !== id));

  const columns = [
    { key: "property", label: "Property" },
    { key: "landlord", label: "Landlord" },
    { key: "area", label: "Area" },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <div className="table__actions">
          <Button size="sm" onClick={() => remove(row.id)}>Approve</Button>
          <Button size="sm" variant="outline" onClick={() => remove(row.id)}>Reject</Button>
        </div>
      ),
    },
  ];

  return (
    <Card title="Listings awaiting approval">
      {rows.length > 0 ? (
        <DataTable columns={columns} rows={rows} />
      ) : (
        <p className="table-empty">No listings awaiting approval.</p>
      )}
    </Card>
  );
}