import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { projectDetail } from "../../assets/projectDetail";
import { RiCalendar2Line, RiMapPinLine } from "@remixicon/react";
import { ImageGallery } from "../common/ImageGallery";
import gsap from "gsap";
import { CALENDAR, LOCATION } from "../../assets";

export const City = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cityId } = useParams();
  const project = projectDetail[cityId];
  //   console.log(project);

  //   if (!project) {
  //     return (
  //       <h2 className="text-center text-2xl font-bold mt-10">
  //         Project Not Found
  //       </h2>
  //     );
  //   }

  const text = `Our Excellence in ${project.city}`;

  const sectionRef = useRef();
  const lineRef = useRef();
  const textRef = useRef([]);
  const icon1Ref = useRef();
  const icon2Ref = useRef();
  const sub1Heading = useRef();
  const sub2Heading = useRef();
  const sub1Detail = useRef();
  const sub2Detail = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.set(lineRef.current, { x: -20, opacity: 0 })
        .set(textRef.current, {
          y: 10,
          opacity: 0,
        })
        .set(icon1Ref.current, { x: -20, opacity: 0 })
        .set(sub1Heading.current, { x: 20, opacity: 0 })
        .set(sub1Detail.current, { x: 20, opacity: 0 })
        .set(icon2Ref.current, { x: -20, opacity: 0 })
        .set(sub2Heading.current, { x: 20, opacity: 0 })
        .set(sub2Detail.current, { x: 20, opacity: 0 })
        .set(headingRef.current, { x: 20, opacity: 0 })
        .set(paragraphRef.current, { y: 10, opacity: 0 })
        .to(lineRef.current, { x: 0, opacity: 1, duration: 0.3 })
        .to(textRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.03,
        })
        .to(icon1Ref.current, { x: 0, opacity: 1, duration: 0.3 })
        .to(sub1Heading.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.1")
        .to(sub1Detail.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.1")
        .to(icon2Ref.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.1")
        .to(sub2Heading.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.1")
        .to(sub2Detail.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.1")
        .to(headingRef.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.1")
        .to(paragraphRef.current, { y: 0, opacity: 1, duration: 0.2 }, "-=0.1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="px-3 md:px-10 lg:px-40 my-14">
        {/* heading */}
        <div className="heading flex items-start gap-3 mt-5 w-full md:w-1/2 lg:w-2/5">
          <div
            ref={lineRef}
            className="hidden md:block w-10 h-[3px] mt-2.5 lg:mt-2 2xl:mt-4 bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl 2xl:text-4xl tracking-wide leading-7 md:leading-6 lg:leading-6 flex flex-wrap overflow-hidden">
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
          <div className="flex justify-start items-center gap-8">
            <img ref={icon1Ref} src={LOCATION} alt="" className="w-5 2xl:w-7" />
            <div className="flex flex-col">
              <span
                ref={sub1Heading}
                className="font-heading tracking-wide text-sm 2xl:text-xl">
                Location :
              </span>
              <span
                ref={sub1Detail}
                className="font-paragraph text-sm 2xl:text-lg tracking-wide">
                {project.location}
              </span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-8">
            <img ref={icon2Ref} src={CALENDAR} alt="" className="w-5 2xl:w-7" />
            <div className="flex flex-col">
              <span
                ref={sub2Heading}
                className="font-heading tracking-wide text-sm 2xl:text-xl">
                Date :
              </span>
              <span
                ref={sub2Detail}
                className="font-paragraph text-sm 2xl:text-lg tracking-wide">
                {project.date}
              </span>
            </div>
          </div>
        </div>

        {/* concept */}
        <div className="flex flex-col gap-5">
          <span
            ref={headingRef}
            className="font-heading text-xl 2xl:text-3xl tracking-wide">
            {project.name}
          </span>
          <p
            ref={paragraphRef}
            className="font-paragraph text-sm 2xl:text-xl md:w-[70%] lg:w-[60%] tracking-wide">
            {project.concept}
          </p>
        </div>

        <ImageGallery images={project.images} />
      </section>
    </>
  );
};
