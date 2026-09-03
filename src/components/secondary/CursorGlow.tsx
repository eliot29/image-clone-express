import { useEffect, useRef } from "react";
import { isFinePointer, prefersReducedMotion } from "@/lib/scroll-fx";

/** Lueur dorée suivant la souris, à placer dans un parent relative. */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent || !isFinePointer() || prefersReducedMotion()) return;

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.opacity = "1";
      el.style.setProperty("--gx", `${e.clientX - r.left}px`);
      el.style.setProperty("--gy", `${e.clientY - r.top}px`);
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="cursor-glow" />;
};

export default CursorGlow;
