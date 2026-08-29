import { useEffect, useRef } from "react";
import logoRaw from "@/assets/logo-semaine54-blanc-new.svg?raw";

const SPIN_DURATION = 650;
const SCROLL_THRESHOLD = 10;

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastY = window.scrollY;
    let spinning = false;
    let timer: number | undefined;

    const onScroll = () => {
      const y = window.scrollY;
      if (!spinning && Math.abs(y - lastY) > SCROLL_THRESHOLD) {
        spinning = true;
        el.classList.add("logo-spinning");
        timer = window.setTimeout(() => {
          el.classList.remove("logo-spinning");
          spinning = false;
        }, SPIN_DURATION + 200);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-logo ${className}`}
      dangerouslySetInnerHTML={{ __html: logoRaw }}
    />
  );
};

export default AnimatedLogo;
