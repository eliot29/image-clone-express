import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Mail, FileText, Share2, FolderOpen, Search, CheckCircle } from "lucide-react";

const painPoints = [
{ icon: FileText, text: "Devis rédigés à la main" },
{ icon: Search, text: "Recherches d'informations répétitives" },
{ icon: Mail, text: "Relances de mails chronophages" },
{ icon: Share2, text: "Publications irrégulières sur les réseaux" },
{ icon: FolderOpen, text: "Administratif qui s'accumule" },
{ icon: Clock, text: "Comparaisons fournisseurs fastidieuses" }];


const valueProps = [
"Un seul responsable, du diagnostic à la mise en production. Présence locale en Bretagne.",
"Une approche ancrée dans la réalité des dirigeants, pas dans la démonstration technologique.",
"Suivi réel après déploiement, pas une prestation ponctuelle. Une relation construite dans la durée.",
"Pas une usine à projets. Je limite volontairement le nombre de missions simultanées."];


const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-navy flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--or-mat) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--or-mat) / 0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }} />
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-14 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-or-mat animate-pulse" />
            <span className="font-dm text-sm text-or-mat font-medium tracking-wide uppercase">
              Basé dans le Finistère (29) — interventions en 29 · 22 · 56
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-dm font-extrabold text-4xl sm:text-5xl lg:text-6xl text-blanc-casse leading-[1.1] mb-6">Agence IA & automatisation pour 
Indépendants, TPE et PME
de Bretagne<br />
            les <span className="text-or-mat">indépendants, TPE et PME</span>
            <br />
            de Bretagne
          </h1>

          {/* Subtitle */}
          <p className="font-dm text-lg sm:text-xl text-blanc-casse/70 mb-4 max-w-2xl">
            Récupérez du temps. Gagnez en productivité. Gagnez en rentabilité.
          </p>

          {/* Punchline */}
          <p className="punchline text-blanc-casse/90 text-lg mb-10 max-w-2xl">
            L'IA ne remplace pas votre expertise. Elle élimine le temps inutile autour.
          </p>

          {/* Pain points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {painPoints.map((point, i) =>
            <div key={i} className="flex items-center gap-3 text-blanc-casse/60 font-dm text-sm">
                <point.icon size={18} className="text-or-mat/60 shrink-0" />
                <span>{point.text}</span>
              </div>
            )}
          </div>

          <p className="font-dm text-blanc-casse/50 text-sm mb-10 italic">
            Ces tâches ne créent pas de valeur. Elles consomment du temps.
          </p>

          {/* Stat highlight */}
          <div className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-lg p-5 mb-10 max-w-lg">
            <p className="font-dm text-blanc-casse/80 text-sm leading-relaxed">
              <span className="font-syne text-or-mat text-2xl font-bold">30 min</span>{" "}
              gagnées par jour ={" "}
              <span className="font-syne text-or-mat text-2xl font-bold">120h</span>/an ={" "}
              <span className="font-syne text-or-mat text-2xl font-bold">3 semaines</span>{" "}
              de travail récupérées.
            </p>
          </div>

          {/* Ce que je fais concrètement */}
          <div className="mb-10 max-w-2xl">
            <h2 className="font-dm font-bold text-xl text-blanc-casse mb-4">Ce que je fais concrètement</h2>
            <p className="font-dm text-blanc-casse/70 text-sm mb-3">Je détermine la meilleure solution :</p>
            <ul className="space-y-2 mb-4">
              {[
              "automatisation via n8n",
              "assistant IA configuré sur-mesure (GPTs, Gems)",
              "formation ciblée aux outils LLM en visio ou en présentiel en Bretagne",
              "ou combinaison des trois"].
              map((item, i) =>
              <li key={i} className="flex items-start gap-2 font-dm text-sm text-blanc-casse/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-1.5 shrink-0" />
                  {item}
                </li>
              )}
            </ul>
            <p className="font-dm text-blanc-casse/70 text-sm mb-2">
              Je mets en place ce qui est pertinent.
            </p>
            <p className="font-dm text-blanc-casse/70 text-sm">
              Pour les outils : vous devenez autonome. Pour les processus : votre organisation est allégée.
            </p>
          </div>

          {/* Value propositions */}
          <div className="space-y-3 mb-10 max-w-2xl">
            {valueProps.map((prop, i) =>
            <div key={i} className="flex items-start gap-3 bg-blanc-casse/5 border border-blanc-casse/10 rounded-lg px-4 py-3">
                <CheckCircle size={16} className="text-or-mat mt-0.5 shrink-0" />
                <p className="font-dm text-sm text-blanc-casse/80">{prop}</p>
              </div>
            )}
          </div>

          <p className="punchline text-blanc-casse/90 text-lg mb-10 max-w-2xl">
            Un objectif : vous faire gagner du temps utile et du savoir stratégique.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">
                Réserver mon audit gratuit
                <ArrowRight size={18} />
              </a>
            </Button>
            <p className="font-dm text-xs text-blanc-casse/40 self-center">
              30 à 45 min · sans engagement
            </p>
          </div>
          <p className="font-dm text-xs text-blanc-casse/40">
            Données dans votre environnement · Accès limités au strict nécessaire · RGPD abordé dès le diagnostic
          </p>
        </div>
      </div>
    </section>);

};

export default HeroSection;