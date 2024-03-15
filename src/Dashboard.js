import Card from "./Card";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import MyChart from "./MyChart";

Chart.register(CategoryScale);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Sales ",
        data: Data.map((data) => data.sales),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Card />
      <MyChart chartData={chartData} />
    </div>
  );
};

export default Dashboard;
