import React, { useLayoutEffect, useRef } from "react";
import { Statistics } from "../common/Statistics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Strength = () => {
  const sectionRef = useRef();
  const state1 = useRef();
  const firstRef = useRef();
  const secondRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 5,
        },
      });
      tl.fromTo(
        firstRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      ).fromTo(
        secondRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.2"
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      className="px-3 md:px-10 lg:px-20 my-20 flex flex-col md:flex-col justify-center items-center gap-8">
      <div ref={firstRef} className=" flex flex-col md:flex-row gap-8">
        <Statistics num="15+" text="Years of Experience" ref={state1} />
        <Statistics num="250+" text="Projects Completed" ref={state1} />
      </div>
      <div ref={secondRef} className="flex flex-col md:flex-row gap-8">
        <Statistics num="100+" text="Happy Clients" ref={state1} />
        <Statistics num="25+" text="Awards & Recognitions" ref={state1} />
      </div>
    </section>
  );
};
