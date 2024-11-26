import React, { useState } from "react";
import { Line  } from "react-chartjs-2";
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
  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      // gradient.addColorStop(0, Utils.CHART_COLORS.blue);
      // gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
      // gradient.addColorStop(1, Utils.CHART_COLORS.red);
    }

    return gradient;
  }
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

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // Days of the month
    datasets: [
      {
        label: "Pain",
        data: data[month],
        borderWidth: 1,
        borderColor: "rgba(59, 130, 246, 1)",
        // backgroundColor: " rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
        pointStyle: "",
        pointRadius: 5,
        // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        // BackgroundColor: function (context) {
        //   const chart = context.chart;
        //   const { ctx, chartArea } = chart;

        //   if (!chartArea) {
        //     // This case happens on initial chart load
        //     return;
        //   }
        //   return getGradient(ctx, chartArea);
        // },
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
          color: "e7e8eb", // Text color (Gray-600)
        },
        grid: {
          color: "", // Grid line color (Gray-300)
        },
      },
      y: {
        title: { display: true, text: "Pain" },
        min: 0,
        max: 10,
        ticks: {
          color: "black", // Text color (Gray-600)
        },
        grid: {
          color: "#e7e8eb", // Grid line color (Gray-300)
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
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default Linechart;
