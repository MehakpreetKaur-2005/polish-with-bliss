import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  BOOK_APPOINTMENT_LINK,
  DESKTOP_NAV_LINKS,
  HOME_SECTION_ID,
  MOBILE_NAV_LINKS,
} from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

const OBSERVED_SECTION_IDS = [
  HOME_SECTION_ID,
  ...MOBILE_NAV_LINKS.map((link) => link.id),
  BOOK_APPOINTMENT_LINK.id,
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(OBSERVED_SECTION_IDS);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-blush/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a
          href={`#${HOME_SECTION_ID}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Polish with Bliss home"
          className="flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
        >
          <LogoMark />
          <span className="font-script text-2xl leading-none text-rose-gold sm:text-3xl">
            Polish with Bliss
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {DESKTOP_NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`font-body text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush rounded ${
                activeId === link.id
                  ? "text-terracotta"
                  : "text-espresso hover:text-terracotta"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button href={`#${BOOK_APPOINTMENT_LINK.id}`}>
            {BOOK_APPOINTMENT_LINK.label}
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded p-2 text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        links={MOBILE_NAV_LINKS}
        bookAppointmentLink={BOOK_APPOINTMENT_LINK}
        activeId={activeId}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}

/** Small monogram mark echoing the approved Stitch logo treatment. */
function LogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="15" stroke="#d4a373" strokeWidth="1.5" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="14"
        fill="#2d2926"
      >
        P
      </text>
    </svg>
  );
}
