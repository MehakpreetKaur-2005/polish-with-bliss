import type { LucideIcon } from "lucide-react";

export interface ContactMethod {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  /** Present when the value is actionable (mailto:/external link) */
  href?: string;
}
