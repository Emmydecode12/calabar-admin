import ApprovalTable from "../components/ApprovalTable/ApprovalTable";
import ReportedListings from "../components/ReportedListings/ReportedListings";
import TopLandlords from "../components/TopLandlords/TopLandlords";
import FreeListingPhase from "../components/FreeListingPhase/FreeListingPhase";
import TrafficChart from "../components/TrafficChart/TrafficChart";
import StatCard from "../components/StatCard/StatCard";
import { stats, chartColors } from "../data/mockData";
import PageHeader from "../components/layout/PageHeader/PageHeader";
import { Button } from "../components/ui";
import "./Overview.css";

export default function Overview() {
  return (
    <>
      <PageHeader
        title="Platform overview"
       subtitle="Monitor your properties, listings, users, and platform activity at a glance.."
        action={<Button variant="outline">Export report</Button>}
      />

     <div className="overview__stats">
  {stats.map((s, i) => (
  <StatCard key={s.label} {...s} color={chartColors[i]} />
))}
</div>
      <div className="overview__row overview__row--chart">
       <TrafficChart />
        <FreeListingPhase />
      </div>

      <div className="overview__row overview__row--tables">
        <ApprovalTable />
        <ReportedListings />
      </div>

      <TopLandlords />
    </>
  );
}