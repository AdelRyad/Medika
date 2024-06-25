"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { cn } from "@/utils/utils";
import DropDown from "../DropDown";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});
const data: any = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Patients",
      data: [55, 59, 80, 81, 56, 56, 56, 56, 56, 56, 50, 30, 10],
      fill: false,
      borderColor: "#0756FF",
      tension: 0.1,
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverBorderWidth: 5,
      pointHoverBackgroundColor: "#FFF",
      pointHoverBorderColor: "#0756FF",
      pointHoverRadius: 15,
      hitRadius: 10,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
const LineChart = ({ positive }: { positive: boolean }) => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-between w-full">
          <h1 className="text-2xl font-semibold flex-1">Patients</h1>
          <DropDown title="Most Recent" options={["Last Week", "Last Month"]} />
        </div>
        <p className="w-full text-sm mt-3">Total Patients</p>
        <p className="mt-1 font-semibold text-3xl">1500</p>
        <div
          className={cn(
            "flex items-center select-none justify-center px-2  ml-2 mt-1 rounded-full",
            {
              "text-green-600 bg-green-100": positive,
              "text-orange-600": !positive,
            }
          )}
        >
          <p
            className={cn("text-xl font-medium", {
              "text-green-600 rotate-90": positive,
              "text-orange-600 -rotate-90": !positive,
            })}
          >
            &#171;
          </p>
          <p className="ml-1 text-sm  font-medium">+10%</p>
        </div>
      </div>
      <div className="w-full h-[70%] p-3">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
export default LineChart;
