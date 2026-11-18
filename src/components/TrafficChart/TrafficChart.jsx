import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Card } from "../ui";
import { traffic } from "../../data/mockData";
import "./TrafficChart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function TrafficChart() {
  const data = {
    labels: traffic.map((t) => t.month),
    datasets: [
      {
        data: traffic.map((t) => t.visits),
        borderRadius: 8,
        borderSkipped: false,
        maxBarThickness: 90,
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return "#7C6FF0";
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "#7C6FF0");
          gradient.addColorStop(1, "#5B4FE0");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (item) => `${item.raw}k visits` },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#6B6890", font: { size: 12 } },
      },
      y: { display: false, beginAtZero: true },
    },
  };

  return (
    <Card title="Traffic & enquiries">
      <div className="traffic__chart">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
}