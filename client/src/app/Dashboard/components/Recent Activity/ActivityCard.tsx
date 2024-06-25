import Image from "next/image";
import chart from "../../../../../public/analytics-01.svg";
import excel from "../../../../../public/excel.svg";

const ActivityCard = ({
  title,
  desc,
  task,
  date,
}: {
  title: string;
  desc: string;
  date: string;
  task: string;
}) => {
  return (
    <div className="flex flex-col  mt-3">
      <div className="flex flex-wrap">
        <Image
          className="w-6 bg-blue-100 p-2 box-content rounded-full"
          src={chart}
          alt="excel"
        ></Image>
        <div className="flex ml-2 flex-col ">
          <h1 className="font-semibold md:text-base text-sm w-full">{title}</h1>
          <div className="flex gap-2">
            <p className="text-[12px]">{desc}</p>
            <div className="flex items-center gap-1">
              <Image className="w-4 ml-2" src={chart} alt="excel"></Image>
              <p className="text-blue-600 text-[12px]">{task}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-5 gap-y-2 flex-wrap border-neutral-100 border-l mt-2 ml-6 py-2 px-3">
        <div className="flex gap-2">
          <Image className="w-8" src={excel} alt="excel"></Image>
          <div className="flex flex-col">
            <p className="font-semibold  md:text-sm text-[12px]">
              Operation Info.xls
            </p>
            <p className="text-[10px] sm:text-sm">1.2MB</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image className="w-8" src={excel} alt="excel"></Image>
          <div className="flex flex-col">
            <p className="font-semibold  md:text-sm text-[12px]">
              Operation Info.xls
            </p>
            <p className="text-[10px] sm:text-sm">1.2MB</p>
          </div>
        </div>
        <p className="w-full text-[14px] text-neutral-400 ml-2">{date}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
