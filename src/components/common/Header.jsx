import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { LOGO } from "../../assets";
import { stagger } from "motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobNavRef = useRef();
  const mobLinksRef = useRef([]);
  const logo = useRef();
  const header = useRef();
  const menuIcon = useRef();
  const navRef = useRef();
  const linksRef = useRef([]);

  const tl = useRef();

  useEffect(() => {
    const headerTl = gsap.timeline();
    headerTl.current = gsap.timeline();

    headerTl.current
      .set(logo.current, { y: -30, opacity: 0 })
      .set(linksRef.current, { y: -30, opacity: 0 })
      .to(logo.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      })
      .to(linksRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
      })
      .fromTo(menuIcon.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }, []);

  useEffect(() => {
    const headerTl = gsap.timeline();
    headerTl.current = gsap.timeline();

    headerTl.current
      .set(linksRef.current, { y: -30, opacity: 0 })
      .set(logo.current, { y: -30, opacity: 0 })
      .to(logo.current, { y: 0, opacity: 1, duration: 0.5 })
      .to(linksRef.current, { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 });
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });
      // Setup the timeline ONCE
      tl.current
        .set(mobNavRef.current, { y: "-100%" }) // Start off-screen
        .set(mobLinksRef.current, { scale: 0, opacity: 0 }) // Links hidden initially
        .to(mobNavRef.current, { y: 0, duration: 0.5, ease: "power4.out" }) // Slide in nav
        .to(mobLinksRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
        }); // Links stagger in
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <header
      ref={header}
      className="relative flex justify-between items-center text-black py-4 md:py-7 px-2 md:px-10 lg:px-14 font-heading">
      <div
        ref={logo}
        className="logo font-extrabold text-3xl md:text-4xl lg:text-5xl w-24 md:w-28 h-24 md:h-28">
        <Link to="/" className="">
          <img src={LOGO} alt="" className="w-full h-full" />
        </Link>
      </div>

      {/* new Menu icon */}
      <button
        ref={menuIcon}
        onClick={() => setIsOpen(!isOpen)}
        className={`menuicon md:hidden absolute top-10 md:top-14 right-5 md:right-12 lg:right-20 z-[99] h-10 flex flex-col justify-center items-center cursor-pointer ${
          isOpen ? "gap-0 rotate-[-15deg]" : "gap-1.5"
        }`}>
        <div
          className={`line1 w-6 md:w-8 h-[1.5px] bg-black transition-all duration-500 ${
            isOpen ? "bg-black rotate-[62deg] w-6 md:w-6" : ""
          }`}></div>
        <div
          className={`link2 w-6 md:w-8 h-[1.5px] bg-black transition-all duration-500 ${
            isOpen ? " bg-black rotate-[150deg] w-6 md:w-6" : ""
          }`}></div>
      </button>

      {/* mobile Navigation Menu */}
      <nav
        ref={mobNavRef}
        className="fixed md:fixed lg:stick text-black w-full h-screen top-0 right-0 translate-y-full py-32 md:px-20 text-center flex flex-col justify-center items-center lg:justify-start lg:items-start gap-10 bg-[#7b7b7b3e] backdrop-blur-lg z-[90] text-lg md:text-xl tracking-wide overflow-hidden">
        <Link
          to="/about-us"
          ref={(el) => (mobLinksRef.current[0] = el)}
          onClick={() => setIsOpen(false)}
          className="">
          About Us
        </Link>
        <Link
          to="/global-projects"
          ref={(el) => (mobLinksRef.current[1] = el)}
          onClick={() => setIsOpen(false)}
          className="">
          Global Project
        </Link>
        <Link
          to="/projects"
          ref={(el) => (mobLinksRef.current[2] = el)}
          onClick={() => setIsOpen(false)}
          className="">
          Gallery
        </Link>
        <Link
          to="/contact-us"
          ref={(el) => (mobLinksRef.current[4] = el)}
          onClick={() => setIsOpen(false)}
          className="">
          Contact Us
        </Link>
      </nav>

      <nav
        ref={navRef}
        className="hidden md:flex justify-center items-center gap-8 text-[13px] tracking-wide">
        <Link
          to="/about-us"
          ref={(el) => (linksRef.current[0] = el)}
          onClick={() => setIsOpen(false)}
          className="text-black">
          About Us
        </Link>
        <Link
          to="/global-projects"
          ref={(el) => (linksRef.current[1] = el)}
          onClick={() => setIsOpen(false)}
          className="text-black">
          Global Project
        </Link>
        <Link
          to="/gallery"
          ref={(el) => (linksRef.current[2] = el)}
          onClick={() => setIsOpen(false)}
          className="text-black">
          Gallery
        </Link>
        <Link
          to="/contact-us"
          ref={(el) => (linksRef.current[4] = el)}
          onClick={() => setIsOpen(false)}
          className="text-black">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};
