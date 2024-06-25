import Image from "next/image";
import avatar from "../../../../../public/unsplash_EZ4TYgXPNWk.png";
import options from "../../../../../public/more-vertical.svg";
import { cn } from "@/utils/utils";
import DropDown from "../DropDown";
import CheckBox from "./CheckBox";
const TableRow = ({
  name,
  time,
  type,
  status,
  doctor,
}: {
  name: string;
  time: string;
  type: string;
  status: string;
  doctor: string;
}) => {
  return (
    <tr className="mt-4">
      <td className="text-center ">
        <CheckBox />
      </td>
      <td>
        <div className="flex items-center  ml-3">
          <Image
            src={avatar}
            className="w-8 h-8  rounded-full object-cover "
            alt={"Profile Image"}
          ></Image>
          <p className="md:ml-3 ml-1">{name}</p>
        </div>
      </td>
      <td>1{time}</td>
      <td>{type}</td>
      <td>
        <span
          className={cn("rounded-full text-[12px]  px-2 py-1", {
            "bg-green-100 text-green-600": status === "Completed",
            "bg-red-100 text-red-600": status === "Canceled",
            "bg-orange-100 text-orange-600": status === "On Hold",
          })}
        >
          {status}
        </span>
      </td>
      <td>{doctor}</td>
      <td>
        <DropDown
          showArrow={false}
          icon={options}
          options={["Edit", "Delete"]}
          optionsStyle="-left-full"
          iconStyle="w-5 h-5"
          style="px-2 border-none"
        />
      </td>
    </tr>
  );
};

export default TableRow;
