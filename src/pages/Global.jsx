import React, { useEffect } from "react";
import { Map } from "../components/global/Map";

export const Global = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="">
      <Map />
    </section>
  );
};
