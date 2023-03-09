import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/router";
import Project from "../components/Project";
import ContactMe from "../components/Contact";
import { useState } from "react";
const Home: NextPage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(0);
  const sectionIds = ["hero", "projects"];

  const handleNextSection = () => {
    const nextIndex = (activeSection + 1) % sectionIds.length;
    const nextSectionId = sectionIds[nextIndex];
    router.push(`#${nextSectionId}`);
    setActiveSection(nextIndex);
  };

  const handlePrevSection = () => {
    const nextIndex = (activeSection - 1) % sectionIds.length;
    const nextSectionId = sectionIds[nextIndex];
    router.push(`#${nextSectionId}`);
    setActiveSection(nextIndex);
  };

  return (
    <div className=" bg-gradient-to-tr from-[#010f2a] to-[#2d0523] min-h-scr overflow-hidden via-[#170723]">
      <Head>
        <title>SaarDOO - homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Large Card */}
      <section id="hero">
        <div className="flex text-white  scrollbar justify-center md:justify-between p-36">
          <div>
            <div className="border-l-4 group space-y-3 px-5">
              <h1 className="font-bold text-5xl group-hover:text-white/60 transition-all duration-700 cursor-pointer">
                Saarthak Dutta
              </h1>
              <div className="group-hover:scale-100 text-white/10 group-hover:text-white group    h-0 md:group-hover:h-64 group-hover:h-[28rem] scale-0 transition-all  duration-700 ">
                <h1 className="text-3xl font-semibold border-b border-white/40 py-2 w-fit">
                  About Me
                </h1>
                <div className="p-2  ">
                  <h2>The name's Saarthak Dutta | also known as SaarDOO</h2>
                  <h2>
                    I am a 14 year old full stack developer knowing various web
                    languagues
                  </h2>
                  <h3 className="mt-2"> js, html, css with frameworks like</h3>
                  <h3 className="mt-2">
                    {" "}
                    react, next js, tailwind css ( css library ),{" "}
                  </h3>
                  <h4 className="mt-2">
                    I also know machine learning and data science
                  </h4>
                  <h5 className="mt-2">
                    with the language python and packages numpy, tensorflow,
                    pandas, etc.
                  </h5>
                </div>
              </div>
              <p className="text-white/40">Full Stack / data scientist</p>
            </div>
          </div>
          <div>
            <div className=" text-3xl font-light hidden md:flex items-center border-b border-white/40 py-5 ">
              <span className="text-4xl font-bold mb-2">1</span>
              /03
              <div className="flex ml-10 gap-5 ">
                <ChevronLeftIcon
                  onClick={handlePrevSection}
                  className=" w-5 font-extralight text-white/40"
                />
                <p>I</p>
                <ChevronRightIcon
                  onClick={handleNextSection}
                  className="w-5 font-extralight text-white/40"
                />
              </div>
            </div>
            <div className="p-3 flex gap-5">
              <div
                onClick={() => {
                  router.push("https://www.instagram.com/saardoo/");
                }}
              >
                <FaInstagram className="h-5 w-5 object-contain cursor-pointer" />
              </div>
              <div
                onClick={() => {
                  router.push("https://github.com/SaarD00");
                }}
              >
                <AiFillGithub className="h-5 w-5 object-contain cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="scrollbar" id="projects">
        <Project />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
