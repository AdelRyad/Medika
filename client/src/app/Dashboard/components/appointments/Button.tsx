import React from "react";

const Button = ({
  title,
  px = 3,
  py = 2,
}: {
  title: string;
  px?: number;
  py?: number;
}) => {
  return (
    <button
      className={`px-${px} py-${py} text-nowrap border border-neutral-200 rounded-full text-sm md:text-base font-medium  bg-neutral-50 `}
    >
      {title}
    </button>
  );
};

export default Button;
