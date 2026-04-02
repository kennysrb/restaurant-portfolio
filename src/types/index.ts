export interface MenuItem {
  id: string;
  price: number;
  image: string;
  badge?: "chef" | "special";
}

export interface GalleryItem {
  id: string;
  src: string;
}

export interface WorkingHours {
  id: string;
  hours: string | null;
}
