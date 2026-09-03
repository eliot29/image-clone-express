import type { ReactNode } from "react";
import Reveal from "@/components/secondary/Reveal";
import CursorGlow from "@/components/secondary/CursorGlow";

type PunchlineBandProps = {
  children: ReactNode;
  /** court filet or centré au-dessus du texte (variante navy) */
  rule?: boolean;
  /** navy : bandeau pleine largeur · filet : fond clair, filet or à gauche · or : bandeau or-mat */
  tone?: "navy" | "filet" | "or";
  /** élargit la punchline (max-w-5xl au lieu de max-w-3xl) */
  wide?: boolean;
  id?: string;
};

const PunchlineBand = ({ children, rule = false, tone = "navy", wide = false, id }: PunchlineBandProps) => {
  const widthClass = wide ? "!max-w-5xl" : "max-w-3xl";
  if (tone === "filet") {
    return (
      <section id={id} className="bg-blanc-casse py-12 md:py-16">
        <div className="section-wrap">
          <Reveal variant="text">
            <div className="w-[60px] h-[3px] bg-or-mat mx-auto mb-6" />
            <p className={`txt-punchline text-navy text-center ${widthClass} mx-auto`}>
              {children}
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  if (tone === "or") {
    return (
      <section id={id} className="bg-or-mat py-12 md:py-16">
        <div className="section-wrap">
          <Reveal variant="text">
            <p className={`txt-punchline text-navy text-center ${widthClass} mx-auto`}>
              {children}
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="relative bg-navy py-12 md:py-16">
      <CursorGlow />
      <div className="section-wrap relative">
        <Reveal variant="text">
          {rule && <div className="w-[60px] h-[3px] bg-or-mat mx-auto mb-6" />}
          <p className={`txt-punchline text-blanc-casse text-center ${widthClass} mx-auto`}>
            {children}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PunchlineBand;
