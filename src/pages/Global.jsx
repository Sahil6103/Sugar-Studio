import React, { useState } from "react";
import { WORLD } from "../assets/index";
import { RiAddLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Map } from "../components/global/Map";

export const Global = () => {
  return (
    <section className="">
      <Map />
    </section>
  );
};
