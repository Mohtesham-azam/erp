import { Bar, Line } from "react-chartjs-2";
const MyChart = ({ chartData }) => {
  return (
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <h2 style={{ textAlign: "center" }}>Sales</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Sales between 2019-2023(USD)",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div class="col-sm-6">
        <h2 style={{ textAlign: "center" }}>Sales</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Sales between 2019-2023(USD)",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MyChart;
