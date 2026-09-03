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
  /** délai avant démarrage (ms) */
  delay?: number;
  className?: string;
  /** progression externe 0→1 (moment épinglé). Si fournie, pilote l'incrémentation. */
  progress?: number;
  /** notifie la progression 0→1 (pour barres de progression externes) */
  onProgress?: (p: number) => void;
};

const format = (n: number, group: boolean) =>
  group ? n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ") : String(n);

const CountUp = ({
  value,
  prefix = "",
  suffix = "",
  group = false,
  duration = 1800,
  delay = 0,
  className = "",
  progress,
  onProgress,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const notify = useRef(onProgress);
  notify.current = onProgress;

  useEffect(() => {
    if (progress === undefined) return;
    notify.current?.(Math.min(Math.max(progress, 0), 1));
  }, [progress]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (progress !== undefined) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      notify.current?.(1);
      return;
    }

    let raf = 0;
    let timer = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          timer = window.setTimeout(() => {
            const start = performance.now();
            setRunning(true);
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 1.6);
              setDisplay(Math.round(value * eased));
              notify.current?.(p);
              if (p < 1) {
                raf = requestAnimationFrame(tick);
              } else {
                setRunning(false);
                setDone(true);
              }
            };
            raf = requestAnimationFrame(tick);
          }, delay);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [value, duration, delay, progress]);

  const shown =
    progress !== undefined ? Math.round(value * Math.min(Math.max(progress, 0), 1)) : display;

  return (
    <span
      ref={ref}
      className={`${className}${running ? " counting" : ""}${done ? " count-pop" : ""}`}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {prefix}
      {format(shown, group)}
      {suffix}
    </span>
  );
};

export default CountUp;
