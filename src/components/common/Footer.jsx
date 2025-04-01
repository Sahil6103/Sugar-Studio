import React, { useEffect } from "react";
import {
  RiArrowRightUpLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" bg-black text-white px-3 py-10 md:px-10 lg:px-14">
      <div className="connet">
        <Link
          to="/contact-us"
          className="group w-fit font-heading uppercase flex justify-start items-end gap-2 text-3xl md:text-4xl tracking-wide">
          Let's Talk{" "}
          <RiArrowRightUpLine
            size={32}
            className="group-hover:mb-1 group-hover:ms-1 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="link text-[#ffffff70] mt-6 text-xs flex flex-col md:flex-row gap-3 md:gap-5 font-paragraph font-semibold tracking-wider">
        <Link to="/" className="hover:text-white transition-all duration-500">
          Home
        </Link>
        <Link
          to="/about-us"
          className="hover:text-white transition-all duration-500">
          About Us
        </Link>
        <Link className="hover:text-white transition-all duration-500">
          Global Projects
        </Link>
        <Link
          to="/gallery"
          className="hover:text-white transition-all duration-500">
          Gallery
        </Link>
        <Link
          to="/contact-us"
          className="hover:text-white transition-all duration-500">
          Contact Us
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="social flex justify-center lg:justify-start gap-3">
          <Link className="">
            <RiInstagramLine
              size={20}
              className="text-[#ffffff70] hover:text-white duration-500"
            />
          </Link>
          <Link className="hover:text-white duration-500">
            <RiFacebookFill
              size={20}
              className="text-[#ffffff70] hover:text-white duration-500"
            />
          </Link>
          <Link className="hover:text-white duration-500">
            <RiTwitterXLine
              size={20}
              className="text-[#ffffff70] hover:text-white duration-500"
            />
          </Link>
        </div>
      </div>
      <div className="privacy mt-5 flex flex-col md:flex-row justify-between gap-2 md:gap-3">
        <span className="text-[10px] text-[#ffffff70] w-[75%] md:w-[60%] lg:w-[40%] xl:w-[50%] font-paragraph tracking-wider">
          Please note that all photos, designs, and materials on this site are
          the intellectual property of <b className="uppercase">Sugar Studio</b>
          . Any use, reproduction, or distribution without prior permission is
          strictly prohibited.
        </span>
        <span className="font-paragraph font-semibold tracking-wider uppercase text-[10px] text-[#ffffff70]">
          © 2025 Sugar Studio. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
