import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const AboutHeading = () => {
  const sectionRef = useRef();
  const lineRef = useRef();
  const text1Ref = useRef([]);
  const paragraphRef1 = useRef();
  const paragraphRef2 = useRef();

  const text1 = "Designing with Purpose, Creating with Passion.";

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
      <div className="content flex flex-col justify-start items-start gap-8 my-14">
        <div className="heading flex items-center gap-3">
          <div
            ref={lineRef}
            className="hidden md:block w-10 h-[3px] bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl tracking-wide flex flex-wrap overflow-hidden">
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
        <div className="paragraph font-paragraph text-sm flex flex-col gap-5 w-full md:w-[70%]">
          <p ref={paragraphRef1}>
            At Sugar Studio, every design is more than just a visual—it’s an
            experience. We believe that great design is not just about form and
            function but about storytelling, emotion, and intention. Every
            curve, every shadow, and every detail is crafted with purpose,
            ensuring that what we create is not just beautiful but meaningful.
          </p>
          <p ref={paragraphRef2}>
            Passion fuels our creativity, pushing us to explore new dimensions
            in 3D visuals, line art, and modern aesthetics. Whether it’s a
            striking furniture concept, a minimalist sketch, or a fully
            immersive design experience, we bring ideas to life with an
            unwavering commitment to excellence.
          </p>
        </div>
      </div>
      {/* <LineArt /> */}
    </section>
  );
};
