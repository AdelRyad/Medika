"use client";
import Image from "next/image";
import headArrow from "../../../../../public/tableHeadArrow.svg";
import arrow from "../../../../../public/OptionArrow.svg";
import { useEffect, useRef } from "react";
import { cn } from "@/utils/utils";

const TableHeadDropdown = ({
  options,
  title,
  icon,
  style,
  optionsStyle,
}: {
  options: string[];
  title?: string;
  icon?: any;
  style?: string;
  optionsStyle?: string;
}) => {
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      dropdownRef.current.removeAttribute("open");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, []);
  return (
    <details className="relative w-full " ref={dropdownRef}>
      <summary
        className={`flex  justify-center items-center text-sm select-none gap-2  cursor-pointer list-none px-4 py-2 rounded" +
          ${style}
        `}
      >
        {icon && <Image className="filter grayscale w-3" src={icon} alt="" />}
        {title}
        <Image className="w-3 select-none " src={headArrow} alt="" />
      </summary>
      <div
        className={`flex flex-col w-max rounded bg-white text-center text-sm p-2 gap-2 absolute mt-2 border border-neutral-200 ${optionsStyle}`}
      >
        {options.map((option, index) => (
          <button
            key={index}
            className="flex gap-2 hover:bg-neutral-200 py-1 px-2 rounded "
          >
            {option}
            <Image
              className={cn(
                "w-2 select-none",
                option === "Asc" && "rotate-180"
              )}
              src={arrow}
              alt=""
            />
          </button>
        ))}
      </div>
    </details>
  );
};

export default TableHeadDropdown;
