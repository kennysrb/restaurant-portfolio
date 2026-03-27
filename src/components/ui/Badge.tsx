interface BadgeProps {
  type: "chef" | "special";
}

export function Badge({ type }: BadgeProps) {
  const labels = {
    chef: "Chef's Pick",
    special: "Special",
  };

  return (
    <span className="absolute top-3 right-3 bg-[var(--accent)] text-surface-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm z-10">
      {labels[type]}
    </span>
  );
}
