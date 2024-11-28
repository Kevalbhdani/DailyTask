import React, { useState } from "react";
import { Line  } from "react-chartjs-2";
import { Utils } from "chart.js";
// import Utils from "../CommonComponet";

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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Linechart() {
  

  const [month, setMonth] = useState("November");
 
  const data = {
    October: [
      1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 8, 5, 4, 3, 4, 4, 3, 2, 3, 4, 6, 5, 3, 2, 4,
      5, 4, 5, 4, 5,
    ],

    November: [
      3, 4, 3, 5, 8, 6, 7, 5, 4, 3, 4, 5, 2, 1, 2, 4, 5, 7, 6, 4, 3, 5, 7, 8, 6,
      4, 3, 5, 6, 4,
    ],
  };

  const   chartData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // Days of the month
    datasets: [
      {
        label: "Pain",
        data: data[month],
        borderWidth: 1,
        borderColor: "rgba(59, 130, 246, 1)",
        fill:true,
        tension: 0,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
        pointStyle: "",
        pointRadius: 5,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(67, 121, 238, 0.5)");
          gradient.addColorStop(1, "rgba(67, 121, 238, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: { enabled: true },
    },

    scales: {
      x: {
        title: { display: true, text: "Days" },
        ticks: {
          color: "e7e8eb",
        },
        grid: {
          color: "",
        },
      },
      y: {
        title: { display: true, text: "Pain" },
        min: 0,
        max: 10,
        ticks: {
          color: "black", 
        },
        grid: {
          color: "#e7e8eb", 
        },
      },
    },
  };
 
  return (
    <div>
      <div className=" Title py-2  flex flex-col">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-AlbertSans font-normal text-xl ">Patient Pain</h1>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className=" p-3 text-sm  bg-whiteLight rounded-xl"
          >
            <option value="October">October</option>
            <option value="November">November</option>
          </select>
        </div>
        <Line data={chartData} options={options}  />
      </div>
    </div>
  );
}

export default Linechart;
