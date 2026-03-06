import { Shield } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="bg-blanc-casse py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gris-perle rounded-xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                <Shield size={20} className="text-or-mat" />
              </div>
              <div>
                <h2 className="font-dm font-bold text-2xl text-navy mb-4">Sécurité & RGPD</h2>
                <p className="font-dm text-ardoise/70 leading-relaxed">
                  Les automatisations sont déployées via n8n, une infrastructure professionnelle dédiée aux workflows automatisés. Les accès sont configurés au strict nécessaire, avec gestion sécurisée des identifiants et des connexions. La conformité RGPD dépend de votre organisation et est abordée dès la phase de diagnostic. Semaine 54 conçoit les automatisations selon les bonnes pratiques, sans se substituer à vos obligations légales.
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
