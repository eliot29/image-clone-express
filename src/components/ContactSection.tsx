import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-navy py-6">
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
                "sans engagement"].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 font-dm text-sm text-blanc-casse/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-1.5 shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="flex-shrink-0">
              <Button variant="cta" size="lg" asChild className="text-lg px-10 py-6">
                <a href="#contact">
                  Réserver mon audit
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>

          <p className="font-dm font-bold text-blanc-casse text-lg sm:text-xl text-center mt-6 leading-snug max-w-full mx-auto">Une semaine compte 52 semaines. La Semaine 54 est celle que vous récupérez

            <span className="text-or-mat"></span>
          </p>

        </div>
      </div>
    </section>);
};

export default ContactSection;