import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="audit" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-8 text-center">
            Audit stratégique — <span className="text-or-mat">Gratuit</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left: description */}
            <div className="flex-1">
              <p className="font-dm text-blanc-casse/70 mb-3">
                Un premier échange de 30 minutes pour :
              </p>
              <ul className="space-y-2">
                {[
                  "comprendre votre activité",
                  "identifier les tâches chronophages",
                  "voir si une solution pertinente existe",
                  "sans engagement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-sm text-blanc-casse/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA + sous-texte */}
            <div className="flex-shrink-0 text-center">
              <Button variant="cta" size="lg" asChild className="text-lg px-10 py-6">
                <a href="#contact">
                  Être rappelé
                  <ArrowRight size={20} />
                </a>
              </Button>

              <div className="mt-4 max-w-xs">
                <p className="font-dm text-blanc-casse/60 text-sm leading-relaxed">
                  Je vous recontacte pour convenir d'un créneau pour votre audit (appel ou visio) et répondre à vos éventuelles questions.
                </p>
                <p className="font-dm text-blanc-casse/60 text-sm mt-2 leading-relaxed">
                  Vous pouvez aussi m'appeler, m'envoyer un SMS ou un email directement.
                </p>
                <p className="font-dm text-blanc-casse/50 text-xs mt-2 italic">
                  Également disponible en soirée et le week-end.
                </p>
              </div>
            </div>
          </div>

          <p className="font-dm text-blanc-casse/70 text-sm mt-8 text-center">
            Un premier échange permet souvent d'identifier immédiatement plusieurs heures de tâches automatisables chaque semaine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
