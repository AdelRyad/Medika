"use client";
import React, { useContext, useEffect, useState } from "react";
import { CheckAllContext, CheckAllProvider } from "./CheckAllContext";

function CheckBox() {
  const { checkAll, setCheckAll } = useContext(CheckAllContext);
  const [checked, setChecked] = useState(checkAll);
  useEffect(() => {
    checkAll ? setChecked(checkAll) : setChecked(false);
  }, [checkAll]);
  return (
    <input
      className="w-4 h-4 cursor-pointer"
      aria-label="Select"
      type="checkbox"
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
    ></input>
  );
}

export default CheckBox;
