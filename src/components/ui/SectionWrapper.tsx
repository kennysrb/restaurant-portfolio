"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8",
        dark && "bg-[var(--bg-accent)]",
        className,
      )}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}
