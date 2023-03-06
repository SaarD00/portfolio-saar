import { useRouter } from "next/router";
import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const Project = () => {
  const router = useRouter();
  return (
    <div className="bg-white/10 max-w-5xl h-screen mx-auto flex rounded-lg ">
      <div className="text-white/50 p-5 flex flex-row">
        <p>Projects</p>
        <div className=" overflow-x-scroll bg-white/20 h-fit rounded-2xl w-full  flex mt-16 gap-16  justify-center p-5">
          <div className="  ">
            <img
              className="w-60 object-fill hover:opacity-80 duration-500 cursor-pointer h-64 rounded-lg "
              onClick={() => router.push("https://nglonix.vercel.app")}
              src="https://cdn.sanity.io/images/mrfd4see/production/42eddbcf065bf6ad0444a20ea93533d27dfdabf2-1920x867.png?w=2000&fit=max&auto=format"
            />
            <p className="text-white/60 ">
              {" "}
              <span
                className="font-semibold text-white text-lg
            "
              >
                Nglonix
              </span>
              : a online python compiler
            </p>
            <h1 className="">
              <span className="text-white">Tech used</span>
              <div className="flex gap-2">
                <SiTailwindcss className="w-7 h-7 text-cyan-500" />
                <TbBrandNextjs className="w-7 h-7 text-white" />
              </div>
            </h1>
          </div>
          <div className="  ">
            <img
              className="w-60 object-contain border border-white/40 p-3  h-64 rounded-2xl"
              src="https://retio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4e47d276.png&w=256&q=100"
            />
          </div>
          <div className="  ">
            <img
              className="w-60 object-cover h-64 rounded-lg"
              src="https://user-images.githubusercontent.com/85481905/210169810-f02f98b6-86fe-4fb8-acb0-20657d6b31bd.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
