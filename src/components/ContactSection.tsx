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

          <p className="font-dm text-blanc-casse/70 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Un premier échange de 30 minutes pour comprendre votre activité, identifier vos tâches chronophages et voir si une solution pertinente existe. Sans engagement.
          </p>

          <div className="text-center mb-8">
            <Button variant="cta" size="lg" asChild className="text-lg px-10 py-6">
              <a href="#contact">
                Être rappelé
                <ArrowRight size={20} />
              </a>
            </Button>

            <div className="mt-6 max-w-lg mx-auto">
              <p className="font-dm text-blanc-casse/60 text-sm leading-relaxed">
                Je vous contacte en premier lieu pour répondre à vos éventuelles questions et planifier votre audit ensemble — l'audit se tient ensuite en appel ou en visio, selon votre préférence.
              </p>
              <p className="font-dm text-blanc-casse/60 text-sm mt-3 leading-relaxed">
                Vous pouvez aussi m'appeler, m'envoyer un SMS ou un email directement.
              </p>
              <p className="font-dm text-blanc-casse/50 text-xs mt-2 italic">
                Également disponible en soirée et le week-end.
              </p>
            </div>
          </div>

          <p className="font-dm text-blanc-casse/70 text-sm italic text-center">
            Un premier échange permet souvent d'identifier immédiatement plusieurs heures de tâches automatisables chaque semaine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;