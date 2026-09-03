import { Check, Clock, Mail, FileText, Share2, FolderOpen, Search, BarChart3, Image, PhoneCall } from "lucide-react";
import CalculateurSection from "@/components/CalculateurSection";



const painPoints = [
{ icon: FileText, text: "Devis générés en quelques minutes" },
{ icon: Search, text: "Informations trouvées instantanément" },
{ icon: Mail, text: "Relances clients envoyées automatiquement" },
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
        <div className="max-w-5xl mx-auto text-center hero-stagger">
          {/* Logo - hidden on mobile */}
          <div className="hidden sm:flex justify-center mt-12 mb-6">
            <img
              src="/logo-semaine54-dark-new.svg"
              alt="Semaine 54"
              className="h-20 lg:h-24 w-auto"
            />
          </div>

          {/* Punchline élégante */}
          <p className="font-medium text-navy text-[13px] mt-8 sm:mt-0 mb-8 leading-tight" style={{ fontFamily: "'Anonymous Pro', monospace" }}>
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
            Gagnez du <span className="text-or-mat">temps</span>. Gagnez en <span className="text-or-mat">productivité</span>. Gagnez en <span className="text-or-mat">rentabilité</span>.
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
              const items = painPoints
                .map((p, i) => ({ ...p, i }))
                .filter((_, i) => i % 2 === row);
              const track = [...items, ...items];
              return (
                <div key={row} className={`overflow-hidden ${row === 1 ? "opacity-70" : ""}`}>
                  <div
                    className={`flex w-max marquee-row ${
                      row === 0 ? "task-marquee-forward" : "task-marquee-reverse"
                    }`}
                  >
                    {track.map((point, k) => (
                      <div
                        key={`${row}-${k}`}
                        className={`task-item flex items-center gap-2 sm:gap-3 text-ardoise font-dm whitespace-nowrap px-4 sm:px-6 ${
                          row === 0 ? "text-[13px]" : "text-[12px]"
                        }`}
                        style={{ ["--i" as string]: point.i }}
                      >
                        <point.icon size={18} className="text-or-mat/60 shrink-0" />
                        <span className="relative inline-flex items-center pl-[17px]">
                          <Check
                            size={13}
                            className="task-check absolute left-0 text-or-mat"
                            aria-hidden="true"
                          />
                          {point.text}
                        </span>
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
