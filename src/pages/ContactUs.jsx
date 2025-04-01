import React, { useEffect } from "react";
import { ContactForm } from "../components/contact/ContactForm";
import { ReachOut } from "../components/contact/ReachOut";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-3 md:px-10 lg:px-20">
      {/* <div className="content mt-8 flex flex-col md:flex-row md:justify-between items-start lg:gap-24">
        <div className="heading flex items-start gap-3 mt-5 w-full md:w-1/2 lg:w-2/5">
          <div className="hidden md:block w-10 h-[3px] mt-3.5 lg:mt-3.5 bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl lg:text-3xl tracking-wide ">
            Let’s design the future, together.
          </h1>
        </div>
        <form
          action=""
          className="my-10 lg:my-5 space-y-10 w-full md:w-1/2 lg:w-3/5 tracking-wide">
          <div className="input flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="text-xs lg:text-sm font-heading">
              Fullname
            </label>
            <input
              type="text"
              placeholder="e.g. Robert Downey Jr."
              className="border-b-2 border-light-gray text-xs lg:text-sm text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <div className="input flex flex-col gap-1">
            <label htmlFor="email" className="text-xs lg:text-sm font-heading">
              Email
            </label>
            <input
              type="text"
              placeholder="e.g. robert@jr.com"
              className="border-b-2 border-light-gray text-xs lg:text-sm text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <div className="input flex flex-col gap-1">
            <label htmlFor="mobile" className="text-xs lg:text-sm font-heading">
              Mobile No.
            </label>
            <input
              type="text"
              placeholder="e.g. +1234567890"
              className="border-b-2 border-light-gray text-xs lg:text-sm text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <div className="input flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="text-xs lg:text-sm font-heading">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us what you need"
              className="border-b-2 border-light-gray text-xs lg:text-sm text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <button className="font-heading uppercase tracking-wider text-xs lg:text-sm md:mt-3 bg-black hover:bg-light-gray  text-white hover:text-black px-6 py-2.5 transition-all duration-500">
            Send Message
          </button>
        </form>
      </div> */}
      <ContactForm />
      {/* <div className="content lg:my-14 flex flex-col md:flex-row md:justify-between items-start lg:gap-24">
        <div className="heading flex items-start gap-3 mt-5 w-full md:w-1/2 lg:w-2/5">
          <div className="hidden md:block w-10 h-[3px] mt-3.5 lg:mt-3.5 bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl lg:text-3xl tracking-wide ">
            Reach Out to Us.
          </h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col md:flex-row md:justify-start md:items-start gap-6 lg:gap-14 xl:gap-28 my-5">
          <div className="flex flex-col ">
            <span className="font-heading text-xs font-semibold tracking-wider text-[#000000]">
              Mobile / Whatsapp :
            </span>
            <p className="font-paragraph text-sm tracking-wide">+1234567890</p>
          </div>
          <div className="flex flex-col ">
            <span className="font-heading text-xs font-semibold tracking-wider text-[#000000]">
              Inquiries :
            </span>
            <p className="font-paragraph text-sm tracking-wide">
              info@sugar.com
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="font-heading text-xs font-semibold tracking-wider text-[#000000]">
              Location :
            </span>
            <div className="adress flex flex-col font-paragraph text-sm tracking-wide">
              <span>Sugar Studio</span>
              <span>23 Lumdiengjri Street, Laitumkhrah,</span>
              <span>Shillong, Meghalaya - 793003, India</span>
            </div>
          </div>
        </div>
      </div> */}
      <ReachOut />
    </section>
  );
};
