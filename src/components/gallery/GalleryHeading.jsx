import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const GalleryHeading = () => {
  const sectionRef = useRef();
  const lineRef = useRef();
  const text1Ref = useRef([]);
  const paragraphRef1 = useRef();
  const paragraphRef2 = useRef();

  const text1 = "A Showcase of Vision & Excellence";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.set(lineRef.current, { x: -20, opacity: 0 })
        .set(text1Ref.current, {
          y: 10,
          opacity: 0,
        })
        .set(paragraphRef1.current, { y: 10, opacity: 0 })
        .set(paragraphRef2.current, { y: 10, opacity: 0 })
        .to(lineRef.current, { x: 0, opacity: 1, duration: 0.3 })
        .to(text1Ref.current, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.03,
        })
        .to(paragraphRef1.current, { y: 0, opacity: 1, duration: 0.2 }, "-=0.5")
        .to(
          paragraphRef2.current,
          { y: 0, opacity: 1, duration: 0.2 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about px-3 md:px-10 lg:px-20 flex">
      <div className="flex flex-col justify-start items-start gap-8 my-14">
        <div className="flex items-center gap-3">
          <div
            ref={lineRef}
            className="hidden md:block w-10 h-[3px] mt-2.5 lg:mt-0 2xl:mt-4 bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl 2xl:text-4xl tracking-wide flex flex-wrap overflow-hidden">
            {text1.split(" ").map((word, i) => (
              <span key={i} className="mr-2 flex overflow-hidden">
                {word.split("").map((char, j) => (
                  <span
                    key={j}
                    ref={(el) => {
                      if (el) text1Ref.current.push(el); // ✅ Assign only if element exists
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
        <div className="font-paragraph text-sm 2xl:text-lg flex flex-col gap-5 w-full md:w-[70%]">
          <p ref={paragraphRef1}>
            At Sugar Studio, we take pride in delivering innovative and visually
            stunning projects across the globe. From high-end residential spaces
            to commercial hubs, each project is a testament to our commitment to
            quality, creativity, and functionality. Our designs seamlessly blend
            modern aesthetics with cultural influences, ensuring that every
            space we create is unique and timeless.
          </p>
        </div>
      </div>
    </section>
  );
};
