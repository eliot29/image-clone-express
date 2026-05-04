import { Shield, Scale } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="bg-blanc-casse pt-2 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gris-perle rounded-xl p-8 md:p-10 border border-border">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield size={22} className="text-or-mat shrink-0" />
              <h2 className="font-dm font-bold text-2xl text-navy">Sécurité & RGPD</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-3 justify-center">
                <Scale size={18} className="text-or-mat shrink-0 mt-1" />
                <p className="font-dm text-ardoise/80 text-sm leading-relaxed text-center">
                  La conformité RGPD est abordée dès le diagnostic. Semaine 54 conçoit selon les <span className="font-semibold text-navy">bonnes pratiques</span>, sans se substituer à vos obligations légales.
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
