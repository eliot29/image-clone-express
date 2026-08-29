import { useEffect, useState } from "react";
import { Clock, Mail, FileText, Share2, PhoneCall, Search, BarChart3, Image, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  { icon: FileText, text: "Devis générés en quelques minutes" },
  { icon: Search, text: "Documents lus et classés instantanément" },
  { icon: Mail, text: "Relances clients envoyés automatiquement" },
  { icon: Share2, text: "Réseaux sociaux alimentés sans effort" },
  { icon: PhoneCall, text: "Appels entrants traités 24h/24" },
  { icon: Clock, text: "Comparatifs fournisseurs prêts en un clic" },
  { icon: BarChart3, text: "Fichiers Excel analysés à la demande" },
  { icon: Image, text: "Supports visuels créés sans designer" },
  { icon: Mic, text: "Stock mis à jour à la voix" },
];

const GROUP_SIZE = 3;
const groups: typeof painPoints[] = [];
for (let i = 0; i < painPoints.length; i += GROUP_SIZE) {
  groups.push(painPoints.slice(i, i + GROUP_SIZE));
}
const SLIDE_INTERVAL = 2200;


const HeroSection = () => {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % groups.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-6 lg:pt-24 lg:pb-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - hidden on mobile */}
          <div className="hidden sm:flex justify-center mt-12 mb-6">
            <img
              src="/logo-semaine54-dark-new.svg"
              alt="Semaine 54"
              className="h-20 lg:h-24 w-auto"
            />
          </div>

          {/* Punchline élégante */}
          <p className="font-bold italic text-navy text-xs sm:text-sm mt-8 sm:mt-0 mb-8 leading-tight" style={{ fontFamily: "'Anonymous Pro', monospace" }}>
            Une année compte 52 semaines.<br className="sm:hidden" /> <span className="text-or-mat">Gagnez votre Semaine 54.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20">
              <span className="w-2 h-2 rounded-full bg-or-mat animate-pulse" />
              <span className="font-dm text-sm text-or-mat font-medium tracking-wide uppercase">Basé à Brest (Finistère)</span>
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-sm text-navy font-medium">Agence IA pour TPE et PME bretonnes</span>
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-sm text-navy font-medium">Automatisations & conseils IA sur-mesure</span>
            </span>
          </div>

          {/* Punchline */}
          <h1 className="font-dm font-bold text-lg sm:text-xl text-navy mb-6 max-w-full mx-auto leading-snug tracking-tight">
            Gagnez du temps. Gagnez en productivité. Gagnez en rentabilité.
          </h1>

          {/* Punchline */}
          



          

          {/* Intro text */}
          

          

          {/* Pain points - carrousel par groupes de 3 */}
          <div
            className="relative max-w-3xl mx-auto mb-6 overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-live="polite"
          >
            <div key={slide} className="animate-slide-quick">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                {groups[slide].map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-ardoise font-dm text-sm animate-slide-quick-item"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <point.icon size={18} className="text-or-mat/60 shrink-0" />
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Points de repère du carrousel */}
          <div className="flex justify-center gap-2 mb-4">
            {groups.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Afficher le groupe ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === slide ? "w-6 bg-or-mat" : "w-1.5 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>

          <p className="font-dm text-ardoise text-sm mb-6 italic">
            {"\n"}
          </p>

          {/* Stat highlight */}
          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center">
            <span className="text-or-mat">30 minutes</span> gagnées par jour = <span className="text-or-mat">120 heures</span> par an.
          </p>

          <div className="mt-8 flex justify-center">
            <Button variant="cta" size="lg" className="w-full sm:w-auto text-center whitespace-normal" asChild>
              <a href="#calculateur">Découvrez combien de temps vous pourriez gagner par an</a>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;