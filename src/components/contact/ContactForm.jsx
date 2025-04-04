import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const ContactForm = () => {
  const sectionRef = useRef();
  const lineRef = useRef();
  const textRef = useRef([]);
  const formRef = useRef();
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();

  const text = "Let’s design the future, together.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.set(lineRef.current, { x: -20, opacity: 0 })
        .set(textRef.current, {
          y: 10,
          opacity: 0,
        })
        .set(input1Ref.current, { y: 10, opacity: 0 })
        .set(input2Ref.current, { y: 10, opacity: 0 })
        .set(input3Ref.current, { y: 10, opacity: 0 })
        .set(input4Ref.current, { y: 10, opacity: 0 })
        .set(input5Ref.current, { y: 10, opacity: 0 })
        .to(lineRef.current, { x: 0, opacity: 1, duration: 0.3 })
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.03,
          },
          "-=0.1"
        )
        .to(
          input1Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.03,
          },
          "-=0.1"
        )
        .to(
          input2Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.03,
          },
          "-=0.1"
        )
        .to(
          input3Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.03,
          },
          "-=0.1"
        )
        .to(
          input4Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.03,
          },
          "-=0.1"
        )
        .to(
          input5Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.03,
          },
          "-=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-3 md:px-10 lg:px-20">
      <div className="content mt-8 flex flex-col md:flex-row md:justify-between items-start lg:gap-24">
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
        <form
          ref={formRef}
          action=""
          className="my-10 lg:my-5 space-y-10 w-full md:w-1/2 lg:w-3/5 tracking-wide">
          <div ref={input1Ref} className="input flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="text-xs lg:text-sm 2xl:text-lg font-heading">
              Fullname
            </label>
            <input
              type="text"
              placeholder="e.g. Robert Downey Jr."
              className="border-b-2 border-light-gray text-xs lg:text-sm 2xl:text-lg text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <div ref={input2Ref} className="input flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs lg:text-sm 2xl:text-lg font-heading">
              Email
            </label>
            <input
              type="text"
              placeholder="e.g. robert@jr.com"
              className="border-b-2 border-light-gray text-xs lg:text-sm 2xl:text-lg text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <div ref={input3Ref} className="input flex flex-col gap-1">
            <label
              htmlFor="mobile"
              className="text-xs lg:text-sm 2xl:text-lg font-heading">
              Mobile No.
            </label>
            <input
              type="text"
              placeholder="e.g. +1234567890"
              className="border-b-2 border-light-gray text-xs lg:text-sm 2xl:text-lg text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <div ref={input4Ref} className="input flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="text-xs lg:text-sm 2xl:text-lg font-heading">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us what you need"
              className="border-b-2 border-light-gray text-xs lg:text-sm 2xl:text-lg text-black focus:outline-0 font-paragraph tracking-wide focus:border-black hover:border-black transition-all duration-500"
            />
          </div>
          <button
            ref={input5Ref}
            className="group relative font-heading px-8 py-2 mt-5 bg-light-gray text-black overflow-hidden 
             before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
             before:bg-black before:transition-all before:duration-700 before:[clip-path:circle(0%_at_50%_50%)] 
             hover:before:[clip-path:circle(150%_at_50%_50%)] before:z-0 cursor-pointer">
            <span className="relative z-10 group-hover:text-white transition-all text-sm 2xl:text-lg duration-700">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
