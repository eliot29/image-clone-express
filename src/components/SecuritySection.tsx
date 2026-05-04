import { Shield, Scale } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="bg-blanc-casse pt-2 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield size={22} className="text-or-mat shrink-0" />
              <h2 className="font-dm font-bold text-2xl text-navy">Sécurité & RGPD</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-3 justify-center">
                <Scale size={18} className="text-or-mat shrink-0 mt-1" />
                <p className="font-dm text-ardoise/80 text-sm leading-relaxed text-center">
                  Les solutions sont conçues avec une <span className="font-semibold text-navy">gestion stricte des accès</span> et une attention portée à la <span className="font-semibold text-navy">confidentialité des données</span>.
                  <br /><br />
                  La conformité RGPD est intégrée dès le diagnostic, sans se substituer à vos obligations légales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
