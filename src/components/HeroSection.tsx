import { Clock, Mail, FileText, Share2, PhoneCall, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMecanisme from "@/assets/hero-mecanisme.jpg";

const painPoints = [
  { icon: FileText, text: "Devis générés en quelques minutes" },
  { icon: Search, text: "Documents lus et classés instantanément" },
  { icon: Mail, text: "Relances clients envoyées automatiquement" },
  { icon: Share2, text: "Réseaux sociaux alimentés sans effort" },
  { icon: PhoneCall, text: "Appels entrants traités 24h/24" },
  { icon: Clock, text: "Comparatifs fournisseurs prêts en un clic" },
];

const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="section-shell pt-24 pb-16 lg:pt-28 lg:pb-24 relative z-10">
        <div className="hero-stagger text-center">
          <p className="font-dm font-bold italic text-navy text-[17px] mb-5 leading-snug">
            Une année compte 52 semaines.<br className="sm:hidden" />{" "}
            <span className="text-or-mat-clair">Gagnez votre Semaine 54.</span>
          </p>

          <h1 className="font-dm font-extrabold text-[34px] sm:text-[46px] lg:text-[56px] text-navy mb-5 leading-[1.1] tracking-[-0.02em] max-w-3xl mx-auto">
            J'automatise ce qui vous fait perdre du temps.
          </h1>

          <p className="font-dm text-ardoise text-[18px] sm:text-[20px] mb-8 leading-snug max-w-2xl mx-auto">
            Je comprends d'abord votre métier. Ensuite seulement, je construis.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20">
              <span className="w-2 h-2 rounded-full bg-or-mat" />
              <span className="font-dm text-[12px] sm:text-[13px] text-or-mat-clair font-semibold tracking-wide uppercase whitespace-nowrap">
                Basé à Brest (Finistère)
              </span>
            </span>
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-[12px] sm:text-[13px] text-navy font-medium whitespace-nowrap">
                Agence IA pour TPE et PME bretonnes
              </span>
            </span>
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-[12px] sm:text-[13px] text-navy font-medium whitespace-nowrap">
                Automatisations sur mesure
              </span>
            </span>
          </div>

          <div className="max-w-[560px] mx-auto mb-10">
            <img
              src={heroMecanisme}
              alt="Schéma : des tâches répétitives entrent dans un mécanisme d'engrenages et ressortent en temps gagné"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-xl mix-blend-multiply"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-6 gap-y-4 mb-10">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 min-h-[56px] h-full text-ardoise font-dm text-[16px] leading-[1.5] text-center"
              >
                <point.icon size={18} className="text-or-mat shrink-0" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="cta" size="lg" className="w-full sm:w-auto text-center whitespace-normal" asChild>
              <a href="#calculateur">Découvrez combien de temps vous pourriez gagner par an</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
