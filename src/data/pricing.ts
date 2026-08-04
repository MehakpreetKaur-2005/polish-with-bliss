import type { PricingCategory } from "../types/pricing";

/** Service pricing by category, per FR-005. */
export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "hair-spa",
    name: "Hair Spa",
    items: [{ name: "Luxury Hair Spa (45 Minutes)", price: "$45 – $60" }],
  },
  {
    id: "facials",
    name: "Facials",
    items: [
      { name: "Deep Cleansing", price: "$30" },
      { name: "Brightening", price: "$45" },
      { name: "O3+", price: "$60" },
      { name: "D-Tan", price: "$40" },
      { name: "Collagen & Hyaluronic", price: "$40" },
      { name: "Wine", price: "$45" },
      { name: "Fruit", price: "$40" },
      { name: "VLCC", price: "$45" },
      { name: "Bridal Facial Radiance", price: "$70" },
      { name: "Glass Skin (Korean)", price: "$70" },
      { name: "Bleach", price: "$10" },
    ],
  },
  {
    id: "waxing",
    name: "Waxing",
    items: [
      { name: "Under Arms", price: "$10" },
      { name: "Half Arms", price: "$20" },
      { name: "Full Arms", price: "$25" },
      { name: "Brazilian", price: "$50" },
      { name: "Bikini", price: "$25" },
      { name: "Half Legs", price: "$30" },
      { name: "Full Legs", price: "$40" },
      { name: "Back", price: "$30" },
      { name: "Full Body Wax", price: "$120" },
    ],
  },
  {
    id: "nail-care",
    name: "Nail Care",
    items: [
      { name: "Bare Manicure", price: "$35" },
      { name: "Spa Manicure", price: "$45" },
      { name: "Bare Pedicure", price: "$45" },
      { name: "Spa Pedicure", price: "$55" },
    ],
  },
  {
    id: "threading",
    name: "Threading",
    items: [
      { name: "Brows", price: "$10" },
      { name: "Wax Brows", price: "$15" },
      { name: "Upper Lip", price: "$5" },
      { name: "Chin", price: "$5" },
      { name: "Forehead", price: "$10" },
      { name: "Side Lock (Wax or Threading)", price: "$10" },
      { name: "Full Face (Wax)", price: "$30" },
      { name: "Full Face (Threading)", price: "$25" },
    ],
  },
];
