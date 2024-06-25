"use client";
import CheckAllBox from "./CheckAllBox";
import { CheckAllProvider } from "./CheckAllContext";
import TableHeadDropdown from "./TableHeadDrobdown";
import TableRow from "./TableRow";

export type patient = {
  name: string;
  time: string;
  type: string;
  status: "On Hold" | "Completed" | "Cancelled";
  doctor: string;
};

const Table = ({ data }: { data: any[] }) => {
  return (
    <CheckAllProvider>
      <table className="w-full  overflow-x-scroll">
        <thead className="bg-neutral-50 relative rounded-t-xl">
          <tr>
            <th scope="col" className="relative p-2">
              <CheckAllBox />
            </th>
            <th>
              <TableHeadDropdown title="Patient" options={["Asc", "Desc"]} />
            </th>
            <th>
              <TableHeadDropdown title="Time" options={["Asc", "Desc"]} />
            </th>
            <th>
              <TableHeadDropdown title="Type" options={["Asc", "Desc"]} />
            </th>
            <th>
              <TableHeadDropdown title="Status" options={["Asc", "Desc"]} />
            </th>
            <th>
              <TableHeadDropdown title="Doctor" options={["Asc", "Desc"]} />
            </th>
            <th aria-hidden="true"></th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll h-full">
          {data.map((item, index) => (
            <TableRow
              key={index}
              name={item.name}
              time={item.time}
              type={item.type}
              status={item.status}
              doctor={"Omar "}
            />
          ))}
        </tbody>
      </table>
    </CheckAllProvider>
  );
};
export default Table;
