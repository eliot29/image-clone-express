import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/secondary/Reveal";



const PourquoiNousSection = () => {
  return (
    <section id="approche" className="bg-blanc-casse py-16 md:py-24">
      <div className="section-shell">
        <div className="">
          <div className="text-left mb-6">
            <h2 className="font-dm font-extrabold text-[28px] sm:text-4xl text-navy mb-4">
              Pourquoi travailler avec moi
            </h2>
          </div>

          <div className="card-lift bg-card rounded-xl shadow-card p-6 md:p-8 mb-6 max-w-2xl">
            <p className="font-dm text-ardoise/85 text-[17px] leading-relaxed">
              <strong className="text-navy font-bold">Je ne suis pas ingénieur.</strong> J'ai passé des années à vendre, donc je sais écouter un dirigeant avant de proposer quoi que ce soit. Et j'utilise l'IA tous les jours depuis assez longtemps pour savoir ce qui marche vraiment et ce qui n'est qu'un effet de mode.
            </p>
          </div>

          <div className="border-l-4 border-or-mat bg-navy/5 rounded-r-xl p-6 mb-8 max-w-2xl">
            <p className="font-dm text-navy font-bold text-lg sm:text-xl leading-snug mb-2">
              La personne qui comprend votre métier est celle qui construit l'outil.
            </p>
            <p className="font-dm text-ardoise/80 leading-relaxed">
              Pas de commercial, pas de sous-traitance, pas de dossier qui change de mains.
            </p>
          </div>


          <div className="font-dm text-ardoise/80 space-y-4 mb-6 leading-relaxed max-w-2xl">
            <p className="text-ardoise/80">
              Je suis <strong className="text-navy">Clément, 35 ans</strong>, et <strong className="text-navy">Semaine 54</strong>, c'est moi. J'ai exercé pendant une dizaine d'années différents métiers dans le secteur de la <strong className="text-navy">grande distribution</strong>.
            </p>
            <p className="text-ardoise/80">Depuis plus de trois ans, je teste et j'utilise les <strong className="text-navy">outils d'IA dans des contextes professionnels</strong> afin d'en comprendre les <strong className="text-navy">usages pertinents pour les entreprises.</strong>
            </p>
            <p className="text-ardoise/80">
              <strong className="text-navy">Mon constat : l'IA 2026 est un levier de croissance pour les PME en rendant accessibles des solutions jusque-là réservées aux grands groupes.</strong>
            </p>
            <p className="text-ardoise/80">
              <strong className="text-navy">Une expérience concrète</strong> a confirmé cette conviction :
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <Reveal delay={180} className="card-lift bg-card rounded-xl shadow-card p-6">
              <p className="font-dm text-ardoise/80 leading-relaxed">
                J'ai également aidé un artisan électricien à simplifier la comparaison quotidienne de ses fournisseurs en mettant en place un assistant dédié.
                Résultat : environ <strong className="text-navy">10 minutes économisées par jour</strong>, soit près de <strong className="text-or-mat-clair">40 heures récupérées par an</strong>.
              </p>
            </Reveal>
          </div>


          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug text-left mt-6 max-w-2xl">
            Mon approche vient du terrain.<br className="sm:hidden" /> <span className="text-or-mat-clair">Pas d'une démonstration théorique.</span>
          </p>

          <div className="text-left mt-4">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/pourquoi-ia-generique-ne-suffit-pas#parcours">
                Comprendre mon approche
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>


        </div>
      </div>
    </section>);
};
export default PourquoiNousSection;
