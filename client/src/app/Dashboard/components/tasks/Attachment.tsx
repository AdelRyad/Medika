import Image from "next/image";
import excel from "../../../../../public/excel.svg";
const Attachment = ({ attachment }: { attachment: string }) => {
  return (
    <div className="pr-1">
      <h1 className="text-lg font-semibold">Attachments</h1>
      <div className="flex items-center gap-5 flex-wrap">
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
            <p className="font-semibold md:text-sm sm:text-[12px]">
              Operation Info.xls
            </p>
            <p className="text-[10px] sm:text-sm">1.2MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attachment;
