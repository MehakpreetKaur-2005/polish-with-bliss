import type { NavLink } from "../types/navigation";

/**
 * Desktop primary navigation, per FR-001.
 * The "Book Appointment" CTA is rendered separately as a Button, not a NavLink.
 */
export const DESKTOP_NAV_LINKS: NavLink[] = [
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

/**
 * Mobile drawer navigation, per FR-001.
 *
 * NOTE: FR-001 also lists "Offers" and "Testimonials", but those sections are
 * Version 2.0 future enhancements (see SRS section 5.1) and have no
 * corresponding component or section id in this MVP. They are intentionally
 * omitted to avoid dead links. Add them here once their feature branches ship.
 */
export const MOBILE_NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export const BOOK_APPOINTMENT_LINK: NavLink = {
  id: "appointment",
  label: "Book Appointment",
};

export const HOME_SECTION_ID = "home";
