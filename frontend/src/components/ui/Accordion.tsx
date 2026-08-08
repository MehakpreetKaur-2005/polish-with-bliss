import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

/** Single-expand accordion: opening one item collapses any previously open item. */
export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const triggerId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded border border-rose-gold/20 bg-blush"
          >
            <h3>
              <button
                type="button"
                id={triggerId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-heading text-base font-medium tracking-wide text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush sm:text-lg"
              >
                {item.title}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 text-rose-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
