import SideBarLink from "./SideBarLink";
import dashboard from "../../../public/dashboard-square-02.svg";
import logo from "../../../public/Group.svg";
import Patients from "../../../public/user-multiple.svg";
import appointments from "../../../public/calendar-02.svg";
import tasks from "../../../public/note-01.svg";
import chat from "../../../public/bubble-chat.svg";
import reports from "../../../public/analytics-01.svg";
import staff from "../../../public/doctor-02.svg";
import notifications from "../../../public/notification-02.svg";
import Image from "next/image";
import Link from "next/link";
const SideBar = () => {
  return (
    <aside className="hidden md:block lg:p-3 px-1 py-2 col-span-1 md:col-span-2 row-start-1 row-span-12 h-full border-r border-neutral-100">
      <div className=" flex gap-3 flex-col items-center md:flex-row">
        <Image src={logo} className="w-6" alt="" width={100} />
        <Link href={"/"} className=" text-2xl hidden md:inline font-bold">
          Medikia
        </Link>
      </div>
      <h5 className="mt-5 mb-3 text-neutral-500 md:text-lg  text-[12px]  ">
        Main
      </h5>
      <div className=" flex flex-col gap-y-3 md:gap-y-2">
        <SideBarLink title="Dashboard" icon={dashboard} />
        <SideBarLink title="Patients" icon={Patients} />
        <SideBarLink title="Appointments" icon={appointments} />
        <SideBarLink title="Tasks" icon={tasks} />
        <SideBarLink title="Chat" icon={chat} />
      </div>
      <h5 className="mt-5 mb-3 text-neutral-500 md:text-lg  text-[12px]  ">
        Other
      </h5>
      <div className="flex flex-col gap-y-3 md:gap-y-2">
        <SideBarLink title="Reports" icon={reports} />
        <SideBarLink title="Staff" icon={staff} />
        <SideBarLink title="Notifications" icon={notifications} />
      </div>
    </aside>
  );
};

export default SideBar;
