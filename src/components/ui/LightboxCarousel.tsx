"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const slideVariants = {
  initial: (d: number) => ({ opacity: 0, x: d * 50 }),
  animate: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -50 }),
};
import { GalleryItem } from "@/types";

interface LightboxCarouselProps {
  items: GalleryItem[];
  alts: string[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxCarousel({
  items,
  alts,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxCarouselProps) {
  const t = useTranslations("gallery");
  const touchStartX = useRef<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => { setDirection(1); onNext(); }, [onNext]);
  const goPrev = useCallback(() => { setDirection(-1); onPrev(); }, [onPrev]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext(); else goPrev();
    }
    touchStartX.current = null;
  }, [goNext, goPrev]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [onClose, goPrev, goNext],
  );

  useEffect(() => {
    if (currentIndex === null) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentIndex, handleKey]);

  const isOpen = currentIndex !== null;
  const item = isOpen ? items[currentIndex] : null;
  const alt = isOpen ? alts[currentIndex] : "";

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          className="fixed inset-0 z-[65] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={t("closeGallery")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={t("prevImage")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Image */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              transition={{ duration: 0.25 }}
            >
              <Image
                src={item.src}
                alt={alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            disabled={currentIndex === items.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={t("nextImage")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {currentIndex + 1} / {items.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
