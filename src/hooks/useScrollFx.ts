import { useEffect, useRef, useState } from "react";
import {
  registerScrollFx,
  prefersReducedMotion,
  isFinePointer,
  type ScrollFxContext,
} from "@/lib/scroll-fx";

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

/** Parallaxe verticale douce : -amplitude → +amplitude sur la traversée du viewport. */
export function useParallax<T extends HTMLElement>(amplitude = 20) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !isFinePointer()) return;
    return registerScrollFx(el, (p) => {
      el.style.transform = `translate3d(0, ${((p - 0.5) * 2 * amplitude).toFixed(2)}px, 0)`;
    });
  }, [amplitude]);
  return ref;
}

/** Décalage horizontal lié au scroll (bandeaux). */
export function useScrollShift<T extends HTMLElement>(amplitude = 80) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    return registerScrollFx(el, (p) => {
      el.style.transform = `translate3d(${((p - 0.5) * 2 * amplitude).toFixed(2)}px, 0, 0)`;
    });
  }, [amplitude]);
  return ref;
}

/** Progression 0 → 1 de la traversée d'un conteneur haut (moment épinglé). */
export function useStickyProgress<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    let last = -1;
    return registerScrollFx(el, (_p, ctx: ScrollFxContext) => {
      const span = Math.max(ctx.rect.height - ctx.viewportH, 1);
      const value = clamp01(-ctx.rect.top / span);
      if (Math.abs(value - last) < 0.01 && value !== 0 && value !== 1) return;
      last = value;
      setProgress(value);
    });
  }, [enabled]);

  return { ref, progress };
}

/** Inclinaison 3D suivant le curseur (désactivée sur tactile / mouvement réduit). */
export function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !isFinePointer()) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform 80ms linear";
      el.style.transform = `perspective(900px) rotateX(${(-y * 2 * max).toFixed(2)}deg) rotateY(${(x * 2 * max).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      el.style.transition = "transform 400ms ease-out";
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);
  return ref;
}
