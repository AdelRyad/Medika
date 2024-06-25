import axios from "axios";
import calender from "../../../../../public/calendar-02.svg";
import sorting from "../../../../../public/sorting-01.svg";
import DropDown from "../DropDown";
import Button from "./Button";
import Table, { patient } from "./Table";

const Appointments = async () => {
  const res = await axios.get(`http://localhost:5000/api/patients/:0`);
  const data = res.data;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between w-full items-center">
        <h1 className="md:text-2xl text-xl font-semibold">Appointments</h1>
        <div className="flex gap-2">
          <DropDown
            title="Most Recent"
            options={["Last Week", "Last Month"]}
            icon={sorting}
            style="text-[0px] md:text-base"
          />
          <DropDown
            title="12May,24"
            options={["12May,24", "12May,24", "12May,24"]}
            icon={calender}
            style="text-[0px] md:text-base"
          />
        </div>
      </div>
      <div className="flex overflow-auto items-center mt-4 gap-3 w-full scroll-bar-hidden ">
        <Button title="All" px={4} />
        <Button title="Urgent" />
        <Button title="Follow-Up" />
        <Button title="New Patient" />
        <Button title="Completed" />
      </div>
      <div className="mt-4 w-full">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Appointments;
