import type { ServiceSlide } from "../types/services";

/**
 * Milliseconds each service slide remains active before auto-advancing.
 * Kept in sync with the `progress` animation duration in tailwind.config.ts.
 */
export const SERVICE_SLIDE_INTERVAL_MS = 6000;

/** Services slideshow content, per FR-004. */
export const SERVICES: ServiceSlide[] = [
  {
    id: "hair-spa",
    name: "Hair Spa",
    tagline: "Luxury Hair Care Starts Here.",
    image: "/images/services/service-1-hair-spa.webp",
  },
  {
    id: "facials",
    name: "Facials",
    tagline: "Reveal Your Natural Radiance.",
    image: "/images/services/service-2-facials.webp",
  },
  {
    id: "waxing",
    name: "Waxing",
    tagline: "Confidence in Every Touch.",
    image: "/images/services/service-3-waxing.webp",
  },
  {
    id: "nail-care",
    name: "Nail Care",
    tagline: "Elegance at Your Fingertips.",
    image: "/images/services/service-4-nail-care.webp",
  },
  {
    id: "threading",
    name: "Threading",
    tagline: "Precision That Frames Your Beauty.",
    image: "/images/services/service-5-threading.webp",
  },
];
