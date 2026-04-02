"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { fadeInUp, fadeIn } from "@/lib/animations";

export function Hero() {
  const t = useTranslations();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/hero-bg.png"
        alt={t("hero.imageAlt")}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        <motion.p
          variants={fadeIn}
          className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          {t("hero.welcomeTo")}
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          {t("restaurant.name")}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          {t("restaurant.tagline")}
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#reservation" variant="primary">
            {t("hero.reserveTable")}
          </Button>
          <Button href="#menu" variant="outline">
            {t("hero.viewMenu")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
