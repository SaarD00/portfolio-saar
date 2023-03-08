import { useRouter } from "next/router";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
function Projects() {
  const router = useRouter();
  return (
    <div className="relative z-0 mx-auto flex min-h-screen max-w-full flex-col items-center scrollbar justify-evenly overflow-hidden text-left md:flex-row">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex scrollbar-track-gray-400/20 scrollbar-thumb-[#155be6]/80 scrollbar-thin w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        <div className="flex h-screen w-screen  flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 object-contain p-20 md:p-44">
          <img
            onClick={() => router.push("https://nglonix.vercel.app")}
            src="https://cdn.sanity.io/images/mrfd4see/production/42eddbcf065bf6ad0444a20ea93533d27dfdabf2-1920x867.png?w=2000&fit=max&auto=format"
            className="mt-28 h-60 rounded-lg object-contain md:object-cover cursor-pointer"
          />
          <div className="max-w-6xl space-y-10 px-0 ">
            <h4 className="text-center text-4xl text-white ">
              <span className=" text-white/80 tracking-[20px] underline decoration-[#F7AB0A]/50">
                NGLONIX
              </span>
            </h4>

            <div className="flex items-center space-x-2 justify-center">
              <TbBrandNextjs className="h-7 w-7 text-white" />
              <IoLogoNodejs className="h-7 w-7 text-lime-400" />
              <SiTailwindcss className="h-7 w-7 text-cyan-400" />
            </div>
            <p className="text-center text-sm md:text-left text-white ">
              A online python compiler which executes python code using child
              process
            </p>
          </div>
        </div>
        <div className="flex h-screen w-screen  flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 object-contain p-20 md:p-44">
          <img
            onClick={() => router.push("https://retio.vercel.app")}
            src="https://cdn.discordapp.com/attachments/1018929979897163868/1082354162798448801/image.png"
            className="mt-28 h-60 scale-125 md:scale-100  rounded-lg object-contain md:object-cover cursor-pointer"
          />
          <div className="max-w-6xl space-y-10 px-0 ">
            <h4 className="text-center text-4xl text-white ">
              <span className=" text-white/80 tracking-[20px] underline decoration-[#F7AB0A]/50">
                RETIO
              </span>
            </h4>

            <div className="flex items-center space-x-2 justify-center">
              <TbBrandNextjs className="h-7 w-7 text-white" />
              <IoLogoNodejs className="h-7 w-7 text-lime-400" />
              <SiTailwindcss className="h-7 w-7 text-cyan-400" />
            </div>
            <p className="text-center text-sm md:text-left text-white ">
              A ecommerce store build using sanity.js next js tailwindcss and
              node js. fully functional cart and order system
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[30%] left-0 h-[350px] w-full -skew-y-12 bg-gradient-to-r from-[#061c48] to-[#450924]" />
    </div>
  );
}

export default Projects;
