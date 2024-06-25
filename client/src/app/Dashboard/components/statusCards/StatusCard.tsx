import Image from "next/image";
import React from "react";
import { cn } from "@/utils/utils";
const StatusCard = ({
  icon,
  color,
  status,
  percent,
  positive: positive,
  title,
}: {
  icon: string;
  color: string;
  status: number;
  percent: number;
  positive: boolean;
  title: string;
}) => {
  return (
    <div className="flex flex-col h-max justify-between border p-3 rounded-lg md:w-[49%] lg:w-full border-neutral-100 lg:gap-x-6 w-full ">
      <div className="flex md:mb-6 mb-3 justify-between items-center">
        <p className="text-lg font-medium">{title}</p>
        <Image
          className={
            "p-[10px] md:w-auto md:h-auto w-4 h-4  box-content rounded " + color
          }
          src={icon}
          alt=""
        />
      </div>
      <div className="flex  items-center">
        <p className="md:text-3xl text-xl font-bold">{status}</p>
        <p
          className={cn("md:ml-4 ml-2 text-xl font-medium", {
            "text-green-600 rotate-90": positive,
            "text-orange-600 -rotate-90": !positive,
          })}
        >
          &#171;
        </p>
        <p
          className={cn("ml-1 text-md  font-medium", {
            "text-green-600": positive,
            "text-orange-600": !positive,
          })}
        >
          {percent}%
        </p>
      </div>
      <p className="w-full mt-2 text-sm ">Compared to last week</p>
    </div>
  );
};

export default StatusCard;
