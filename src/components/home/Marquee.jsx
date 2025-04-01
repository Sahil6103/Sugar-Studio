import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Marquee = () => {
  const marqueeRef = useRef(null);
  const itemsRef = useRef([]);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const updateDuration = () => {
      const screenwidth = window.innerWidth;
      setDuration(screenwidth > 1024 ? 15 : screenwidth > 768 ? 20 : 30);
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => {
      window.removeEventListener("resize", updateDuration);
    };
  });

  useEffect(() => {
    const marquee = marqueeRef.current;
    const items = itemsRef.current;

    gsap.set(items, { xPercent: 100 });

    const tl = gsap.timeline({ repeat: -1, ease: "none" });
    tl.to(items, {
      xPercent: -100 * items.length,
      duration: duration,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, [duration]);

  return (
    <div className="page2 h-fit w-full overflow-hidden">
      <div
        ref={marqueeRef}
        className="move primary flex gap-10 py-[2vw] whitespace-nowrap">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="marque text-black font-heading flex flex-shrink-0 items-center gap-[3vw] px-[2vw] text-5xl">
            <h1>Redefining Spaces with Innovation.</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
