import React, { useState } from "react";

import { GalleryHeading } from "../components/gallery/GalleryHeading";
import { ImageGallery } from "../components/gallery/ImageGallery";

export const Gallery = () => {
  return (
    <section className="about px-3 md:px-10 lg:px-20">
      <GalleryHeading />
      <ImageGallery />
    </section>
  );
};
