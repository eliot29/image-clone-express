import { ReactNode } from "react";

type Variant = "soft-light" | "soft-dark" | "accent-light" | "accent-dark";

interface HighlightProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/**
 * Bloc d'accent visuel sobre pour mettre en valeur une punchline.
 * Variantes adaptées aux sections claires (blanc-casse) ou sombres (navy).
 */
const Highlight = ({ children, variant = "accent-light", className = "" }: HighlightProps) => {
  const styles: Record<Variant, string> = {
    "soft-light": "bg-or-mat/5 border-l-4 border-or-mat text-navy",
    "soft-dark": "bg-blanc-casse/5 border-l-4 border-or-mat text-blanc-casse",
    "accent-light": "bg-or-mat/10 border border-or-mat/30 text-navy",
    "accent-dark": "bg-or-mat/15 border border-or-mat/40 text-blanc-casse",
  };

  return (
    <div
      className={`rounded-xl px-6 py-5 my-6 font-dm font-semibold leading-snug ${styles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Highlight;