import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  return (
    <section id="methode" className="bg-blanc-casse py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
              La méthode Semaine 54
            </h2>
          </div>

          <p className="font-dm text-ardoise/70 text-center mb-6">
            Un accompagnement structuré, étape par étape.
          </p>

          <div className="space-y-0">
            {steps.map((step, i) =>
            <div key={i} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0">
                    <span className="font-dm text-sm font-bold text-or-mat">{step.num}</span>
                  </div>
                  {i < steps.length - 1 &&
                <div className="w-px h-full bg-navy/15 my-1" />
                }
                </div>

                {/* Content */}
                <div className={`${i < 3 ? 'pb-10' : 'pb-2'}`}>
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">{step.title}</h3>
                  <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                  {step.note &&
                <p className="font-dm text-xs text-or-mat mt-3 italic">{step.note}</p>
                }
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/methode-semaine-54">
                Découvrir la méthode
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default MethodeSection;