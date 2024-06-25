"use client";
import React, { useContext } from "react";
import { CheckAllContext, CheckAllProvider } from "./CheckAllContext";

const CheckAllBox = () => {
  const { checkAll, setCheckAll } = useContext(CheckAllContext);

  return (
    <input
      className="h-4 w-4 cursor-pointer"
      aria-label="Select"
      type="checkbox"
      onChange={() => setCheckAll(!checkAll)}
      checked={checkAll}
    ></input>
  );
};

export default CheckAllBox;
