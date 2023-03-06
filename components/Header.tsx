import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-fit bg-transparent w-full text-white p-6 ">
      <div>
        <h1 className="font-[550] text-white text-lg">SaarDOO</h1>
      </div>
      <div className="flex items-center flex-shrink-0  gap-20">
        <div>
          <p className="hover:tracking-[10px] transition-all duration-150 cursor-pointer border-white/20 py-1 hover:border-b">
            HOME
          </p>
        </div>
        <div>
          <p className="hover:tracking-[10px] transition-all duration-150 cursor-pointer border-white/20 py-1 hover:border-b">
            PROJECTS
          </p>
        </div>
        <div>
          <p className="hover:tracking-[10px] transition-all duration-150 cursor-pointer border-white/20 py-1 hover:border-b">
            CONTACT
          </p>
        </div>
      </div>
      <div>
        <Bars3BottomLeftIcon className=" w-7" />
      </div>
    </div>
  );
};

export default Header;
