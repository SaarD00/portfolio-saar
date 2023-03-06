import React from "react";
import Link from "next/link";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="flex justify-center sticky top-0 z-50 items-center md:justify-between h-fit bg-transparent w-full text-white p-6 ">
      <div>
        <h1 className="font-[550] hidden md:inline text-white text-lg">
          SaarDOO
        </h1>
      </div>
      <div className="flex items-center flex-shrink-0  gap-5 md:gap-20 ">
        <Link href={"/"}>
          <p className="hover:tracking-[10px] transition-all duration-150 cursor-pointer border-white/20 py-1 hover:border-b">
            HOME
          </p>
        </Link>
        <Link href={"#projects"}>
          <p className="hover:tracking-[10px] transition-all duration-150 cursor-pointer border-white/20 py-1 hover:border-b">
            PROJECTS
          </p>
        </Link>
        <Link href={"#contact"}>
          <p className="hover:tracking-[10px] transition-all duration-150 cursor-pointer border-white/20 py-1 hover:border-b">
            CONTACT
          </p>
        </Link>
      </div>
      <div>
        <Bars3BottomLeftIcon className=" hidden md:inline w-7" />
      </div>
    </div>
  );
};

export default Header;
