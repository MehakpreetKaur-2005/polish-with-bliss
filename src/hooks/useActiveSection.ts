import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, so the Navigation module can highlight the matching nav item.
 *
 * Falls back gracefully (returns null) when the target sections don't exist
 * in the DOM yet, e.g. before their feature branches are implemented.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        // Accounts for the sticky nav bar height so a section is considered
        // "active" once it clears the header.
        rootMargin: "-96px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
