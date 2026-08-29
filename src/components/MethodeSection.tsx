import { ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/secondary/Reveal";


const steps = [
{
  num: "01",
  title: "Je viens vous voir",
  desc: "Visio ou téléphone, 20 à 30 minutes. Je cherche à comprendre votre activité, vos contraintes et vos objectifs, et à repérer les tâches qui vous coûtent le plus de temps.",
  note: "Diagnostic gratuit. Sans engagement, aucune vente forcée."
},
{
  num: "02",
  title: "Je chiffre et je priorise",
  desc: "Sous trois jours ouvrés, je vous adresse une proposition adaptée à votre situation réelle, avec les priorités identifiées et ce que chacune vous fait gagner.",
  note: "Selon les besoins : mise en place de solutions sur-mesure, accompagnement à l'usage, ou les deux."
},
{
  num: "03",
  title: "Je construis et je livre",
  desc: "Je configure la solution, je la teste dans vos conditions réelles et je forme les personnes qui vont s'en servir.",
  note: "Objectif : un outil qui fonctionne vraiment, adapté à votre quotidien."
},
{
  num: "04",
  title: "Je reste",
  desc: "On mesure ce qui a été gagné, on regarde ce qui a changé côté outils, et on repart sur la priorité suivante.",
  note: "Et on recommence."
}];


const MethodeSection = () => {
  return (
    <section id="methode" className="bg-blanc-casse py-16 md:py-24">
      <div className="section-shell">
        <div className="">
          <div className="border-l-4 border-or-mat bg-navy/5 rounded-r-xl p-6 mb-10 max-w-2xl">
            <p className="font-dm text-ardoise/90 leading-relaxed">
              <strong className="text-navy">Une automatisation qui tourne en révèle une autre.</strong> On avance à votre rythme, un chantier à la fois — et je reste joignable entre les deux.
            </p>
          </div>

          <div className="text-left mb-6">
            <h2 className="font-syne font-extrabold text-[28px] sm:text-4xl text-navy mb-4">
              La méthode Semaine 54
            </h2>
          </div>

          <p className="font-dm text-ardoise/70 text-left mb-6 max-w-2xl">
            Un cycle, pas un projet qui se termine.
          </p>

          <div className="space-y-0">
            {steps.map((step, i) =>
            <Reveal key={i} variant="left" delay={i * 110} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <span className="font-syne text-sm font-bold text-or-mat-clair">{step.num}</span>
                  </div>

                  <div className={`w-px h-full my-1 ${i < steps.length - 1 ? 'bg-navy/15' : 'bg-gradient-to-b from-or-mat/60 to-or-mat/0 border-dashed'}`} />
                </div>

                {/* Content */}
                <div className={`${i < 3 ? 'pb-10' : 'pb-2'}`}>
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">{step.title}</h3>
                  <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                  {step.note &&
                <p className="font-dm text-xs text-or-mat-clair mt-3 italic">{step.note}</p>
                }
                </div>
              </Reveal>
            )}
          </div>

          {/* Retour au début du cycle */}
          <div className="flex items-center gap-3 mt-2 mb-2">
            <div className="w-10 flex justify-center">
              <div className="w-9 h-9 rounded-full border border-or-mat/40 bg-or-mat/10 flex items-center justify-center">
                <RefreshCw size={16} className="text-or-mat-clair" />
              </div>
            </div>
            <p className="font-dm text-sm font-bold text-or-mat-clair">
              … et on repart à l'étape 01 avec la priorité suivante.
            </p>
          </div>


          <div className="text-left mt-6">
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
