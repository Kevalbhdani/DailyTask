import React from 'react'
import { Line } from "react-chartjs-2";
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
function Linechart(props) {
   const data = {
     labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12",
       "13",
       "14",
       "15",
       "16",
       "17",
       "18",
       "19",
       "20",
       "21",
       "22",
       "23",
       "24",
       "25",
       "26",
       "27",
       "28",
       "29",
       "30",
     ],
     datasets: [
       {
         label: "Sales",
         data: [
           1, 2, 4, 3, 5, 6, 2, 3, 6, 4, 8, 7, 6, 4, 3, 4, 3, 2, 1, 3, 6, 8, 7,
           5, 3, 4, 5, 6, 4, 5,
         ],
         backgroundColor: "rgba(59, 130, 246, 0.2)", // Blue with transparency
         borderColor: "rgba(59, 130, 246, 1)", // Solid blue
         pointBackgroundColor: "rgba(59, 130, 246, 1)", // Blue points
         pointBorderColor: "#fff", // White border for points
         tension: 0.4, // Smooth curves,
         pointStyle: "rectRounded",
       },
     ],
   };
     const options = {
       responsive: true,
       plugins: {
         legend: {
           position: "bottom",
           labels: {
             color: "#374151", // Text color (Gray-700)
             font: "14px",
           },
         },
       },
       scales: {
         x: {
           title: {
             display: true,
             text: "Days",
             color: "#6B7280", // Gray-500
             font: {
               size: 14,
             },
           },

           ticks: {
             color: "black", // Text color (Gray-600)
           },
           grid: {
             color: "#E5E7EB", // Grid line color (Gray-300)
           },
         },
         y: {
           title: {
             display: true,
             text: "Pian",
             color: "#6B7280", // Gray-500
             font: {
               size: 14,
               
             },
           },
           ticks: {
             color: "#4B5563", // Text color (Gray-600)
           },
           text: "Pain",
           grid: {
             color: "#E5E7EB", // Grid line color (Gray-300)
           },

           beginAtZero: true,
         },
       },
     };
  return (
    <div className="Title py-2  flex flex-col">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-AlbertSans font-normal text-xl ">Patient Pain</h1>
        <button>
          <select
            id="lang"
            className="w-full  p-3 text-sm  bg-whiteLight rounded-xl  "
          >
            <option value="">October</option>
            <option value="">November</option>
          </select>
        </button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default Linechart