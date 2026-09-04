import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/secondary/Reveal";
import { useParallax } from "@/hooks/useScrollFx";


const steps = [
{
  num: "01",
  title: "Diagnostic gratuit (20/30 min)",
  desc: "Visio ou téléphone. Comprendre votre activité, vos contraintes et vos objectifs. Identifier les tâches qui consomment le plus de temps et celles qui offrent le meilleur retour sur investissement. L'occasion de déterminer si le besoin relève d'une mise en place de solution ou d'un accompagnement.",
  note: "Sans engagement. Aucune vente forcée."
},
{
  num: "02",
  title: "Proposition sous trois jours ouvrés",
  desc: "Une proposition adaptée à votre situation réelle, avec les priorités identifiées et les solutions recommandées.",
  note: "Selon les besoins : mise en place de solutions IA sur-mesure, accompagnement à l'usage, ou combinaison des deux."
},
{
  num: "03",
  title: "Mise en place ou accompagnement",
  desc: "La solution est configurée et testée dans vos conditions réelles, ou les équipes sont accompagnées dans l'utilisation des outils.",
  note: "Objectif : une solution ou un usage qui fonctionne vraiment, adapté à votre quotidien."
},
{
  num: "04",
  title: "Suivi",
  desc: "Les outils évoluent. Votre activité aussi. Je reste disponible pour ajuster les solutions ou approfondir les usages."
}];


const MethodeSection = () => {
  const schemaRef = useParallax<HTMLImageElement>(20);
  return (
    <section id="methode" className="bg-gris-perle py-14 md:py-20">
      <div className="section-wrap">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <Reveal variant="text" className="text-center mb-10">
            <h2 className="txt-section text-navy">
              La méthode Semaine 54
            </h2>
            <p className="font-dm text-ardoise/70 text-center mt-4">
              Un accompagnement structuré, étape par étape.
            </p>
          </Reveal>

          <Reveal variant="card" stagger={120} className="space-y-8">
            {steps.map((step, i) =>
            <div key={i} className="flex gap-6 group">
                {/* Frise */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0 transition-transform duration-150 ease-out group-hover:scale-110">
                    <span className="font-dm text-lg font-bold text-or-mat">{step.num}</span>
                  </div>
                  {i < steps.length - 1 &&
                <svg className="w-px flex-1 my-1 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1 100">
                      <line
                        x1="0.5" y1="0" x2="0.5" y2="100"
                        pathLength={1}
                        stroke="#C9A84C"
                        strokeOpacity="0.55"
                        strokeWidth="2"
                        className="draw-line"
                        style={{ transitionDelay: `${i * 120}ms` }}
                      />
                    </svg>
                }
                </div>

                {/* Content */}
                <div className="pb-0">
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">{step.title}</h3>
                  <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                  {step.note &&
                <p className="font-dm text-xs text-ardoise/70 mt-3 italic">{step.note}</p>
                }
                </div>
              </div>
            )}
          </Reveal>


          <div className="text-center mt-10">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/methode-semaine-54">
                Découvrir la méthode
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <img
              ref={schemaRef}
              src="/__l5e/assets-v1/ebe3bc59-d136-4a3d-a49f-4afd35e0753f/methode-process.png"
              alt="Schéma du processus Semaine 54 : comprendre, concevoir, automatiser, faire évoluer et grandir ensemble"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>);
};

export default MethodeSection;