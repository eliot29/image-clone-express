import type { ReactNode } from "react";
import Reveal from "@/components/secondary/Reveal";

type PunchlineBandProps = {
  children: ReactNode;
  /** court filet or centré au-dessus du texte */
  rule?: boolean;
  id?: string;
};

const PunchlineBand = ({ children, rule = false, id }: PunchlineBandProps) => (
  <section id={id} className="bg-navy py-16 md:py-24">
    <div className="section-wrap">
      <Reveal>
        {rule && <div className="w-[60px] h-[3px] bg-or-mat mx-auto mb-6" />}
        <p className="txt-punchline text-blanc-casse text-center max-w-4xl mx-auto">
          {children}
        </p>
      </Reveal>
    </div>
  </section>
);

export default PunchlineBand;
