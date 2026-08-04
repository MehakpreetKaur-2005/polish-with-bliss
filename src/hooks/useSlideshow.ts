import { useCallback, useEffect, useRef, useState } from "react";

interface UseSlideshowResult {
  activeIndex: number;
  /** Increments on every transition (auto or manual); use as a `key` to restart per-slide CSS animations. */
  tick: number;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
}

/**
 * Drives an auto-advancing slideshow: cycles through `slideCount` slides
 * every `intervalMs`, and resets that timer whenever the caller navigates
 * manually (per FR-004's "reset the automatic slideshow timer" requirement).
 */
export function useSlideshow(
  slideCount: number,
  intervalMs: number,
): UseSlideshowResult {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
      setTick((prev) => prev + 1);
    }, intervalMs);
  }, [slideCount, intervalMs]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  const goToIndex = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setTick((prev) => prev + 1);
      startTimer();
    },
    [startTimer],
  );

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slideCount);
    setTick((prev) => prev + 1);
    startTimer();
  }, [slideCount, startTimer]);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
    setTick((prev) => prev + 1);
    startTimer();
  }, [slideCount, startTimer]);

  return { activeIndex, tick, goToNext, goToPrevious, goToIndex };
}
