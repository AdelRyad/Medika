import React from "react";
import Patients from "../../../../../public/user-multiple.svg";
import calender from "../../../../../public/calendar.svg";
import injection from "../../../../../public/injection.svg";
import note from "../../../../../public/note.svg";
import StatusCard from "./StatusCard";
const StatusCards = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between p-0 gap-2   lg:gap-4 overflow-hidden w-full">
      <StatusCard
        title="Patients"
        color="bg-blue-100"
        icon={Patients}
        percent={30}
        positive={true}
        status={500}
        key={1}
      />
      <StatusCard
        title="Appointments"
        color="bg-green-100"
        icon={calender}
        percent={20}
        positive={false}
        status={500}
        key={1}
      />
      <StatusCard
        title="Diagnoses"
        color="bg-red-100"
        icon={injection}
        percent={50}
        positive={true}
        status={20500}
        key={1}
      />
      <StatusCard
        title="Tasks"
        color="bg-orange-100"
        icon={note}
        percent={50}
        positive={false}
        status={1500}
        key={1}
      />
    </div>
  );
};

export default StatusCards;
