import { MenuItem, GalleryItem, WorkingHours } from "@/types";

export const menuItems: MenuItem[] = [
  { id: "truffleRisotto", price: 24, image: "/images/menu/truffle-risotto.png", badge: "chef" },
  { id: "grilledSeaBass", price: 28, image: "/images/menu/sea-bass.png" },
  { id: "beefTenderloin", price: 32, image: "/images/menu/beef-tenderloin.png", badge: "special" },
  { id: "wildMushroomPasta", price: 18, image: "/images/menu/mushroom-pasta.png" },
  { id: "capreseSalad", price: 14, image: "/images/menu/caprese-salad.png" },
  { id: "tiramisu", price: 12, image: "/images/menu/tiramisu.png" },
  { id: "bruschettaTrio", price: 10, image: "/images/menu/bruschetta.png" },
  { id: "pannaCotta", price: 11, image: "/images/menu/panna-cotta.png" },
  { id: "lambRack", price: 34, image: "/images/menu/lamb-rack.png", badge: "chef" },
  { id: "octopusCarpaccio", price: 16, image: "/images/menu/octopus-carpaccio.png" },
  { id: "lobsterLinguine", price: 36, image: "/images/menu/lobster-linguine.png", badge: "special" },
  { id: "duckConfit", price: 29, image: "/images/menu/duck-confit.png" },
  { id: "burrataProciutto", price: 15, image: "/images/menu/burrata-prosciutto.png" },
  { id: "searedTunaTataki", price: 22, image: "/images/menu/tuna-tataki.png" },
  { id: "gnocchiAlPesto", price: 17, image: "/images/menu/gnocchi-pesto.png" },
  { id: "chocolateFondant", price: 13, image: "/images/menu/chocolate-fondant.png" },
  { id: "slovenianStrudel", price: 9, image: "/images/menu/strudel.png" },
];

export const galleryItems: GalleryItem[] = [
  { id: "interior1", src: "/images/gallery/interior-1.png" },
  { id: "dish1", src: "/images/gallery/dish-1.png" },
  { id: "bar", src: "/images/gallery/bar.png" },
  { id: "terrace", src: "/images/gallery/terrace.png" },
  { id: "dish2", src: "/images/gallery/dish-2.png" },
  { id: "interior2", src: "/images/gallery/interior-2.png" },
  { id: "dish3", src: "/images/gallery/dish-3.png" },
  { id: "wine", src: "/images/gallery/wine.png" },
];

export const workingHours: WorkingHours[] = [
  { id: "monday", hours: null },
  { id: "tuesdayFriday", hours: "11:00 - 22:00" },
  { id: "saturday", hours: "10:00 - 23:00" },
  { id: "sunday", hours: "10:00 - 21:00" },
];

export const restaurantInfo = {
  phone: "+386 1 234 5678",
  email: "info@bistrocentral.si",
  address: "Slovenska cesta 42, 1000 Ljubljana, Slovenia",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8071918608!2d14.5038!3d46.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzA0LjAiTiAxNMKwMzAnMTMuNyJF!5e0!3m2!1sen!2ssi!4v1234567890",
};
