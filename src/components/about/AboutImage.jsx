import React, { useLayoutEffect, useRef } from "react";
import { ABOUT } from "../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutImage = () => {
  const sectionRef = useRef();
  const imgRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 50%",
          scrub: 5,
        },
      });
      tl.fromTo(
        imgRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7 }
      );
    });

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      className="about px-3 md:px-10 lg:px-20 lg:my-30 flex justify-center items-center">
      <img ref={imgRef} src={ABOUT} alt="" className="" />
    </section>
  );
};
