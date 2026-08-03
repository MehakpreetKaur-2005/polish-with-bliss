import { useEffect, useRef } from "react";
import type { NavLink } from "../../types/navigation";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  bookAppointmentLink: NavLink;
  activeId: string | null;
  onClose: () => void;
}

/**
 * Full-width mobile navigation drawer. Owns its own open/close animation and
 * closes on link selection, outside click, or Escape, per FR-001.
 */
export default function MobileMenu({
  isOpen,
  links,
  bookAppointmentLink,
  activeId,
  onClose,
}: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation-drawer"
      ref={drawerRef}
      className={`md:hidden overflow-hidden border-b border-espresso/10 bg-blush transition-[max-height,opacity] duration-300 ease-out ${
        isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onClose}
            aria-current={activeId === link.id ? "true" : undefined}
            className={`rounded px-2 py-3 font-body text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush ${
              activeId === link.id
                ? "text-terracotta font-semibold"
                : "text-espresso hover:text-terracotta"
            }`}
          >
            {link.label}
          </a>
        ))}

        <Button
          href={`#${bookAppointmentLink.id}`}
          onClick={onClose}
          className="mt-3 w-full"
        >
          {bookAppointmentLink.label}
        </Button>
      </nav>
    </div>
  );
}
