import React, { forwardRef } from "react";

export const Statistics = forwardRef(({ num, text }, ref) => {
  return (
    // <div className="flex flex-col justify-center items-center gap-2 w-48 h-48 bg-light-gray rounded-full outline-2 outline-dashed outline-light-gray outline-offset-4">
    //   <span className="text-3xl font-heading tracking-wider">{num}</span>
    //   <span className="font-paragraph">{text}</span>
    // </div>

    <div
      ref={ref}
      className="group relative flex justify-center items-center w-52 2xl:w-56 h-52 2xl:h-56">
      {/* Spinning Dashed Border */}
      <div className="absolute inset-0 rounded-full border-[3.5px] border-light-gray border-dotted animate-[spin_30s_linear_infinite] group-hover:border-black transition-all duration-500"></div>

      {/* Static Content */}
      <div className="flex flex-col justify-center items-center gap-2 w-48 2xl:w-52 h-48 2xl:h-52 bg-light-gray rounded-full">
        <span className="text-3xl font-heading tracking-wider">{num}</span>
        <span className="font-paragraph text-sm">{text}</span>
      </div>
    </div>
  );
});
