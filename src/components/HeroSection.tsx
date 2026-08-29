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
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div className="hero-stagger text-left">
            {/* Punchline élégante */}
            <p className="font-dm font-bold italic text-navy text-[18px] mb-4 leading-snug">
              Une année compte 52 semaines.<br className="sm:hidden" /> <span className="text-or-mat-clair">Gagnez votre Semaine 54.</span>
            </p>

            <h1 className="font-dm font-extrabold text-[30px] sm:text-[38px] lg:text-[46px] text-navy mb-4 leading-[1.1] tracking-[-0.02em]">
              Je comprends votre métier, puis j'automatise ce qui vous fait perdre du temps.
            </h1>

            <p className="font-dm font-bold text-ardoise text-[20px] sm:text-[22px] mb-8 leading-snug">
              Gagnez du temps. Gagnez en productivité. Gagnez en rentabilité.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20">
                <span className="w-2 h-2 rounded-full bg-or-mat" />
                <span className="font-dm text-[13px] text-or-mat-clair font-semibold tracking-wide uppercase">Basé à Brest (Finistère)</span>
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
                <span className="font-dm text-[13px] text-navy font-medium">Agence IA pour TPE et PME bretonnes</span>
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
                <span className="font-dm text-[13px] text-navy font-medium">Automatisations & conseils IA sur-mesure</span>
              </span>
            </div>

            {/* Pain points - grille statique */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-x-6 gap-y-4 text-left mb-10">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 min-h-[56px] h-full text-ardoise font-dm text-[16px] leading-[1.5]"
                >
                  <point.icon size={18} className="text-or-mat shrink-0" />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>

            <div className="flex">
              <Button variant="cta" size="lg" className="w-full sm:w-auto text-center whitespace-normal" asChild>
                <a href="#calculateur">Découvrez combien de temps vous pourriez gagner par an</a>
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:block">
            <img
              src={heroMecanisme}
              alt="Schéma : des tâches répétitives entrent dans un mécanisme d'engrenages et ressortent en temps gagné"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-xl mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
