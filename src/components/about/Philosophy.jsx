import React, { useLayoutEffect, useRef } from "react";
import { ART, MAGIC, SIMPLE } from "../../assets";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const sectionRef = useRef();
  const lineRef = useRef();
  const textRef = useRef([]);
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const span1Ref = useRef();
  const span2Ref = useRef();
  const span3Ref = useRef();
  const paragraph1Ref = useRef();
  const paragraph2Ref = useRef();
  const paragraph3Ref = useRef();

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
        lineRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
        .fromTo(
          textRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 }
        )
        .fromTo(
          img1Ref.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3 }
        )
        .fromTo(
          span1Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        )
        .fromTo(
          paragraph1Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        )
        .fromTo(
          img2Ref.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3 }
        )
        .fromTo(
          span2Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        )
        .fromTo(
          paragraph2Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        )
        .fromTo(
          img3Ref.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3 }
        )
        .fromTo(
          span3Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        )
        .fromTo(
          paragraph3Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        );
    });
    return () => ctx.revert();
  });

  const text = "Our Philosophy";
  return (
    <section ref={sectionRef} className="px-3 md:px-10 lg:px-20">
      <div className="flex flex-col justify-start items-start gap-8 my-14">
        <div className="flex items-center gap-3">
          <div
            ref={lineRef}
            className="hidden md:block w-10 h-[3px] mt-2.5 lg:mt-0 2xl:mt-4 bg-black"></div>
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
      </div>
      <div className="cards flex flex-col gap-8">
        <div className="card flex justify-start items-start gap-3 md:gap-5">
          <img ref={img1Ref} src={SIMPLE} alt="" className="w-10 2xl:w-14" />
          <div className="content flex flex-col">
            <span
              ref={span1Ref}
              className="font-heading text-sm md:text-md 2xl:text-xl tracking-wider">
              Simplicity, but never ordinary
            </span>
            <p
              ref={paragraph1Ref}
              className="font-paragraph text-sm 2xl:text-lg">
              We strip away the unnecessary and embrace raw, timeless beauty.
            </p>
          </div>
        </div>
        <div className="card flex justify-start items-start gap-3 md:gap-5">
          <img ref={img2Ref} src={ART} alt="" className="w-10 2xl:w-14" />
          <div className="content flex flex-col">
            <span
              ref={span2Ref}
              className="font-heading text-sm md:text-md 2xl:text-xl tracking-wider">
              Art in every detail
            </span>
            <p
              ref={paragraph2Ref}
              className="font-paragraph text-sm 2xl:text-lg">
              Whether it’s line art, textures, or 3D elements, every project is
              a canvas.
            </p>
          </div>
        </div>
        <div className="card flex justify-start items-start gap-3 md:gap-5">
          <img ref={img3Ref} src={MAGIC} alt="" className="w-10 2xl:w-14" />
          <div className="content flex flex-col">
            <span
              ref={span3Ref}
              className="font-heading text-sm md:text-md 2xl:text-xl tracking-wider">
              Designs that feel like magic
            </span>
            <p
              ref={paragraph3Ref}
              className="font-paragraph text-sm 2xl:text-lg">
              We blend form, function, and emotion seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
