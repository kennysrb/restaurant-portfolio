export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: "chef" | "special";
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface WorkingHours {
  day: string;
  hours: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
