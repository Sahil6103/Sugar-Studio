import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import { About } from "../components/home/About";
import { Marquee } from "../components/home/Marquee";
import { Work } from "../components/home/Work";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Marquee />
    </>
  );
};
