import React, { useEffect } from "react";
import { GalleryHeading } from "../components/gallery/GalleryHeading";
import { ImageGallery } from "../components/common/ImageGallery";
import {
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  P1,
  P2,
  P3,
  P4,
  D1,
  D5,
  D3,
  D4,
  S1,
  S5,
  S3,
} from "../assets/porjectImg";

export const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    C2,
    D5,
    C4,
    C3,
    C1,
    D3,
    P3,
    P2,
    P4,
    C5,
    P1,
    D4,
    S3,
    D1,
    S1,
    C6,
    S5,
  ];

  return (
    <section className="about px-3 md:px-10 lg:px-20">
      <GalleryHeading />
      <ImageGallery images={images} />
    </section>
  );
};
