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
import CursorGlow from "@/components/secondary/CursorGlow";
import { useStickyProgress } from "@/hooks/useScrollFx";
import { isFinePointer, prefersReducedMotion } from "@/lib/scroll-fx";

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
  const [pinned, setPinned] = useState(false);
  const [bars, setBars] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const check = () =>
      setPinned(
        window.innerWidth >= 1024 && isFinePointer() && !prefersReducedMotion()
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { ref: pinRef } = useStickyProgress<HTMLDivElement>(pinned);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen]);

  return (
    <section id="approche" className="relative bg-navy py-14 md:py-20">
      <CursorGlow />
      <div className="section-wrap relative">
        <Reveal variant="text" className="text-center mb-8">
          <p className="font-dm font-normal text-[18px] leading-snug text-blanc-casse/60 text-center max-w-2xl mx-auto mb-4">
            Des solutions autrefois réservées aux grandes entreprises sont désormais à la portée des PME.
          </p>
          <h2 className="txt-section text-blanc-casse">Pourquoi Semaine 54 ?</h2>
        </Reveal>

        {/* RANGÉE 1 */}
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-stretch">
          {/* PARCOURS */}
          <Reveal className="flex flex-col justify-center">
            <span className="txt-etiquette text-gris-bleu">Parcours</span>
            <p className="txt-corps text-blanc-casse/80 mt-3 max-w-2xl">
              Je suis <strong className="text-blanc-casse font-bold">Clément, 35 ans</strong>, à l'initiative de{" "}
              <strong className="text-blanc-casse font-bold">Semaine 54</strong>. Après une dizaine d'années dans
              différents métiers de la <strong className="text-blanc-casse font-bold">grande distribution</strong>,
              j'explore et utilise depuis plus de trois ans les{" "}
              <strong className="text-blanc-casse font-bold">outils d'IA dans des contextes professionnels</strong>.
            </p>

            {/* SOUS-PUNCHLINE 1 */}
            <div className="w-[60px] h-[3px] bg-or-mat mx-auto mt-6 mb-4" />
            <p className="txt-souspunchline text-blanc-casse text-center max-w-3xl mx-auto">
              Le déclic est venu en accompagnant une poissonnerie du Pays d'Iroise.
            </p>
          </Reveal>


          {/* RÉSULTATS MESURÉS */}
          <Reveal className="h-full">
          <div className="card-lift h-full bg-white/5 border border-blanc-casse/10 rounded-xl p-5 sm:p-6">
            <span className="txt-etiquette text-gris-bleu">Résultats mesurés</span>
            <p className="font-dm text-sm text-blanc-casse/70 leading-relaxed mt-2">
              Une stratégie marketing pilotée par l'IA pour développer sa visibilité.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
              {resultats.map((r, i) => (
                <div
                  key={r.label}
                  className="rounded-lg bg-white/5 border border-or-mat/25 px-2 py-3 text-center"
                >
                  <r.icon size={16} className="text-or-mat mx-auto mb-1.5" />
                  <div className="stat-focus font-bold text-or-mat text-[34px] sm:text-[42px] leading-none">
                    <CountUp
                      value={r.value}
                      prefix={r.prefix}
                      suffix={r.suffix}
                      group={r.group}
                      delay={i * 200}
                      onProgress={(p) =>
                        setBars((prev) =>
                          prev[i] === p ? prev : prev.map((v, j) => (j === i ? p : v))
                        )
                      }
                    />
                  </div>
                  <div className="h-[3px] w-full bg-blanc-casse/15 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-or-mat rounded-full origin-left"
                      style={{ transform: `scaleX(${bars[i]})` }}
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs text-blanc-casse/70 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>

        {/* RANGÉE 2 — PUIS SON QUOTIDIEN, pleine largeur */}
        <Reveal className="mt-6">
          <div className="card-lift h-full bg-white/5 border border-blanc-casse/10 rounded-xl p-5 sm:p-6">
            <span className="txt-etiquette text-gris-bleu">Puis son quotidien</span>
            <p className="font-dm text-sm text-blanc-casse/70 leading-relaxed mt-2 mb-4">
              L'IA étendue au fonctionnement de tous les jours :
            </p>
            <Reveal
              as="ul"
              variant="card"
              stagger={70}
              className="grid grid-cols-2 lg:grid-cols-3 gap-px items-stretch bg-blanc-casse/10 rounded-lg overflow-hidden"
            >
              {solutions.map((s) => (
                <li
                  key={s.label}
                  className="bg-navy p-4 flex flex-col items-center text-center gap-2"
                >
                  <s.icon size={22} strokeWidth={1.5} className="text-or-mat" />
                  <span className="text-[14px] text-blanc-casse leading-snug">{s.label}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </Reveal>

        {/* SCHÉMA POISSONNERIE — moment épinglé */}
        <div ref={pinRef} className={pinned ? "mt-12 h-[180vh]" : "mt-12"}>
        <Reveal className={pinned ? "sticky top-24" : ""}>
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="block w-full cursor-zoom-in"
            aria-label="Agrandir le schéma de l'écosystème IA de la poissonnerie"
          >
            <div className="bg-blanc-casse rounded-xl p-4">
              <img
                src={SCHEMA_SRC}
                alt="Schéma de l'écosystème IA déployé pour la poissonnerie : automatisations, suivi et communication"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </button>
          <p className="text-[11px] text-blanc-casse/70 italic text-center mt-3">
            Cliquez pour agrandir
          </p>
        </Reveal>
        </div>

        {/* CONCLUSION DE SECTION */}
        <Reveal variant="text" className="text-center mt-12">
          <div className="w-[60px] h-[3px] bg-or-mat mx-auto mb-4" />
          <p className="txt-souspunchline text-blanc-casse text-center max-w-3xl mx-auto">
            Mon approche vient du réel. Pas d'une démonstration théorique.
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
