import React, { useLayoutEffect, useRef, useState } from "react";
import { RiAddLine } from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import { WORLD } from "../../assets";
import { C3, D2, L5, P3, S1 } from "../../assets/porjectImg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { stagger } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const Map = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const navigate = useNavigate();

  // Define cities with their responsive coordinates
  const cities = [
    { id: "chicago", name: "Chicago", top: "38%", left: "25%" },
    { id: "london", name: "London", top: "32%", right: "48%" },
    { id: "paris", name: "Paris", top: "30%", right: "42%" },
    { id: "dubai", name: "Dubai", top: "51%", right: "37%" },
    { id: "sydney", name: "Sydney", bottom: "26%", right: "8.5%" },
  ];

  const sectionRef = useRef();
  const imgRef = useRef();
  const linksRef = useRef([]);
  const cityRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animation for small devices (linksRef)
      tl.set(linksRef.current, { scale: 0 }).to(linksRef.current, {
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
      });
    });

    const ctx1 = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate the world map first
      tl.set(imgRef.current, { y: 100, opacity: 0 })
        .set(cityRefs.current, { y: 20, opacity: 0 })
        .to(imgRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
        })
        .to(
          cityRefs.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.2,
          },
          "-=0.2"
        );
    });

    return () => {
      ctx.revert();
      ctx1.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* Section for small screens (sm) */}
      <div className="sm:hidden px-3 py-20 flex flex-col gap-14">
        <Link ref={(el) => (linksRef.current[0] = el)} to="/project/chicago">
          <img src={C3} className="w-full h-56 bg-gray-400"></img>
          <span className="font-heading text-sm tracking-wide">
            Velvet Ember, Chicago
          </span>
        </Link>
        <Link ref={(el) => (linksRef.current[1] = el)} to="/project/paris">
          <img src={L5} className="w-full h-56 bg-gray-400"></img>
          <span className="font-heading text-sm tracking-wide">
            Monarch Atelier, London
          </span>
        </Link>
        <Link ref={(el) => (linksRef.current[2] = el)} to="/project/london">
          <img src={P3} className="w-full h-56 bg-gray-400"></img>
          <span className="font-heading text-sm tracking-wide">
            Maison Solstice, Paris
          </span>
        </Link>
        <Link ref={(el) => (linksRef.current[3] = el)} to="/project/dubai">
          <img src={D2} className="w-full h-56 bg-gray-400"></img>
          <span className="font-heading text-sm tracking-wide">
            Mirage Pavilion, Dubai
          </span>
        </Link>
        <Link to="/project/sydney">
          <img src={S1} className="w-full h-56 bg-gray-400"></img>
          <span className="font-heading text-sm tracking-wide">
            Harbor Prism, Sydney
          </span>
        </Link>
      </div>

      {/* Section for medium (md) and larger screens */}
      <div className="hidden sm:block md:block relative">
        {/* World Map */}
        <img
          ref={imgRef}
          src={WORLD}
          alt="World Map"
          className="w-full h-auto"
        />

        {/* City Points */}
        {cities.map((city, index) => (
          <div
            key={city.id}
            ref={(el) => (cityRefs.current[index] = el)} // Store each city ref separately
            className="absolute bg-white rounded-full w-6 2xl:w-10 h-6 2xl:h-10 p-0.5 flex justify-center items-center cursor-pointer hover:bg-light-gray transition-all duration-300"
            style={{
              top: city.top,
              left: city.left,
              right: city.right,
              bottom: city.bottom,
            }}
            onMouseEnter={() => setHoveredCity(city.id)}
            onMouseLeave={() => setHoveredCity(null)}
            onClick={() => navigate(`/project/${city.id}`)}>
            <RiAddLine color="black" />

            {/* Tooltip with City Name */}
            {hoveredCity === city.id && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-light-gray text-black text-sm px-2 py-1 rounded font-paragraph font-semibold tracking-wide">
                {city.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
