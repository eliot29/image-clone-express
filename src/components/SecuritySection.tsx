import { Shield, Scale } from "lucide-react";
import Reveal from "@/components/secondary/Reveal";

const SecuritySection = () => {
  return (
    <section className="bg-gris-perle py-12 md:py-16">
      <div className="section-wrap">
        <Reveal variant="card" className="bg-card rounded-xl shadow-card p-8 max-w-3xl mx-auto">
          <Reveal variant="text" className="flex items-center justify-center gap-3 mb-10">
            <Shield size={22} className="text-or-mat shrink-0" />
            <h2 className="txt-section text-navy">Sécurité & RGPD</h2>
          </Reveal>
          <Reveal variant="text" delay={140} className="flex items-start gap-3 justify-center">
            <Scale size={18} className="text-or-mat shrink-0 mt-1" />
            <p className="txt-corps text-ardoise/70 text-center">
              Les solutions sont conçues avec une{" "}
              <span className="font-semibold text-navy">gestion stricte des accès</span> et une
              attention portée à la{" "}
              <span className="font-semibold text-navy">confidentialité des données</span>.
              <br />
              <br />
              La conformité RGPD est intégrée dès le diagnostic, sans se substituer à vos
              obligations légales.
            </p>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};

export default SecuritySection;
