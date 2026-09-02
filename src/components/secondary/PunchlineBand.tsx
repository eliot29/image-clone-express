import type { ReactNode } from "react";
import Reveal from "@/components/secondary/Reveal";

type PunchlineBandProps = {
  children: ReactNode;
  /** court filet or centré au-dessus du texte (variante navy) */
  rule?: boolean;
  /** navy : bandeau pleine largeur · filet : fond clair, gros filet or à gauche */
  tone?: "navy" | "filet";
  id?: string;
};

const PunchlineBand = ({ children, rule = false, tone = "navy", id }: PunchlineBandProps) => {
  if (tone === "filet") {
    return (
      <section id={id} className="bg-blanc-casse py-12 md:py-16">
        <div className="section-wrap">
          <Reveal variant="text">
            <p className="txt-punchline text-navy text-left border-l-[6px] border-or-mat pl-6 sm:pl-8 max-w-3xl">
              {children}
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="bg-navy py-12 md:py-16">
      <div className="section-wrap">
        <Reveal variant="text">
          {rule && <div className="w-[60px] h-[3px] bg-or-mat mx-auto mb-6" />}
          <p className="txt-punchline text-blanc-casse text-center max-w-3xl mx-auto">
            {children}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PunchlineBand;
