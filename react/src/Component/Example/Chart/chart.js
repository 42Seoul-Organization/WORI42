import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./chart.scss";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function Chart() {
  return (
    <div className="chart">
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;
