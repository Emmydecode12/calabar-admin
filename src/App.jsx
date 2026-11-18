import DashboardLayout from "./components/layout/DashboardLayout/DashboardLayout";
import Overview from "./pages/Overview";

export default function App() {
  return (
    <DashboardLayout>
      <Overview />
    </DashboardLayout>
  );
}