"use client";

import { useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { LightboxCarousel } from "@/components/ui/LightboxCarousel";
import { galleryItems } from "@/lib/data";
import { staggerContainer, scaleIn } from "@/lib/animations";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    []
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < galleryItems.length - 1 ? i + 1 : i
      ),
    []
  );

  return (
    <SectionWrapper id="gallery" dark>
      <div className="text-center mb-12">
        <p className="text-[var(--accent)] text-sm uppercase tracking-[0.3em] mb-3">
          Visual Experience
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Gallery
        </h2>
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {galleryItems.map((item, index) => (
          <motion.div key={item.id} variants={scaleIn}>
            <GalleryImage
              item={item}
              onClick={() => setLightboxIndex(index)}
            />
          </motion.div>
        ))}
      </motion.div>

      <LightboxCarousel
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </SectionWrapper>
  );
}
