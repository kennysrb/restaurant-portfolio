"use client";

import { useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MenuCard } from "@/components/ui/MenuCard";
import { DishModal } from "@/components/ui/DishModal";
import { menuItems } from "@/lib/data";
import { MenuItem } from "@/types";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const ITEMS_PER_PAGE = 8;
const MOBILE_INITIAL_COUNT = 4;

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [page, setPage] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const totalPages = Math.ceil(menuItems.length / ITEMS_PER_PAGE);
  const currentItems = menuItems.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  // Mobile: show first N items, expand to show all
  const mobileItems = mobileExpanded
    ? menuItems
    : menuItems.slice(0, MOBILE_INITIAL_COUNT);

  const goToPrev = () => setPage((p) => Math.max(0, p - 1));
  const goToNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const closeModal = useCallback(() => setSelectedDish(null), []);

  return (
    <SectionWrapper id="menu" dark>
      <div className="text-center mb-12">
        <p className="text-[var(--accent)] text-sm uppercase tracking-[0.3em] mb-3">
          Our Selection
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          The Menu
        </h2>
      </div>

      {/* === Mobile: vertical list with "Show More" === */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence>
            {mobileItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <MenuCard item={item} onClick={() => setSelectedDish(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {menuItems.length > MOBILE_INITIAL_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setMobileExpanded(!mobileExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)] border-2 border-[var(--accent)] rounded-sm hover:bg-[var(--accent)] hover:text-surface-dark transition-all duration-300"
            >
              {mobileExpanded ? "Show Less" : `Show All ${menuItems.length} Dishes`}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${mobileExpanded ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* === Desktop: paginated grid with arrows === */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Previous button */}
          {totalPages > 1 && (
            <button
              onClick={goToPrev}
              disabled={page === 0}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous menu page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Menu grid */}
          <motion.div
            ref={ref}
            key={page}
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[600px] content-start"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {currentItems.map((item) => (
              <motion.div key={item.id} variants={fadeInUp} className="h-full">
                <MenuCard item={item} onClick={() => setSelectedDish(item)} />
              </motion.div>
            ))}
          </motion.div>

          {/* Next button */}
          {totalPages > 1 && (
            <button
              onClick={goToNext}
              disabled={page === totalPages - 1}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next menu page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Page dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "bg-[var(--accent)] w-8"
                    : "bg-[var(--border)] hover:bg-[var(--text-secondary)]"
                }`}
                aria-label={`Go to menu page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <DishModal item={selectedDish} onClose={closeModal} />
    </SectionWrapper>
  );
}
