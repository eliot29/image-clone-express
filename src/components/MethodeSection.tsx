import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/secondary/Reveal";

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
  },
];

const MethodeSection = () => {
  return (
    <section id="methode" className="bg-blanc-casse py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
              La méthode Semaine 54
            </h2>
          </div>

          <p className="font-dm text-ardoise/70 text-center mb-6">
            Un accompagnement structuré, étape par étape.
          </p>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <Reveal key={i} variant="left" delay={i * 110} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <span className="font-dm text-sm font-bold">{step.num}</span>
                  </div>
                  <div className="w-px flex-1 bg-navy/15 my-1" />
                </div>
                <div className="pb-10">
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">{step.title}</h3>
                  <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                  <p className="font-dm text-xs text-or-mat mt-3 italic">{step.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-8">
            <img
              src="/__l5e/assets-v1/0381a4c0-36a0-4707-b3f0-1f8eb5812678/partenaire-ia-ecosysteme.png"
              alt="Infographie du parcours partenaire : de l'analyse au suivi"
              className="mx-auto mt-6 w-full max-w-md rounded-lg shadow-sm"
              loading="lazy"
            />
            <Button variant="ctaOutline" size="default" className="mt-6">
              Découvrir la méthode
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeSection;
