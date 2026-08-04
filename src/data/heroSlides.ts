import type { HeroSlide } from "../types/hero";

/**
 * Milliseconds each background slide remains active before crossfading to
 * the next. Kept in sync with the `kenburns` animation duration in
 * tailwind.config.ts so the zoom completes exactly as each slide is active.
 */
export const SLIDE_INTERVAL_MS = 6000;

/** Hero background slideshow, per FR-002. Purely decorative — see Hero.tsx. */
export const HERO_SLIDES: HeroSlide[] = [
  { id: "salon-ambience", src: "/images/hero/hero-1-salon-ambience.webp" },
  { id: "facial-treatment", src: "/images/hero/hero-2-facial-treatment.webp" },
  { id: "hair-spa", src: "/images/hero/hero-3-hair-spa.webp" },
  { id: "nail-care", src: "/images/hero/hero-4-nail-care.webp" },
  { id: "waxing-threading", src: "/images/hero/hero-5-waxing-threading.webp" },
];
