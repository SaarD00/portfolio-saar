import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:astrosaard@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-center text-xl text-white font-semibold">
          Contact me.{" "}
          <span className="underline  decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-fit   flex-col  space-y-2"
          >
            <div className="flex  space-x-2">
              <input
                {...register("name")}
                placeholder="name"
                className="rounded-sm border-b  border-[#242424] bg-slate-400/10 px-3 md:w-fit w-32  py-1 md:px-6 md:py-4 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 "
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="rounded-sm border-b w-44  border-[#242424] bg-slate-400/10 px-6 py-4 md:w-fit text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 "
                type="text"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="rounded-sm border-b  border-[#242424] bg-slate-400/10 px-6 py-4 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 "
              type="text "
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="rounded-sm border-b  border-[#242424] bg-slate-400/10 px-6 py-4 text-gray-400 placeholder-gray-500 outline-none transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 "
            />
            <button
              type="submit"
              className="rounded-md bg-[#1b0a4a] py-5 px-10 text-lg font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
