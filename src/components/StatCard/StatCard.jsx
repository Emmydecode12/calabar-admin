import { Card } from "../ui";
import "./StatCard.css";

export default function StatCard({ label, value, note }) {
  return (
    <Card className="stat">
      <p className="stat__label">{label}</p>
      <p className="stat__value">{value}</p>
      <p className="stat__note">{note}</p>
    </Card>
  );
}