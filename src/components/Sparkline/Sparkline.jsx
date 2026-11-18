import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler);

export default function Sparkline({ data, color = "#5B4FE0" }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const chartData = {
    labels: data.map((_, i) => i + 1),
    datasets: [
      {
        data,
        borderColor: color,
        borderWidth: 2.5,
        tension: 0.45,
        pointRadius: 0,
        fill: true,
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return "transparent";
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, color + "55");
          gradient.addColorStop(1, color + "00");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    events: [],
    layout: { padding: 0 },
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: { display: false },
      y: { display: false, min: min - range * 0.4, max: max + range * 0.1 },
    },
  };

  return <Line data={chartData} options={options} />;
}