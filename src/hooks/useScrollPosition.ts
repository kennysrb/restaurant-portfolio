"use client";

import { useState, useEffect } from "react";

/**
 * Returns the current window.scrollY, updated on scroll.
 * Use this in components that need to react to scroll position
 * instead of duplicating the addEventListener boilerplate.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
