import React, { useEffect, useLayoutEffect, useRef } from "react";
import { COMMERCIAL, RECIDENTIAL, RESTAURANT } from "../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Work = () => {
  const sectionRef = useRef();
  const textRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // Use a container class to trigger the scroll event
        start: "top 80%", // When the top of the container reaches 80% of the viewport
        end: "top 60%", // End when the bottom of the container hits the top of the viewport
        scrub: 5, // Smooth effect
      },
    });

    textRefs.current.forEach((el, index) => {
      tl.fromTo(
        imgRefs.current[index],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );
      tl.fromTo(
        el,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-12 md:pt-30 mb-14 md:mb-30 flex flex-col md:flex-row gap-1.5 md:gap-0 overflow-hidden">
      <div
        ref={(el) => imgRefs.current.push(el)}
        className="relative md:h-[90vh] flex-1 transition-all duration-500 ease-in-out hover:flex-12/12 group">
        <img
          src={RECIDENTIAL}
          className="h-full w-full object-contain md:object-cover brightness-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white ">
          <span
            ref={(el) => textRefs.current.push(el)}
            className="font-heading text-lg md:text-xl lg:text-3xl text-white tracking-wider">
            Recidential
          </span>
        </div>
      </div>

      <div
        ref={(el) => imgRefs.current.push(el)}
        className="relative md:h-[90vh] flex-1 transition-all duration-500 ease-in-out hover:flex-12/12 group">
        <img
          src={COMMERCIAL}
          className="h-full w-full object-contain md:object-cover brightness-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white ">
          <span
            ref={(el) => textRefs.current.push(el)}
            className="font-heading text-lg md:text-xl lg:text-3xl text-white tracking-wider">
            Commercial
          </span>
        </div>
      </div>

      <div
        ref={(el) => imgRefs.current.push(el)}
        className="relative md:h-[90vh] flex-1 transition-all duration-500 ease-in-out hover:flex-12/12 group">
        <img
          src={RESTAURANT}
          className="h-full w-full object-contain md:object-cover brightness-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white ">
          <span
            ref={(el) => textRefs.current.push(el)}
            className="font-heading text-lg md:text-xl lg:text-3xl text-white tracking-wider">
            Restaurant
          </span>
        </div>
      </div>
    </section>
  );
};
