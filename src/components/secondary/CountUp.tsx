import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** valeur finale numérique */
  value: number;
  /** préfixe affiché (ex : "+") */
  prefix?: string;
  /** suffixe affiché (ex : " %") */
  suffix?: string;
  /** séparateur de milliers */
  group?: boolean;
  duration?: number;
  className?: string;
};

const format = (n: number, group: boolean) =>
  group ? n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ") : String(n);

const CountUp = ({
  value,
  prefix = "",
  suffix = "",
  group = false,
  duration = 900,
  className = "",
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(display, group)}
      {suffix}
    </span>
  );
};

export default CountUp;
