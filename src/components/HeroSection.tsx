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

const HERO_WORDS = "Gagnez du temps. Gagnez en productivité. Gagnez en rentabilité.".split(" ");
const ACCENT_WORDS = new Set(["temps.", "productivité.", "rentabilité."]);




const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="section-wrap pt-20 pb-14 lg:pt-24 lg:pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center hero-stagger">
          {/* Logo - hidden on mobile */}
          <div className="hidden sm:flex justify-center mt-12 mb-6">
            <img
              src="/logo-semaine54-dark-new.svg"
              alt="Semaine 54 — automatisation et IA pour les TPE et PME bretonnes"
              className="h-20 lg:h-24 w-auto"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { key: "brest", node: (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20">
                  <span className="w-2 h-2 rounded-full bg-or-mat animate-pulse" />
                  <span className="font-dm text-sm text-or-mat font-medium tracking-wide uppercase">Basé à Plougonvelin · à 20 min de Brest</span>
                </span>
              ) },
              { key: "agence", node: (
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
                  <span className="font-dm text-sm text-navy font-medium">Finistère · Côtes-d'Armor · Morbihan</span>
                </span>
              ) },
              { key: "auto", node: (
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
                  <span className="font-dm text-sm text-navy font-medium">Automatisations & conseils IA sur-mesure</span>
                </span>
              ) },
            ].map((b, i) => (
              <span
                key={b.key}
                className="badge-pop inline-flex"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {b.node}
              </span>
            ))}
          </div>

          {/* Punchline */}
          <h1 className="font-dm font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] text-navy mb-6 max-w-full mx-auto leading-[1.15] tracking-[-0.02em]">
            {HERO_WORDS.map((word, i) => (
              <span key={`${word}-${i}`} className="word-mask mr-[0.25em]">
                <span
                  className={`word ${ACCENT_WORDS.has(word) ? "text-or-mat word-accent" : ""}`}
                  style={{
                    animationDelay: `${200 + i * 70}ms`,
                    ["--ud" as string]: `${200 + i * 70 + 300}ms`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
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


          <div className="w-10 h-[2px] bg-or-mat mx-auto mb-4" />
          <p className="txt-souspunchline text-navy mb-2">
            Et si toutes ces tâches se faisaient en autonomie ?
          </p>

          {/* Punchline + calculateur dans un même bloc */}
          <div className="mt-3 bg-card rounded-2xl shadow-lg px-5 sm:px-10 py-8 sm:py-12 text-left max-w-5xl mx-auto">
            <p className="font-bold text-navy text-[19px] sm:text-[22px] lg:text-[24px] leading-snug text-center mb-6 text-balance">
              Une année compte 52 semaines. Gagnez votre{" "}
              <span className="text-or-mat">Semaine 54</span>.
            </p>

            <CalculateurSection />
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
