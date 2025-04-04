import React, { useLayoutEffect, useRef } from "react";
import { HOMEABOUT } from "../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef();
  const imgRef = useRef();
  const contentRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();
  const buttonRef = useRef();
  const lineRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%", // Start animation slightly later
          end: "top 10%",
          scrub: 5, // Slower scroll interaction
        },
      });

      tl.fromTo(
        imgRef.current,
        { scale: 0 },
        { scale: 1, duration: 3, ease: "power4.out" }
      )
        .fromTo(
          contentRef.current,
          { scale: 0 },
          { scale: 1, duration: 3, ease: "power4.out" },
          "-=1.5" // Overlap animations slightly
        )
        .fromTo(
          lineRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 3, ease: "power4.out" }
        )
        .fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 3, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          paragraphRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 3, ease: "power3.out" },
          "-=2"
        )
        .fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 3, ease: "power3.out" },
          "-=2"
        );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-3 md:px-10 lg:px-20 py-8 md:mb-24 lg:mb-38">
      <div className="relative flex flex-col justify-center items-center">
        <div className="w-full md:w-[90%] flex justify-center items-center">
          <img ref={imgRef} src={HOMEABOUT} alt="" className="" />
        </div>
        <div
          ref={contentRef}
          className="content md:absolute bottom-[-30%] lg:bottom-[-20%] xl:bottom-[-10%] left-[20%] lg:left-[25%] md:w-[60%] md:bg-light-gray lg:w-[50%] h-fit md:p-8 flex flex-col md:gap-5">
          <div className="heading flex items-start gap-2">
            <div
              ref={lineRef}
              className="hidden md:block w-6 h-[3px] mt-3 bg-black"></div>
            <h1
              ref={headingRef}
              className="font-heading uppercase text-lg md:text-xl mt-5 md:mt-0 tracking-wide">
              Designing with Purpose, Creating with Passion.
            </h1>
          </div>
          <span ref={paragraphRef} className="font-paragraph text-sm">
            At Sugar Studio, we believe that furniture is more than just
            functionality—it’s an expression of art and innovation. With a deep
            passion for design, we merge traditional craftsmanship with
            cutting-edge technology to create bespoke pieces that elevate every
            space.
          </span>
          <Link
            ref={buttonRef}
            to="/about-us"
            className="group relative font-heading w-fit px-8 py-2 mt-5 bg-black text-white overflow-hidden 
                       before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                       before:bg-white before:transition-all before:duration-700 before:[clip-path:circle(0%_at_50%_50%)] 
                       hover:before:[clip-path:circle(150%_at_50%_50%)] before:z-0">
            <span className="relative z-10 group-hover:text-black transition-all duration-700 w-fit">
              Discover More
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
