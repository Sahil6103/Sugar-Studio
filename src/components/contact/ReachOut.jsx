import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ReachOut = () => {
  const text = "Reach Out to Us.";

  const sectionRef = useRef();
  const lineRef = useRef();
  const textRef = useRef([]);
  const span1Ref = useRef();
  const span2Ref = useRef();
  const span3Ref = useRef();
  const detail1Ref = useRef();
  const detail2Ref = useRef();
  const detail3Ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth < 2000) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 50%",
            scrub: 5,
          },
        });

        tl.fromTo(
          lineRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        )
          .fromTo(
            textRef.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }
          )
          .fromTo(
            span1Ref.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
            "-=0.3"
          )
          .fromTo(
            detail1Ref.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
          )
          .fromTo(
            span2Ref.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
            "-=0.3"
          )
          .fromTo(
            detail2Ref.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
          )
          .fromTo(
            span3Ref.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
            "-=0.3"
          )
          .fromTo(
            detail3Ref.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
          );
      } else {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline();

          tl.fromTo(
            lineRef.current,
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
          )
            .fromTo(
              textRef.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }
            )
            .fromTo(
              span1Ref.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
              "-=0.3"
            )
            .fromTo(
              detail1Ref.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
            )
            .fromTo(
              span2Ref.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
              "-=0.3"
            )
            .fromTo(
              detail2Ref.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
            )
            .fromTo(
              span3Ref.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
              "-=0.3"
            )
            .fromTo(
              detail3Ref.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
            );
        }, sectionRef);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-3 md:px-10 lg:px-20">
      <div className="mb-12 lg:my-14 flex flex-col md:flex-row md:justify-between items-start lg:gap-24">
        <div className="flex items-start gap-3 mt-5 w-full md:w-1/2 lg:w-2/5">
          <div
            ref={lineRef}
            className="hidden md:block w-10 h-[3px] mt-2.5 lg:mt-3.5 2xl:mt-4 bg-black"></div>
          <h1 className="font-heading uppercase text-xl md:text-2xl 2xl:text-4xl flex tracking-wide">
            {text.split(" ").map((word, i) => (
              <span key={i} className="mr-2 flex">
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
        <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col md:flex-row md:justify-start md:items-start gap-6 lg:gap-14 xl:gap-28 my-5">
          <div className="flex flex-col ">
            <span
              ref={span1Ref}
              className="font-heading text-xs 2xl:text-lg font-semibold tracking-wider text-[#000000]">
              Mobile / Whatsapp :
            </span>
            <p
              ref={detail1Ref}
              className="font-paragraph text-sm 2xl:text-xl tracking-wide">
              +1234567890
            </p>
          </div>
          <div className="flex flex-col ">
            <span
              ref={span2Ref}
              className="font-heading text-xs 2xl:text-lg font-semibold tracking-wider text-[#000000]">
              Inquiries :
            </span>
            <p
              ref={detail2Ref}
              className="font-paragraph text-sm 2xl:text-xl tracking-wide">
              info@sugar.com
            </p>
          </div>
          <div className="flex flex-col ">
            <span
              ref={span3Ref}
              className="font-heading text-xs 2xl:text-lg font-semibold tracking-wider text-[#000000]">
              Location :
            </span>
            <div
              ref={detail3Ref}
              className="flex flex-col font-paragraph text-sm 2xl:text-xl tracking-wide">
              <span>Sugar Studio</span>
              <span>23 Lumdiengjri Street, Laitumkhrah,</span>
              <span>Shillong, Meghalaya - 793003, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
