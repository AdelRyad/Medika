
import React from "react";
import mail from "../../../../../public/mail-01.svg";
import { cn } from "@/utils/utils";
import calender from "../../../../../public/calendar-02.svg";
import Image from "next/image";
import TaskDropDown from "./TaskDropDown";

export type task = {
  title: string;
  date: string;
  time: string;
  status: string;
  description: string;
  attachment: [{ filename: string; size: number }];
  _id?: string;
};
const Task = ({ title, date, time, status, description, attachment }: task) => {
  const positive = true;
  return (
    <div className=" flex pr-2 mb-4 gap-2 items-center justify-between  flex-wrap h-fit overflow-hidden">
      <div className="flex gap-2 h-full ">
        <Image
          className="bg-blue-100 p-2 box-content rounded w-6 h-6"
          src={mail}
          alt="mail"
        ></Image>
        <div className="flex flex-col justify-center ">
          <div className="flex items-center mb-0.5 flex-wrap ">
            <h1 className="text-md min-w-max font-semibold ">{title}</h1>
            <div
              className={cn(
                "flex items-center justify-center px-2 py-0.5 ml-2 rounded-full",
                {
                  "text-green-600 bg-green-100": status === "Completed",
                  "text-orange-600 bg-orange-100": status === "On Hold",
                  "text-red-600 bg-red-100": status === "Cancelled",
                }
              )}
            >
              <p className="ml-1 text-[12px] font-semibold max-w-fit  min-w-max">
                {status}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1  text-[12px] md:text-[12px]">
            <p className="min-w-max">
              {date} &#8226; {time}
            </p>
            <p className="min-w-max flex gap-1 items-center">
              <Image
                className="filter grayscale w-3  "
                src={calender}
                alt="calender"
              ></Image>
              Due:{date}
            </p>
          </div>
        </div>
      </div>

      <TaskDropDown description={description} attachment={attachment} />
    </div>
  );
};

export default Task;
