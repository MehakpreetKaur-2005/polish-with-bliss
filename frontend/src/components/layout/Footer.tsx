import Container from "../ui/Container";
import { BOOK_APPOINTMENT_LINK, HOME_SECTION_ID } from "../../data/navigation";

/** Quick links content and order per FR-010; ids match each section's own id. */
const FOOTER_LINKS = [
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: BOOK_APPOINTMENT_LINK.id, label: "Request Appointment" },
  { id: "contact", label: "Contact" },
];

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-espresso py-12 text-blush">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div>
          <a
            href={`#${HOME_SECTION_ID}`}
            className="rounded font-script text-3xl text-rose-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
          >
            Polish with Bliss
          </a>
          <p className="mt-2 font-body text-sm text-blush/70">
            Beauty • Confidence • Self-Care
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded font-body text-sm text-blush/80 transition-colors hover:text-blush hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="font-body text-xs text-blush/60">
          <p>&copy; {COPYRIGHT_YEAR} Polish with Bliss. All Rights Reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <span className="font-medium text-blush">Haspinder Kaur</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
