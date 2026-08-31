import { useState } from "react";
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

const resultats = [
  { icon: Eye, value: "73 000", label: "vues" },
  { icon: Users, value: "+800", label: "abonnés" },
  { icon: TrendingUp, value: "+15 %", label: "de CA" },
];

const solutions = [
  { icon: PhoneCall, label: "Assistant vocal" },
  { icon: Mic, label: "Inventaires à la voix" },
  { icon: FileText, label: "Bons de transport dictés" },
  { icon: Camera, label: "Photo → traçabilité" },
  { icon: SprayCan, label: "Suivi des tâches d'hygiène" },
  { icon: Inbox, label: "Tri des e-mails et documents" },
];

const PourquoiSection = () => {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section id="approche" className="bg-blanc-casse py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy">
              Pourquoi Semaine 54 ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
            {/* PARCOURS */}
            <Reveal className="lg:sticky lg:top-24">
              <span className="font-semibold text-[11px] uppercase tracking-[0.18em] text-or">
                Parcours
              </span>
              <p className="text-ardoise/80 leading-relaxed mt-3">
                Je suis <strong className="text-navy">Clément, 35 ans</strong>, à l'initiative de{" "}
                <strong className="text-navy">Semaine 54</strong>. Après une dizaine d'années dans
                différents métiers de la <strong className="text-navy">grande distribution</strong>,
                j'explore et utilise depuis plus de trois ans les{" "}
                <strong className="text-navy">outils d'IA dans des contextes professionnels</strong>.
              </p>

              <p className="font-bold text-navy text-lg sm:text-xl leading-snug mt-5 pl-4 border-l-2 border-or/40">
                Le déclic est venu en accompagnant{" "}
                <span className="text-or">une poissonnerie du Pays d'Iroise.</span>
              </p>
            </Reveal>

            {/* IMAGE */}
            <Reveal
              delay={80}
              className="flex flex-col justify-center items-center lg:items-end gap-3 lg:pt-2 lg:pr-10"
            >
              <img
                src="/__l5e/assets-v1/a92c6803-183b-4941-a2e2-ed7c66e2966e/poissonnerie-ecosysteme.png"
                alt="Schéma de l'écosystème IA déployé pour la poissonnerie : automatisations, suivi et communication"
                className="w-full max-w-[340px] rounded-xl shadow-lg cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
                onMouseEnter={() => setZoomOpen(true)}
              />
              <span className="text-[11px] text-ardoise/70 italic">
                Survolez l'image pour l'agrandir
              </span>
            </Reveal>
          </div>

          {/* RÉSULTATS + QUOTIDIEN */}
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6 mt-6">
            <Reveal delay={80} className="bg-navy rounded-xl p-5 sm:p-6">
              <span className="font-semibold text-[11px] uppercase tracking-[0.18em] text-or">
                Résultats mesurés
              </span>
              <p className="text-sm text-blanc-casse/80 leading-relaxed mt-2">
                Une stratégie marketing pilotée par l'IA pour développer sa visibilité.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                {resultats.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-lg border border-or/30 bg-or/10 px-2 py-3 text-center"
                  >
                    <r.icon size={16} className="text-or mx-auto mb-1.5" />
                    <div className="font-bold text-blanc-casse text-base sm:text-xl leading-none">
                      {r.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-blanc-casse/70 mt-1">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={160}
              className="rounded-xl border border-navy/10 bg-navy/5 p-5 sm:p-6"
            >
              <span className="font-semibold text-[11px] uppercase tracking-[0.18em] text-or">
                Puis son quotidien
              </span>
              <p className="text-sm text-blanc-casse/80 leading-relaxed mt-2 mb-4">
                L'IA étendue au fonctionnement de tous les jours :
              </p>
              <ul className="flex flex-wrap gap-2">
                {solutions.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center gap-2 rounded-full border border-navy/10 bg-blanc-casse px-3 py-1.5"
                  >
                    <s.icon size={16} className="text-or" />
                    <span className="text-xs text-navy">{s.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* ZOOM OVERLAY */}
        {zoomOpen && (
          <div
            className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
            onMouseLeave={() => setZoomOpen(false)}
            onClick={() => setZoomOpen(false)}
          >
            <img
              src="/__l5e/assets-v1/a92c6803-183b-4941-a2e2-ed7c66e2966e/poissonnerie-ecosysteme.png"
              alt="Schéma de l'écosystème IA agrandi : automatisations, suivi et communication"
              className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PourquoiSection;
