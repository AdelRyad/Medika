"use client";
import { usePathname } from "next/navigation";
import React from "react";

function PageTitle() {
  const pathname = usePathname();
  return (
    <h1 className="lg:text-2xl md:text-xl  text-lg font-bold">
      {pathname.slice(1)}
    </h1>
  );
}

export default PageTitle;
