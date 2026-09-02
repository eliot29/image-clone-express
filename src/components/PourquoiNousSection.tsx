import { useEffect, useState } from "react";
import {
  Eye,
  Users,
  TrendingUp,
  PhoneCall,
  Mic,
  FileText,
  Camera,
  SprayCan,
  Inbox,
} from "lucide-react";
import Reveal from "@/components/secondary/Reveal";
import CountUp from "@/components/secondary/CountUp";

const resultats = [
  { icon: Eye, value: 73000, prefix: "", suffix: "", group: true, label: "vues" },
  { icon: Users, value: 800, prefix: "+", suffix: "", group: false, label: "abonnés" },
  { icon: TrendingUp, value: 15, prefix: "+", suffix: " %", group: false, label: "de CA" },
];

const solutions = [
  { icon: PhoneCall, label: "Assistant vocal" },
  { icon: Mic, label: "Inventaires à la voix" },
  { icon: FileText, label: "Bons de transport dictés" },
  { icon: Camera, label: "Photo → traçabilité" },
  { icon: SprayCan, label: "Suivi des tâches d'hygiène" },
  { icon: Inbox, label: "Tri des e-mails et documents" },
];

const SCHEMA_SRC =
  "/__l5e/assets-v1/a92c6803-183b-4941-a2e2-ed7c66e2966e/poissonnerie-ecosysteme.png";

const PourquoiSection = () => {
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen]);

  return (
    <section id="approche" className="bg-blanc-casse py-14 md:py-20">
      <div className="section-wrap">
        <div className="text-center mb-8">
          <h2 className="txt-section text-navy">Pourquoi Semaine 54 ?</h2>
        </div>

        {/* PUNCHLINE 3 */}
        <Reveal className="mb-12">
          <p className="txt-punchline text-navy text-left border-l-4 border-or-mat pl-6 max-w-3xl">
            Mon approche vient du réel. Pas d'une démonstration théorique.
          </p>
        </Reveal>

        {/* RANGÉE 1 */}
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-stretch">
          {/* PARCOURS */}
          <Reveal className="flex flex-col justify-center">
            <span className="txt-etiquette text-navy">Parcours</span>
            <p className="txt-corps text-ardoise/70 mt-3 max-w-2xl">
              Je suis <strong className="text-navy">Clément, 35 ans</strong>, à l'initiative de{" "}
              <strong className="text-navy">Semaine 54</strong>. Après une dizaine d'années dans
              différents métiers de la <strong className="text-navy">grande distribution</strong>,
              j'explore et utilise depuis plus de trois ans les{" "}
              <strong className="text-navy">outils d'IA dans des contextes professionnels</strong>.
            </p>

            {/* SOUS-PUNCHLINE 1 */}
            <p className="txt-souspunchline text-navy mt-6 pl-4 border-l-2 border-or-mat/70">
              Le déclic est venu en accompagnant une poissonnerie du Pays d'Iroise.
            </p>
          </Reveal>


          {/* RÉSULTATS MESURÉS */}
          <Reveal className="h-full">
          <div className="card-lift h-full bg-card rounded-xl shadow-card p-5 sm:p-6">
            <span className="txt-etiquette text-navy">Résultats mesurés</span>
            <p className="font-dm text-sm text-ardoise/70 leading-relaxed mt-2">
              Une stratégie marketing pilotée par l'IA pour développer sa visibilité.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
              {resultats.map((r) => (
                <div
                  key={r.label}
                  className="rounded-lg bg-or-mat/15 px-2 py-3 text-center"
                >
                  <r.icon size={16} className="text-or-mat mx-auto mb-1.5" />
                  <div className="font-bold text-navy text-base sm:text-xl leading-none">
                    <CountUp
                      value={r.value}
                      prefix={r.prefix}
                      suffix={r.suffix}
                      group={r.group}
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs text-ardoise/70 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>

        {/* RANGÉE 2 — PUIS SON QUOTIDIEN, pleine largeur */}
        <Reveal className="mt-6">
          <div className="card-lift h-full bg-card rounded-xl shadow-card p-5 sm:p-6">
            <span className="txt-etiquette text-navy">Puis son quotidien</span>
            <p className="font-dm text-sm text-ardoise/70 leading-relaxed mt-2 mb-4">
              L'IA étendue au fonctionnement de tous les jours :
            </p>
            <ul className="flex flex-wrap gap-2">
              {solutions.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-2 rounded-full bg-gris-perle px-3 py-1.5"
                >
                  <s.icon size={16} className="text-or-mat" />
                  <span className="text-xs text-navy">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* SCHÉMA POISSONNERIE — pleine largeur */}
        <Reveal className="mt-12">
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="block w-full cursor-zoom-in"
            aria-label="Agrandir le schéma de l'écosystème IA de la poissonnerie"
          >
            <img
              src={SCHEMA_SRC}
              alt="Schéma de l'écosystème IA déployé pour la poissonnerie : automatisations, suivi et communication"
              className="w-full rounded-xl shadow-card"
              loading="lazy"
            />
          </button>
          <p className="text-[11px] text-ardoise/70 italic text-center mt-3">
            Cliquez pour agrandir
          </p>
        </Reveal>
      </div>

      {/* ZOOM OVERLAY */}
      {zoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setZoomOpen(false)}
        >
          <img
            src={SCHEMA_SRC}
            alt="Schéma de l'écosystème IA agrandi : automatisations, suivi et communication"
            className="max-w-[92vw] max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default PourquoiSection;
