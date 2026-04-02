"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinkKeys = [
  { key: "home", href: "#hero" },
  { key: "menu", href: "#menu" },
  { key: "about", href: "#about" },
  { key: "gallery", href: "#gallery" },
  { key: "reserve", href: "#reservation" },
  { key: "location", href: "#location" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinkKeys.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-secondary)]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
          aria-label={t("ariaLabel")}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-xl md:text-2xl font-bold text-[var(--accent)] tracking-wide"
          >
            {t("logoText")}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinkKeys.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                    activeSection === id
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                  }`}
                >
                  {t(link.key)}
                </a>
              );
            })}
            <ThemeToggle />
            {/* Locale switcher */}
            <div className="flex items-center gap-1 text-xs uppercase tracking-wider">
              <Link
                href={pathname}
                locale="en"
                className={`transition-colors duration-300 ${
                  locale === "en"
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                }`}
              >
                EN
              </Link>
              <span className="text-[var(--border)]">|</span>
              <Link
                href={pathname}
                locale="sl"
                className={`transition-colors duration-300 ${
                  locale === "sl"
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                }`}
              >
                SL
              </Link>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="relative w-10 h-10"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={mobileOpen}
            >
              <span
                className={`absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 bg-[var(--text-primary)] transition-all duration-300 ease-in-out origin-center ${
                  mobileOpen
                    ? "-translate-y-1/2 rotate-45"
                    : "-translate-y-[7px]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 bg-[var(--text-primary)] transition-all duration-300 ease-in-out origin-center ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 bg-[var(--text-primary)] transition-all duration-300 ease-in-out origin-center ${
                  mobileOpen
                    ? "-translate-y-1/2 -rotate-45"
                    : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden bg-[var(--bg-secondary)]/97 backdrop-blur-md transition-transform duration-500 ease-in-out origin-top ${
          mobileOpen
            ? "scale-y-100 pointer-events-auto"
            : "scale-y-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col px-8 pt-20">
          {navLinkKeys.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <div key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center gap-4 py-4"
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transitionDelay: mobileOpen ? `${180 + i * 70}ms` : "0ms",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "400ms",
                    transitionTimingFunction:
                      "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <span
                    className={`font-heading text-xl font-bold uppercase tracking-widest transition-all duration-300 group-hover:translate-x-1 ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                    }`}
                  >
                    {t(link.key)}
                  </span>
                </a>
                {i < navLinkKeys.length - 1 && (
                  <div
                    className="h-px bg-[var(--accent)]/20"
                    style={{
                      opacity: mobileOpen ? 1 : 0,
                      transitionDelay: mobileOpen ? `${180 + i * 70}ms` : "0ms",
                      transitionProperty: "opacity",
                      transitionDuration: "300ms",
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Mobile locale switcher */}
          <div
            className="flex items-center gap-3 py-4 mt-2"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: mobileOpen ? `${180 + navLinkKeys.length * 70}ms` : "0ms",
              transitionProperty: "opacity",
              transitionDuration: "300ms",
            }}
          >
            <Link
              href={pathname}
              locale="en"
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                locale === "en"
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
              }`}
            >
              EN
            </Link>
            <span className="text-[var(--border)]">|</span>
            <Link
              href={pathname}
              locale="sl"
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                locale === "sl"
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
              }`}
            >
              SL
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
