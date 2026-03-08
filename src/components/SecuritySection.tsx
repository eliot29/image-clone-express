import { Shield, Lock, Server, Scale } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="bg-blanc-casse pt-2 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gris-perle rounded-xl p-8 md:p-10 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                <Shield size={18} className="text-or-mat" />
              </div>
              <h2 className="font-dm font-bold text-2xl text-navy">Sécurité & RGPD</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Server size={18} className="text-or-mat shrink-0 mt-1" />
                <p className="font-dm text-ardoise/80 text-sm leading-relaxed">
                  Les automatisations sont déployées via <span className="font-semibold text-navy">n8n</span>, une infrastructure professionnelle dédiée aux workflows automatisés.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Lock size={18} className="text-or-mat shrink-0 mt-1" />
                <p className="font-dm text-ardoise/80 text-sm leading-relaxed">
                  Les accès sont configurés au strict nécessaire, avec <span className="font-semibold text-navy">gestion sécurisée</span> des identifiants et des connexions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Scale size={18} className="text-or-mat shrink-0 mt-1" />
                <p className="font-dm text-ardoise/80 text-sm leading-relaxed">
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
