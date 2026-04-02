"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm";

  const variants = {
    primary:
      "bg-[var(--accent)] text-surface-dark hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/20",
    outline:
      "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-surface-dark",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
