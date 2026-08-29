import { Clock, Mail, FileText, Share2, PhoneCall, Search, BarChart3, Image, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  { icon: FileText, text: "Devis générés en quelques minutes" },
  { icon: Search, text: "Documents lus et classés instantanément" },
  { icon: Mail, text: "Relances clients envoyées automatiquement" },
  { icon: Share2, text: "Réseaux sociaux alimentés sans effort" },
  { icon: PhoneCall, text: "Appels entrants traités 24h/24" },
  { icon: Clock, text: "Comparatifs fournisseurs prêts en un clic" },
  { icon: BarChart3, text: "Fichiers Excel analysés à la demande" },
  { icon: Image, text: "Supports visuels créés sans designer" },
  { icon: Mic, text: "Stock mis à jour à la voix" },
];

const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="container mx-auto px-6 pt-28 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - hidden on mobile */}
          <div className="hidden sm:flex justify-center mb-6">
            <img
              src="/logo-semaine54-dark-new.svg"
              alt="Semaine 54"
              className="h-14 lg:h-16 w-auto"
            />
          </div>

          {/* Punchline élégante */}
          <p className="font-bold italic text-navy text-[17px] sm:text-[18px] mb-8 leading-snug" style={{ fontFamily: "'Anonymous Pro', monospace" }}>
            Une année compte 52 semaines.<br className="sm:hidden" /> <span className="text-or-mat-clair">Gagnez votre Semaine 54.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20">
              <span className="w-2 h-2 rounded-full bg-or-mat" />
              <span className="font-dm text-[13px] text-or-mat-clair font-medium tracking-wide uppercase">Basé à Brest (Finistère)</span>
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-[13px] text-navy font-medium">Agence IA pour TPE et PME bretonnes</span>
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-[13px] text-navy font-medium">Automatisations & conseils IA sur-mesure</span>
            </span>
          </div>

          <h1 className="font-dm font-extrabold text-[34px] sm:text-[44px] lg:text-[54px] text-navy mb-4 max-w-4xl mx-auto leading-[1.1] tracking-[-0.02em]">
            L'IA qui rend 120 heures par an aux PME bretonnes.
          </h1>

          <p className="font-dm font-bold text-ardoise text-[20px] sm:text-[22px] mb-10 leading-snug">
            Gagnez du temps. Gagnez en productivité. Gagnez en rentabilité.
          </p>

          {/* Pain points - grille statique */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-left max-w-4xl mx-auto mb-10">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-ardoise font-dm text-[16px] leading-[1.7]"
              >
                <point.icon size={18} className="text-or-mat shrink-0" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          {/* Stat highlight */}
          <p className="font-dm font-bold text-navy text-[20px] sm:text-[22px] leading-snug max-w-full mx-auto text-center">
            <span className="text-or-mat-clair">30 minutes</span> gagnées par jour = <span className="text-or-mat-clair">120 heures</span> par an.
          </p>

          <div className="mt-8 flex justify-center">
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
