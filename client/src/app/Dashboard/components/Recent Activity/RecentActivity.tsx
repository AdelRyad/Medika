import React from "react";
import DropDown from "../DropDown";
import calender from "../../../../../public/calendar-02.svg";
import ActivityCard from "./ActivityCard";

const RecentActivity = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-lg font-semibold">Recent Activity</h1>
        <div>
          <DropDown
            title="Today"
            options={["Last Week", "Last Month"]}
            icon={calender}
          />
        </div>
      </div>
      <div className=" overflow-auto scroll-bar  w-full">
        <ActivityCard
          title="Dr.Ahmed Ali-Uploaded weekly reports"
          desc="Attached 3 files to task"
          task="Ak61"
          date="Now"
        />
        <ActivityCard
          title="Dr.Ahmed Ali-Uploaded weekly reports"
          desc="Attached 3 files to task"
          task="Ak61"
          date="12/12/2022"
        />
        <ActivityCard
          title="Dr.Ahmed Ali-Uploaded weekly reports"
          desc="Attached 3 files to task"
          task="Ak61"
          date="12/12/2022"
        />
        <ActivityCard
          title="Dr.Ahmed Ali-Uploaded weekly reports"
          desc="Attached 3 files to task"
          task="Ak61"
          date="12/12/2022"
        />
      </div>
    </div>
  );
};

export default RecentActivity;
