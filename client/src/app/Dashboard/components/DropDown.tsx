"use client";
import Image from "next/image";
import arrow from "../../../../public/Vector.svg";
import { useEffect, useRef } from "react";

const DropDown = ({
  options,
  title,
  icon,
  style,
  optionsStyle,
  showArrow = true,
  iconStyle,
}: {
  options: string[];
  title?: string;
  icon?: any;
  style?: string;
  optionsStyle?: string;
  showArrow?: boolean;
  iconStyle?: string;
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
    <details className="relative w-fit" ref={dropdownRef}>
      <summary
        className={` ${style} flex select-none gap-2 border border-neutral-100 cursor-pointer list-none px-4 py-2 rounded-lg " +
         
        `}
      >
        {icon && (
          <Image
            className={`${iconStyle} filter grayscale w-3 `}
            src={icon}
            alt=""
            width={100}
          />
        )}
        {title}
        {showArrow && (
          <Image className="w-3 select-none " src={arrow} alt="" width={10} />
        )}
      </summary>
      <div
        className={`${optionsStyle} z-10 flex flex-col w-max rounded bg-white text-center text-sm p-2 gap-2 absolute mt-2 border border-neutral-200 `}
      >
        {options.map((option, index) => (
          <button
            key={index}
            className="hover:bg-neutral-200 py-1 px-2 rounded"
          >
            {option}
          </button>
        ))}
      </div>
    </details>
  );
};

export default DropDown;
