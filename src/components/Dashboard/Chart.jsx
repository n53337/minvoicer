import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Revenue Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Dummy Data
const data = {
  labels,
  datasets: [
    {
      label: "Paid Invoices",
      data: [2, 0, 1, 4, 9, 1, 3, 5, 7, 3, 3, 0],
      borderColor: "rgba(44, 44, 44, 1)",
      backgroundColor: "rgba(44, 44, 44, 0.4)",
    },
  ],
  maintainAspectRatio: false,
};

const Chart = () => {
  return (
    <div className="w-2/3">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
