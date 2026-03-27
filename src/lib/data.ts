import { MenuItem, GalleryItem, WorkingHours } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Creamy Arborio rice with black truffle, aged Parmesan, and a drizzle of truffle oil.",
    price: 24,
    image: "/images/menu/truffle-risotto.png",
    badge: "chef",
  },
  {
    id: 2,
    name: "Grilled Sea Bass",
    description:
      "Fresh Adriatic sea bass with roasted vegetables, capers, and lemon butter sauce.",
    price: 28,
    image: "/images/menu/sea-bass.png",
  },
  {
    id: 3,
    name: "Beef Tenderloin",
    description:
      "Premium beef tenderloin with red wine reduction, roasted potatoes, and seasonal greens.",
    price: 32,
    image: "/images/menu/beef-tenderloin.png",
    badge: "special",
  },
  {
    id: 4,
    name: "Wild Mushroom Pasta",
    description:
      "Handmade tagliatelle with a medley of wild mushrooms, garlic, and fresh herbs.",
    price: 18,
    image: "/images/menu/mushroom-pasta.png",
  },
  {
    id: 5,
    name: "Caprese Salad",
    description:
      "Heirloom tomatoes, fresh buffalo mozzarella, basil, and aged balsamic glaze.",
    price: 14,
    image: "/images/menu/caprese-salad.png",
  },
  {
    id: 6,
    name: "Tiramisu",
    description:
      "Classic Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa.",
    price: 12,
    image: "/images/menu/tiramisu.png",
  },
  {
    id: 7,
    name: "Bruschetta Trio",
    description:
      "Three artisan bruschettas: tomato & basil, ricotta & honey, and olive tapenade.",
    price: 10,
    image: "/images/menu/bruschetta.png",
  },
  {
    id: 8,
    name: "Panna Cotta",
    description:
      "Silky vanilla panna cotta with seasonal berry compote and mint.",
    price: 11,
    image: "/images/menu/panna-cotta.png",
  },
  {
    id: 9,
    name: "Lamb Rack",
    description:
      "Herb-crusted rack of lamb with rosemary jus, gratin dauphinois, and roasted baby carrots.",
    price: 34,
    image: "/images/menu/lamb-rack.png",
    badge: "chef",
  },
  {
    id: 10,
    name: "Octopus Carpaccio",
    description:
      "Thinly sliced Adriatic octopus with citrus vinaigrette, capers, and microgreens.",
    price: 16,
    image: "/images/menu/octopus-carpaccio.png",
  },
  {
    id: 11,
    name: "Lobster Linguine",
    description:
      "Fresh linguine tossed with lobster tail, cherry tomatoes, garlic, and white wine sauce.",
    price: 36,
    image: "/images/menu/lobster-linguine.png",
    badge: "special",
  },
  {
    id: 12,
    name: "Duck Confit",
    description:
      "Slow-cooked duck leg with crispy skin, served with lentils du Puy and orange glaze.",
    price: 29,
    image: "/images/menu/duck-confit.png",
  },
  {
    id: 13,
    name: "Burrata & Prosciutto",
    description:
      "Creamy burrata cheese with San Daniele prosciutto, arugula, and aged balsamic.",
    price: 15,
    image: "/images/menu/burrata-prosciutto.png",
  },
  {
    id: 14,
    name: "Seared Tuna Tataki",
    description:
      "Lightly seared yellowfin tuna with sesame crust, ponzu sauce, and pickled ginger.",
    price: 22,
    image: "/images/menu/tuna-tataki.png",
  },
  {
    id: 15,
    name: "Gnocchi al Pesto",
    description:
      "Pillowy potato gnocchi with homemade basil pesto, pine nuts, and Pecorino Romano.",
    price: 17,
    image: "/images/menu/gnocchi-pesto.png",
  },
  {
    id: 16,
    name: "Chocolate Fondant",
    description:
      "Warm dark chocolate fondant with a molten center, served with vanilla ice cream.",
    price: 13,
    image: "/images/menu/chocolate-fondant.png",
  },
  {
    id: 17,
    name: "Slovenian Strudel",
    description:
      "Traditional apple strudel with cinnamon, raisins, and a dusting of powdered sugar.",
    price: 9,
    image: "/images/menu/strudel.png",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "/images/gallery/interior-1.png", alt: "Restaurant interior with warm lighting" },
  { id: 2, src: "/images/gallery/dish-1.png", alt: "Beautifully plated main course" },
  { id: 3, src: "/images/gallery/bar.png", alt: "Elegant bar area" },
  { id: 4, src: "/images/gallery/terrace.png", alt: "Outdoor terrace seating" },
  { id: 5, src: "/images/gallery/dish-2.png", alt: "Chef preparing a signature dish" },
  { id: 6, src: "/images/gallery/interior-2.png", alt: "Private dining area" },
  { id: 7, src: "/images/gallery/dish-3.png", alt: "Fresh dessert selection" },
  { id: 8, src: "/images/gallery/wine.png", alt: "Curated wine collection" },
];

export const workingHours: WorkingHours[] = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday - Friday", hours: "11:00 - 22:00" },
  { day: "Saturday", hours: "10:00 - 23:00" },
  { day: "Sunday", hours: "10:00 - 21:00" },
];

export const restaurantInfo = {
  name: "Bistro Central",
  city: "Ljubljana",
  tagline: "A modern dining experience in the heart of Ljubljana",
  phone: "+386 1 234 5678",
  email: "info@bistrocentral.si",
  address: "Slovenska cesta 42, 1000 Ljubljana, Slovenia",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8071918608!2d14.5038!3d46.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzA0LjAiTiAxNMKwMzAnMTMuNyJF!5e0!3m2!1sen!2ssi!4v1234567890",
  about: [
    "Nestled in the vibrant heart of Ljubljana, Bistro Central has been a cornerstone of the city's culinary scene since 2018. Our kitchen combines traditional Slovenian flavors with contemporary European techniques, creating dishes that honor our heritage while embracing innovation.",
    "Every ingredient tells a story. We source locally from Slovenian farms and the Adriatic coast, ensuring that each plate reflects the freshness and diversity of our region. Our seasonal menu evolves with nature, offering a new experience with every visit.",
    "Whether you're joining us for an intimate dinner, a celebratory gathering, or a casual lunch, our warm atmosphere and attentive service make every moment at Bistro Central truly memorable.",
  ],
};
