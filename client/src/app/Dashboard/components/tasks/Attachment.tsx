import Image from "next/image";
import excel from "../../../../../public/excel.svg";
const Attachment = ({
  attachment,
}: {
  attachment: [{ filename: string; size: number }];
}) => {
  return (
    <div className="pr-1">
      <h1 className="text-lg font-semibold">Attachments</h1>
      <div className="flex items-center gap-5 flex-wrap">
        {attachment.map((attachment: any) => (
          <div className="flex gap-2" key={attachment.size}>
            <Image className="w-8" src={excel} alt="excel"></Image>
            <div className="flex flex-col">
              <p className="font-semibold  md:text-sm text-[12px]">
                {attachment.filename}
              </p>
              <p className="text-[10px] sm:text-sm">
                {(attachment.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachment;
