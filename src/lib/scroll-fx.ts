/**
 * Boucle requestAnimationFrame unique pour tous les effets liés au scroll.
 * Aucun listener scroll par composant : un seul, global.
 * N'anime que les éléments visibles (IntersectionObserver).
 */

export type ScrollFxContext = {
  rect: DOMRect;
  viewportH: number;
};

type Entry = {
  el: HTMLElement;
  update: (progress: number, ctx: ScrollFxContext) => void;
  visible: boolean;
};

const entries = new Set<Entry>();
let observer: IntersectionObserver | null = null;
let rafId = 0;
let dirty = true;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export const isFinePointer = () =>
  typeof window !== "undefined" && !!window.matchMedia?.("(hover: hover)").matches;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

const tick = () => {
  rafId = requestAnimationFrame(tick);
  if (!dirty) return;
  dirty = false;

  const viewportH = window.innerHeight;
  entries.forEach((entry) => {
    if (!entry.visible) return;
    const rect = entry.el.getBoundingClientRect();
    const progress = clamp01((viewportH - rect.top) / (viewportH + rect.height));
    entry.update(progress, { rect, viewportH });
  });
};

const markDirty = () => {
  dirty = true;
};

const start = () => {
  if (rafId) return;
  window.addEventListener("scroll", markDirty, { passive: true });
  window.addEventListener("resize", markDirty);
  observer = new IntersectionObserver(
    (obsEntries) => {
      obsEntries.forEach((oe) => {
        entries.forEach((entry) => {
          if (entry.el !== oe.target) return;
          entry.visible = oe.isIntersecting;
          entry.el.style.willChange = oe.isIntersecting ? "transform" : "";
        });
      });
      dirty = true;
    },
    { rootMargin: "10% 0px 10% 0px" }
  );
  entries.forEach((e) => observer?.observe(e.el));
  dirty = true;
  rafId = requestAnimationFrame(tick);
};

const stop = () => {
  if (!rafId) return;
  cancelAnimationFrame(rafId);
  rafId = 0;
  window.removeEventListener("scroll", markDirty);
  window.removeEventListener("resize", markDirty);
  observer?.disconnect();
  observer = null;
};

export const registerScrollFx = (
  el: HTMLElement,
  update: (progress: number, ctx: ScrollFxContext) => void
) => {
  const entry: Entry = { el, update, visible: true };
  entries.add(entry);
  if (!rafId) start();
  else observer?.observe(el);

  return () => {
    entries.delete(entry);
    observer?.unobserve(el);
    el.style.willChange = "";
    if (entries.size === 0) stop();
  };
};
