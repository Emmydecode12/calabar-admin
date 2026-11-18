import { Card, ProgressBar } from "../ui";
import { freeListing } from "../../data/mockData";
import "./FreeListingPhase.css";

export default function FreeListingPhase() {
  const { used, total, conversion } = freeListing;

  return (
    <Card title="Free-listing phase">
      <p className="phase__big">
        {used} / {total}
      </p>
      <p className="phase__label">landlords on free listings</p>
      <ProgressBar value={used} max={total} />

      <h3 className="phase__subtitle">Conversion</h3>
      <p className="phase__big">{conversion}</p>
      <p className="phase__label">enquiry-to-deal rate</p>
    </Card>
  );
}