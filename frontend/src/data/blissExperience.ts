import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import type { BlissFeature } from "../types/blissExperience";

/** Feature cards for the Bliss Experience section, per FR-003. */
export const BLISS_FEATURES: BlissFeature[] = [
  {
    icon: Sparkles,
    title: "Personalized Care",
    description: "Beauty services tailored just for you.",
  },
  {
    icon: Award,
    title: "Quality Products",
    description: "Carefully selected for beautiful, lasting results.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Comfort",
    description: "A clean, relaxing, and welcoming space.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Experience",
    description: "Every visit begins with your comfort.",
  },
];
