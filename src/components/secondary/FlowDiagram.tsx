import { useEffect, useRef, useState } from "react";

type FlowDiagramProps = {
  steps: string[];
  className?: string;
};

/**
 * Chaîne d'étapes reliées par des flèches (SVG inline).
 * Horizontale sur desktop, verticale sur mobile.
 * Les flèches se tracent et les boîtes apparaissent en cascade, une seule fois.
 */
const FlowDiagram = ({ steps, className = "" }: FlowDiagramProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={steps.join(", puis ")}
      className={`flow-diagram ${visible ? "is-visible" : ""} flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-y-1 gap-x-1 ${className}`}
    >
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col sm:flex-row items-center">
          <div
            className="flow-box"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <svg
              className="flow-box-frame"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                x="0.75"
                y="0.75"
                width="98.5"
                height="98.5"
                rx="8"
                ry="8"
                fill="none"
                stroke="hsl(var(--or-mat))"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span className="font-dm text-[13px] text-ardoise leading-tight relative">
              {step}
            </span>
          </div>

          {i < steps.length - 1 && (
            <>
              {/* flèche horizontale (desktop) */}
              <svg
                className="hidden sm:block shrink-0 text-gris-bleu"
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="flow-arrow"
                  d="M1 6 H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ transitionDelay: `${i * 120 + 60}ms` }}
                />
                <path
                  className="flow-arrow"
                  d="M16 2 L21 6 L16 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  style={{ transitionDelay: `${i * 120 + 120}ms` }}
                />
              </svg>
              {/* flèche verticale (mobile) */}
              <svg
                className="sm:hidden shrink-0 text-gris-bleu my-1"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="flow-arrow"
                  d="M6 1 V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ transitionDelay: `${i * 120 + 60}ms` }}
                />
                <path
                  className="flow-arrow"
                  d="M2 13 L6 17.5 L10 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  style={{ transitionDelay: `${i * 120 + 120}ms` }}
                />
              </svg>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlowDiagram;
