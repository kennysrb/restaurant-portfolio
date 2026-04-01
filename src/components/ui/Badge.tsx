interface BadgeProps {
  type: "chef" | "special";
  position?: "top-left" | "top-right";
}

export function Badge({ type, position = "top-right" }: BadgeProps) {
  const labels = {
    chef: "Chef's Pick",
    special: "Special",
  };

  const positionClass = position === "top-right" ? "top-3 right-3" : "top-3 left-3";

  return (
    <span className={`absolute ${positionClass} bg-[var(--accent)] text-surface-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm z-10`}>
      {labels[type]}
    </span>
  );
}
