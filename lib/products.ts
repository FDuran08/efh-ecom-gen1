export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  scentFamily: string;
  dupe_of: string;
  size: string;
  inStock: boolean;
  featured: boolean;
  imagePlaceholder: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Sugar Cloud Scent",
    slug: "sugar-cloud-scent",
    price: 15,
    description: "Our signature scent. Sweet, airy, and irresistibly soft — like stepping through a cloud of vanilla and musk.",
    scentFamily: "Sweet / Gourmand",
    dupe_of: "Fantasy by Britney Spears",
    size: "10ml Roll-On",
    inStock: true,
    featured: true,
    imagePlaceholder: "#C39BD3",
  },
  {
    id: "2",
    name: "Mood Effect",
    slug: "mood-effect",
    price: 15,
    description: "Confident and magnetic. Warm amber, light woods, and a hint of sandalwood that shifts with your body heat.",
    scentFamily: "Warm / Woody",
    dupe_of: "Good Girl by Carolina Herrera",
    size: "10ml Roll-On",
    inStock: true,
    featured: true,
    imagePlaceholder: "#9B59B6",
  },
  {
    id: "3",
    name: "Latin Love Spell",
    slug: "latin-love-spell",
    price: 15,
    description: "Flirty, fresh, and unforgettable. Notes of cherry, peach, and jasmine — the scent that starts conversations.",
    scentFamily: "Floral / Fruity",
    dupe_of: "Love Spell by Victoria's Secret",
    size: "10ml Roll-On",
    inStock: true,
    featured: true,
    imagePlaceholder: "#E91E8C",
  },
  {
    id: "4",
    name: "Live Drunk Energy",
    slug: "live-drunk-energy",
    price: 15,
    description: "Bold and unapologetic. Citrus top notes crash into a deep, spicy heart. For the ones who walk into a room and own it.",
    scentFamily: "Citrus / Spicy",
    dupe_of: "Black Opium by YSL",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#7D3C98",
  },
  {
    id: "5",
    name: "After Hours Only",
    slug: "after-hours-only",
    price: 15,
    description: "Seductive and smoky. Dark rose, patchouli, and musk — this one gets better as the night goes on.",
    scentFamily: "Dark / Musky",
    dupe_of: "Baccarat Rouge 540 by MFK",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#4A235A",
  },
  {
    id: "6",
    name: "Vanilla Vixen",
    slug: "vanilla-vixen",
    price: 15,
    description: "Cozy and playful. Rich vanilla, warm caramel, and a soft musk finish. The one everyone asks about.",
    scentFamily: "Sweet / Vanilla",
    dupe_of: "Vanilla 1x1 by Maison Margiela",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#F1C40F",
  },
  {
    id: "7",
    name: "Sweet But Dangerous",
    slug: "sweet-but-dangerous",
    price: 15,
    description: "Don't let the sweetness fool you. Juicy berries up top, dark amber and leather underneath.",
    scentFamily: "Fruity / Dark",
    dupe_of: "Poison Girl by Dior",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#E74C3C",
  },
  {
    id: "8",
    name: "Good Girl Glow",
    slug: "good-girl-glow",
    price: 15,
    description: "Soft, clean, and radiant. White flowers, soft musk, and a hint of powder. The everyday essential.",
    scentFamily: "Floral / Clean",
    dupe_of: "Daisy by Marc Jacobs",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#F8C8F0",
  },
  {
    id: "9",
    name: "Magnetic & Irresistible",
    slug: "magnetic-and-irresistible",
    price: 15,
    description: "A scent that pulls people in. Warm jasmine, creamy sandalwood, and a lingering vanilla dry-down.",
    scentFamily: "Warm / Floral",
    dupe_of: "Si by Giorgio Armani",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#A569BD",
  },
  {
    id: "10",
    name: "Heaven Scent",
    slug: "heaven-scent",
    price: 15,
    description: "Light, angelic, and addictive. Fresh citrus, white tea, and a soft skin musk. The one you reach for every morning.",
    scentFamily: "Fresh / Clean",
    dupe_of: "Angel by Thierry Mugler",
    size: "10ml Roll-On",
    inStock: true,
    featured: false,
    imagePlaceholder: "#AED6F1",
  },
];

export const getFeatured = () => products.filter(p => p.featured);
export const getAll = () => products;
export const getBySlug = (slug: string) => products.find(p => p.slug === slug);
