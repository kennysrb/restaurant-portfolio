"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { restaurantInfo } from "@/lib/data";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative aspect-[4/5] rounded-sm overflow-hidden"
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src="/images/about/restaurant-interior.png"
            alt="Inside Bistro Central Ljubljana"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-[var(--accent)] text-sm uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            About Us
          </h2>
          <div className="space-y-5">
            {restaurantInfo.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--text-secondary)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
