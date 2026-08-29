import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 up to `end` in `duration` ms, once, when the returned ref
 * enters the viewport. Respects prefers-reduced-motion (value is immediate).
 */
export function useCountUp(end: number, duration = 900) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!el || reduced || typeof IntersectionObserver === "undefined") {
      setValue(end);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(end * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setValue(end);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, value };
}

/** Same as useCountUp but returns an integer. */
export function useCountUpInt(end: number, duration = 900) {
  const { ref, value } = useCountUp(end, duration);
  return { ref, value: Math.round(value) };
}
