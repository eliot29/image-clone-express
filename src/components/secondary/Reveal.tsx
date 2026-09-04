import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

type RevealVariant = "text" | "card" | "up" | "fade" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  /** delay in ms before the reveal animation starts */
  delay?: number;
  /** animation variant */
  variant?: RevealVariant;
  /** when > 0, direct children are revealed one after the other with this delay (ms) */
  stagger?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "ul";
};

const Reveal = ({
  children,
  delay = 0,
  variant = "text",
  stagger = 0,
  className = "",
  as = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const isWide = window.innerWidth >= 1024;
    setWide(isWide);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: isWide ? "0px 0px -28% 0px" : "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  const itemClass = `reveal reveal-${variant} ${visible ? "is-visible" : ""}`;
  const step = wide ? stagger * 2.2 : stagger;

  if (stagger > 0) {
    return (
      <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) return child;
          const el = child as ReactElement<{ className?: string; style?: React.CSSProperties }>;
          return cloneElement(el, {
            className: `${el.props.className ?? ""} ${itemClass}`.trim(),
            style: {
              ...(el.props.style ?? {}),
              transitionDelay: `${Math.round(delay + i * step)}ms`,
            },
          });
        })}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${itemClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
