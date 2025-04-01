import React, { useEffect } from "react";
import { AboutHeading } from "../components/about/AboutHeading";
import { AboutImage } from "../components/about/AboutImage";
import { Philosophy } from "../components/about/Philosophy";
import { Strength } from "../components/about/Strength";
export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about px-3 md:px-10 lg:px-20">
      <AboutHeading />
      <AboutImage />
      <Philosophy />
      <Strength />
    </section>
  );
};
