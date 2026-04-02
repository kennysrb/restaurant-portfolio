import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
  name: string;
  description: string;
  onClick: () => void;
}

export function MenuCard({ item, name, description, onClick }: MenuCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex flex-col bg-[var(--bg-secondary)] rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 text-left w-full h-full cursor-pointer"
    >
      {item.badge && <Badge type={item.badge} />}

      <div className="relative aspect-[4/3] overflow-hidden w-full shrink-0">
        <Image
          src={item.image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
            {name}
          </h3>
          <span className="text-[var(--accent)] font-semibold text-lg shrink-0">
            &euro;{item.price}
          </span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </button>
  );
}
