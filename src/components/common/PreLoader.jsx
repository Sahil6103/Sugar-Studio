import React from "react";
import { LOGO } from "../../assets";

export const PreLoader = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <img src={LOGO} alt="" className="w-34" />
        <div className="boxes relative w-10 h-10 animate-boxSpin">
          <div className="box top-left absolute w-4 h-4 bg-black"></div>
          <div className="box top-right absolute w-4 h-4 bg-black"></div>
          <div className="box bottom-left absolute w-4 h-4 bg-black"></div>
          <div className="box bottom-right absolute w-4 h-4 bg-black"></div>
        </div>
      </div>
    </section>
  );
};
