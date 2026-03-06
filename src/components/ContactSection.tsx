import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-navy py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-6">
            Audit stratégique — <span className="text-or-mat">Gratuit</span>
          </h2>

          <p className="font-dm text-blanc-casse/70 mb-3">
            Un premier échange de 30 minutes pour :
          </p>

          <ul className="space-y-2 mb-8 max-w-md mx-auto text-left">
            {[
              "comprendre votre activité",
              "identifier les tâches chronophages",
              "voir si une solution pertinente existe",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-dm text-sm text-blanc-casse/60">
                <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="font-dm text-xs text-blanc-casse/40 mb-8">
            Sans engagement.
          </p>

          <Button variant="cta" size="lg" className="mb-10" asChild>
            <a href="#contact">
              Réserver mon audit
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
