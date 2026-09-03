import type { ReactNode } from "react";
import { useTilt } from "@/hooks/useScrollFx";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

/** Carte inclinée en 3D au survol du curseur (désactivée sur tactile). */
const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const ref = useTilt<HTMLDivElement>(6);
  return (
    <div ref={ref} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
};

export default TiltCard;
