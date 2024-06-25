import Image from "next/image";
import React from "react";
import arrow from "../../../../public/Vector.svg";
import Task from "./Task";
import DropDown from "../DropDown";
import axios from "axios";
import { task } from "@/app/Dashboard/components/tasks/Task";
const Tasks = async () => {
  const res = await axios.get("http://localhost:5000/api/tasks");
  const data = res.data;
  return (
    <div className="flex flex-col w-full h-full gap-4 ">
      <div className="flex justify-between w-full items-center h-fit ">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <DropDown title="Today" options={["Last Week", "Last Month"]} />
      </div>
      <div className="overflow-auto scroll-bar">
        {data.map((task: task) => (
          <Task
            key={task._id}
            title={task.title}
            date={task.date}
            time={task.time}
            status={task.status}
            description={task.description}
            attachment={task.attachment}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
