import { Clock, Mail, FileText, Share2, FolderOpen, Search, BarChart3, Image, PhoneCall } from "lucide-react";
import CalculateurSection from "@/components/CalculateurSection";



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
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-6 lg:pt-24 lg:pb-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
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
              <span className="font-dm text-sm text-navy font-medium">Automatisations & conseils IA sur-mesure</span>
            </span>
          </div>

          {/* Punchline 1 */}
          <h1 className="font-dm font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.15] tracking-[-0.01em] text-navy max-w-4xl mx-auto py-10">
            Maîtriser les outils IA demande du temps.
            <br />
            <span className="text-navy">Ce temps, je l'ai pris. Mon travail consiste à vous faire </span>
            <span className="text-or-mat">gagner le vôtre</span>.
          </h1>

          {/* Punchline */}
          



          

          {/* Intro text */}
          

          

          {/* Pain points — 2 lignes en flux horizontal continu */}
          <div
            className="group mb-4 space-y-3"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
            }}
          >
            {[0, 1].map((row) => {
              const items = painPoints.filter((_, i) => i % 2 === row);
              const track = [...items, ...items];
              return (
                <div key={row} className="overflow-hidden">
                  <div
                    className={`flex w-max marquee-row ${
                      row === 0 ? "task-marquee-forward" : "task-marquee-reverse"
                    }`}
                  >
                    {track.map((point, k) => (
                      <div
                        key={`${row}-${k}`}
                        className="flex items-center gap-2 sm:gap-3 text-ardoise font-dm text-xs sm:text-sm whitespace-nowrap px-4 sm:px-6"
                      >
                        <point.icon size={18} className="text-or-mat/60 shrink-0" />
                        <span>{point.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>


          <p className="font-dm font-bold text-ardoise text-base sm:text-lg mb-2 italic">
            Et si toutes ces tâches se faisaient en autonomie ?
          </p>

          {/* Punchline + calculateur dans un même bloc */}
          <div className="mt-3 bg-card rounded-2xl shadow-lg px-5 sm:px-10 py-8 sm:py-12 text-left max-w-5xl mx-auto">
            <p className="font-bold text-navy text-lg sm:text-xl lg:text-3xl leading-snug text-center mb-6 whitespace-nowrap">

              Une année compte 52 semaines. Gagnez votre{" "}
              <span className="text-or-lure text-or-mat">Semaine 54</span>.
            </p>
            <CalculateurSection />
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
