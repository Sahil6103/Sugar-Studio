import React, { useState } from "react";
import {
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
  P12,
  P13,
  P14,
  P15,
} from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryHeading } from "../components/gallery/GalleryHeading";

export const Gallery = () => {
  const images = [
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    P11,
    P12,
    P13,
    P14,
    P15,
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="about px-3 md:px-10 lg:px-20">
      <GalleryHeading />
      <div className="max-w-6xl mx-auto p-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            layoutId={`image-${index}`}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage({ src, id: `image-${index}` })}>
            <img
              src={src}
              alt={`Masonry ${index}`}
              className="w-full rounded-lg"
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}>
              <motion.img
                src={selectedImage.src}
                className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                layoutId={selectedImage.id}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
