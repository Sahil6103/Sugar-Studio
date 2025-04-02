import { RiCalendar2Line, RiMapPinLine } from "@remixicon/react";
import React, { useRef } from "react";

export const ProjectDetail = ({ city }) => {
  const text = `Our Excellence in ${city}`;

  const sectionRef = useRef();
  const lineRef = useRef();
  const textRef = useRef([]);
  return (
    <>
      <section ref={sectionRef} className="px-3 md:px-10 lg:px-20 my-14">
        {/* heading */}
        <div className="heading flex items-start gap-3 mt-5 w-full md:w-1/2 lg:w-2/5">
          <div
            ref={lineRef}
            className="hidden md:block w-10 h-[3px] mt-3.5 lg:mt-3.5 bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl tracking-wide flex flex-wrap overflow-hidden">
            {text.split(" ").map((word, i) => (
              <span key={i} className="mr-2 flex overflow-hidden">
                {word.split("").map((char, j) => (
                  <span
                    key={j}
                    ref={(el) => {
                      if (el) textRef.current.push(el); // ✅ Assign only if element exists
                    }}
                    className="inline-block ">
                    {char}
                  </span>
                ))}
                {/* ✅ Adds space between words */}
              </span>
            ))}
          </h1>
        </div>

        {/* detail */}
        <div className="flex flex-col gap-5 my-14">
          <div className="flex justify-start items-center gap-5">
            <RiMapPinLine size={18} />
            <div className="flex flex-col">
              <span className="font-heading tracking-wide text-sm">
                Location :
              </span>
              <span className="font-paragraph text-sm">Chicago, USA</span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5">
            <RiCalendar2Line size={18} />
            <div className="flex flex-col">
              <span className="font-heading tracking-wide text-sm">Date :</span>
              <span className="font-paragraph text-sm">
                Completed in January 2019
              </span>
            </div>
          </div>
        </div>

        {/* concept */}
        <div className="flex flex-col gap-5">
          <span className="font-heading text-xl tracking-wide">
            Project Name
          </span>
          <p className="font-paragraph text-sm md:w-[70%] lg:w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eligendi quidem vitae deserunt cupiditate quasi officiis. A deleniti
            adipisci beatae similique saepe consequatur deserunt minima impedit
            veritatis? Accusamus, numquam dolore placeat eaque exercitationem
            asperiores nemo sit neque facilis, libero hic delectus? Incidunt
            nemo et vitae voluptatem obcaecati aspernatur quis. Quod.
          </p>
        </div>
      </section>
    </>
  );
};
