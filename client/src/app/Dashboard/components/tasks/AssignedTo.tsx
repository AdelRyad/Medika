import Image from "next/image";
import avatar from "../../../../../public/unsplash_EZ4TYgXPNWk.png";
import plus from "../../../../../public/plus.svg";
import DropDown from "../DropDown";

const AssignedTo = () => {
  return (
    <div className="overflow-visible">
      <h1 className="text-lg font-semibold">Assigned to</h1>
      <div className="flex justify-between items-center">
        <div className="flex mt-3 mb-3">
          <Image
            className="w-8 h-8 object-cover rounded-full object-top 1"
            src={avatar}
            alt="avatar"
          ></Image>
          <Image
            className="w-8 h-8 object-cover rounded-full object-top -ml-2"
            src={avatar}
            alt="avatar"
          ></Image>
          <Image
            className="w-8 h-8 object-cover rounded-full object-top -ml-2"
            src={avatar}
            alt="avatar"
          ></Image>
          <Image
            className="w-8 h-8 object-cover rounded-full object-top -ml-2 bg-blue-200 p-1.5 cursor-pointer"
            src={plus}
            alt="avatar"
          ></Image>
        </div>
        <div>
          <DropDown
            title="All"
            options={["All", "Assigned"]}
            optionsStyle="-left-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AssignedTo;
