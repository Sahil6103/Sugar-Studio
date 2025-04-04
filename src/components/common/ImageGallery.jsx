import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const sectionRef = useRef();
  return (
    <section ref={sectionRef} className="md:px-10 lg:px-20 mb-20 mt-8 py-14">
      <div className="max-w-[100rem] mx-auto columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            layoutId={`image-${index}`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage({ src, id: `image-${index}` })}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}>
            <img
              src={src}
              alt={`Masonry ${index}`}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}>
              <motion.img
                src={selectedImage.src}
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
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
