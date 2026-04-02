"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface BadgeProps {
  type: "chef" | "special";
  position?: "top-left" | "top-right";
}

export function Badge({ type, position = "top-right" }: BadgeProps) {
  const t = useTranslations("badges");
  return (
    <span
      className={cn(
        "absolute bg-[var(--accent)] text-surface-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm z-10",
        position === "top-right" ? "top-3 right-3" : "top-3 left-3",
      )}
    >
      {t(type)}
    </span>
  );
}
