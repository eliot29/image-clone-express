import { useEffect, useState } from "react";
import { Clock, Mail, FileText, Share2, FolderOpen, Search, BarChart3, Image, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
{ icon: FileText, text: "Devis générés en quelques minutes" },
{ icon: Search, text: "Informations trouvées instantanément" },
{ icon: Mail, text: "Relances clients envoyés automatiquement" },
{ icon: PhoneCall, text: "Appels entrants traités 24h/24" },
{ icon: Share2, text: "Réseaux sociaux alimentés sans effort" },
{ icon: FolderOpen, text: "Administratif traité sans y toucher" },
{ icon: Clock, text: "Comparatifs fournisseurs prêts en un clic" },
{ icon: BarChart3, text: "Fichiers Excel analysés à la demande" },
{ icon: Image, text: "Supports visuels créés sans designer" }];


const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setOffset((o) => (o + 2) % painPoints.length);
    }, 1600);
    return () => clearInterval(id);
  }, [paused]);

  const visible = [0, 1].map((k) => painPoints[(offset + k) % painPoints.length]);

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
            {"\n"}
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
          

          

          {/* Pain points — carrousel 2 colonnes */}
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4 max-w-2xl mx-auto text-left min-h-[3.5rem] items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {visible.map((point, k) => (
              <div
                key={`${offset}-${k}`}
                className="flex items-center gap-2 sm:gap-3 text-ardoise font-dm text-xs sm:text-sm animate-slide-in-right"
              >
                <point.icon size={18} className="text-or-mat/60 shrink-0" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          <p className="font-dm text-ardoise text-sm mb-2 italic">
            Et si toutes ces tâches se faisaient automatiquement ?
          </p>

          {/* Stat highlight */}
          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center mb-6">
            Une année compte 52 semaines. Gagnez votre semaine 54
          </p>

          <div className="mt-8 flex justify-center">
            <Button variant="cta" size="lg" className="w-full sm:w-auto text-center whitespace-normal" asChild>
              <a href="#calculateur">Découvrez combien de temps vous pourriez gagner</a>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;