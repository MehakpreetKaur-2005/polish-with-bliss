import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Reports whether the referenced element has scrolled into view, then stops
 * observing — so entrance animations trigger once, per FR-006's requirement
 * that they "trigger only once upon the initial scroll into view."
 */
export function useInViewOnce<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}
