"use client";
import { cn } from "@/utils/utils";
import Description from "./Description";
import Attachment from "./Attachment";
import AssignedTo from "./AssignedTo";
import React, { useState } from "react";
import arrow from "../../../../../public/Vector.svg";
import Image from "next/image";

const DropDown = ({
  description,
  attachment,
}: {
  description: string;
  attachment: [{ filename: string; size: number }];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <div
          className={cn(
            "flex gap-2 border w-fit border-neutral-100 cursor-pointer list-none px-3 py-3 rounded ",
            {
              "rotate-180": open,
            }
          )}
        >
          <Image className=" select-none" src={arrow} alt="" width={10} />
        </div>
      </div>
      <div
        className={cn("flex flex-col w-full  h-0 overflow-hidden", {
          "h-full": open,
        })}
      >
        <div className="flex flex-col gap-4 overflow-auto">
          <Description description={description} />
          <Attachment attachment={attachment} />
          <AssignedTo />
        </div>
      </div>
    </>
  );
};

export default DropDown;
