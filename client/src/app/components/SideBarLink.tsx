"use client";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarLink = ({ title, icon }: { title: string; icon: string }) => {
  const pathname = usePathname();
  const isActive = pathname === `/${title}`;

  return (
    <Link
      href={`/${title}`}
      className={cn("flex gap-2 p-1 sm:p-3 rounded-xl cursor-pointer", {
        "hover:bg-neutral-100": !isActive,
        "bg-blue-100": isActive,
      })}
    >
      <div
        className={cn("flex gap-2 text-xl", {
          " text-neutral-800": !isActive,
          " text-blue-600": isActive,
        })}
      >
        <Image
          className={cn("w-5", { " filter grayscale": !isActive })}
          src={icon}
          alt={title}
          width={100}
        />
        <p className=" hidden md:block text-sm lg:text-lg text-center">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default SideBarLink;
