import Image from "next/image";
import chat from "../../../public/bubble-chat.svg";
import notification from "../../../public/notification-02.svg";
import avatar from "../../../public/unsplash_EZ4TYgXPNWk.png";
import DropDown from "../Dashboard/components/DropDown";
import PageTitle from "./PageTitle";

const NavBar = () => {
  return (
    <div className="flex   h-3/4 justify-between items-center md:p-5 p-2 row-span-1 col-start-1 md:col-start-3 col-span-10 md:col-span-9 border-b border-neutral-100">
      <PageTitle />
      <div className="  md:w-3/4 flex items-center justify-end">
        <input
          className=" rounded-full border max-h-10 px-4 py-1 max-w-[300px] w-1/2 focus:outline-none"
          type="search"
          name="search"
          title="search"
          placeholder="Search"
        />
        <div className="md:ml-6 ml-3 flex md:gap-4 gap-2 border-r border-neutral-100 pr-4">
          <Image
            className="filter grayscale cursor-pointer w-5 lg:w-8 md:w-6"
            src={chat}
            alt=""
            width={100}
          />
          <Image
            className="filter grayscale cursor-pointer w-5 lg:w-8 md:w-6"
            src={notification}
            alt=""
            width={100}
          />
        </div>
        <div className="flex ml-3 items-center gap-2">
          <Image
            className=" rounded-full cursor-pointer object-cover object-top w-8 h-8 md:w-[45px] md:h-[45px] "
            src={avatar}
            alt=""
            width={100}
          ></Image>
          <div className="lg:flex hidden flex-col flex-wrap md:ml-3  items-center">
            <div className="flex items-center">
              <p className="md:font-size[14px] text-[12px] font-semibold ">
                Omar Ryad
              </p>
              <p className=" md:text-[14px] text-[9px] ml-2 px-[10px] md:py-1  bg-green-200 text-green-900 rounded-full">
                Doctor
              </p>
            </div>
            <p className="md:text-[14px] text-[10px] ">Omarryad637@gmail.com</p>
          </div>
          <DropDown
            options={["Profile", "Logout"]}
            style="px-3 py-3 hidden md:block border-none"
            optionsStyle=" -left-full -translate-x-1/2 md:translate-x-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
