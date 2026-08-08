import { Instagram, Mail, MapPin } from "lucide-react";
import type { ContactMethod } from "../types/contact";

/** Contact information cards, per FR-008. */
export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "address",
    icon: MapPin,
    label: "Address",
    value: "Kitchener, Ontario",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "polishwithbliss@gmail.com",
    href: "mailto:polishwithbliss@gmail.com",
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@polishwithbliss",
    href: "https://instagram.com/polishwithbliss",
  },
];
