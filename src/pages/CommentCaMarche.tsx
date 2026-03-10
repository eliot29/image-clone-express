import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Target, FileText, Wrench, Users, RefreshCw } from "lucide-react";

const etapes = [
  {
    num: "01",
    title: "Audit gratuit (30 min)",
    desc: "Par téléphone ou visio. On cartographie ensemble vos tâches répétitives, chronophages, pénibles ou mal maîtrisées, et on identifie ce qui a le meilleur retour sur investissement. C'est un échange de diagnostic — pas une présentation commerciale.",
    note: "Je m'adapte à vos disponibilités, y compris en soirée et le week-end.",
  },
  {
    num: "02",
    title: "Proposition (sous 3 jours ouvrés)",
    desc: "Une proposition adaptée à votre situation réelle — pas une solution générique copiée-collée. Elle précise la ou les solutions retenues, le gain attendu, les outils impliqués, et le calendrier de mise en place.",
  },
  {
    num: "03",
    title: "Mise en place & calibration",
    desc: "Déploiement du workflow, configuration de l'assistant IA ou prise en main de l'outil retenu. On calibre jusqu'à ce que ça fonctionne dans vos conditions réelles. Si quelque chose ne correspond pas à votre usage quotidien, on ajuste.",
    note: "Durée : 3 à 15 jours ouvrés selon la complexité.",
  },
  {
    num: "04",
    title: "Transmission",
    desc: "Vous apprenez à utiliser la solution, la surveiller et l'adapter si besoin. L'objectif est votre autonomie. Rien n'est une boîte noire — vous devez comprendre ce qui tourne chez vous et pouvoir intervenir.",
  },
  {
    num: "05",
    title: "Suivi",
    desc: "Les outils évoluent. Votre activité aussi. On reste disponibles pour ajuster, répondre aux questions, et approfondir certains usages. La relation s'adapte à vos besoins dans la durée.",
  },
];

const differences = [
  "Pas de package imposé avant diagnostic.",
  "Pas d'engagement sur plusieurs solutions avant d'en avoir vu une fonctionner.",
  "Pas de formation standard délivrée à des dizaines d'entreprises en même temps.",
  "Une relation construite dans la durée, pas une prestation one-shot.",
];

const faqItems = [
  {
    q: "Comment se déroule le premier échange ?",
    a: "Par téléphone ou visio, 30 minutes. On parle de votre activité, de vos contraintes, de ce qui vous prend le plus de temps. Aucun support à préparer. Aucune vente à l'issue. Je m'adapte à vos disponibilités, y compris en soirée et le week-end.",
  },
  {
    q: "Quel est le tarif ?",
    a: "Il dépend de la solution retenue et de la complexité du projet. Il est communiqué dans la proposition, après diagnostic. L'audit initial est gratuit et sans engagement.",
  },
  {
    q: "Combien d'entreprises Semaine 54 accompagne-t-il simultanément ?",
    a: "Volontairement limité. L'objectif est de garantir une disponibilité réelle et un suivi de qualité — pas de gérer un portefeuille en série.",
  },
  {
    q: "Que se passe-t-il si la solution ne fonctionne pas comme prévu ?",
    a: "La phase de calibration est faite pour ça. On ajuste jusqu'à ce que ça fonctionne dans vos conditions réelles. Si un blocage technique est identifié lors du diagnostic, il est signalé avant toute mise en place.",
  },
  {
    q: "Semaine 54 intervient-il uniquement en Bretagne ?",
    a: "Les échanges se font par téléphone ou visio. Semaine 54 est basé en Finistère et intervient prioritairement en Bretagne : Finistère (29), Côtes-d'Armor (22), Morbihan (56), Ille-et-Vilaine (35).",
  },
];

const CommentCaMarche = () => {
  useEffect(() => {
    document.title = "Comment fonctionne Semaine 54 | Méthode & accompagnement IA Bretagne";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Audit gratuit, proposition sous 5 jours, calibration sur vos conditions réelles, suivi dans la durée. Un seul interlocuteur de bout en bout. Consultant IA Bretagne, disponible soirées et week-ends.");
    window.scrollTo(0, 0);
  }, []);
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-24 pb-6 lg:pt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                Comment ça marche
              </h1>
              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-navy border-l-0 pl-0 text-center">
                De l'audit au suivi, un seul interlocuteur. <span className="text-or-mat">Du début à la fin.</span>
              </p>
              <p className="font-dm text-ardoise/80 mt-4 leading-relaxed">
                Cette page explique qui est derrière Semaine 54, comment se déroule un accompagnement de A à Z, et ce qui différencie concrètement cette approche.
              </p>
            </div>
          </div>
        </section>

        {/* Qui est derrière */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Qui est derrière Semaine 54 ?
              </h2>
              <div className="font-dm text-blanc-casse/70 space-y-4 leading-relaxed">
                <p>
                  Je suis <strong className="text-blanc-casse">Clément</strong>, fondateur de Semaine 54. Mon parcours est commercial avant d'être technique : plusieurs années en grande distribution comme chef de rayon, puis chef de secteur GMS côté marques.
                </p>
                <p>
                  J'ai aussi brièvement vendu des sites internet — une expérience qui m'a appris ce que je ne voulais pas faire : conclure vite, packager à l'avance, passer au suivant sans vraiment comprendre l'entreprise en face.
                </p>
                <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-or-mat border-l-0 pl-0 text-center">
                  En grande distribution, chaque mètre linéaire se rentabilise. En entreprise, chaque heure doit l'être aussi.
                </p>
                <p>
                  Depuis plus de trois ans, je consacre entre cinq et huit heures par semaine à tester, documenter et expérimenter les outils d'intelligence artificielle. Ce temps investi, c'est du temps que vous n'avez pas à passer.
                </p>
                <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-blanc-casse border-l-0 pl-0 text-center">
                  Je ne suis pas ingénieur IA. <span className="text-or-mat">Je suis un praticien de terrain — un AI Implémenteur.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expériences terrain */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                Deux expériences terrain qui ont confirmé la démarche
              </h2>
              <div className="space-y-4 mb-6">
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                  <h3 className="font-dm font-bold text-base text-navy mb-2">Poissonnerie — Pays d'Iroise</h3>
                  <p className="font-dm text-ardoise/80 leading-relaxed">
                    Une amie tenait une poissonnerie dans une zone artisanale que personne ne connaissait. Sans budget communication, sans agence. En structurant une stratégie nourrie par l'IA : <strong className="text-navy">73 000 vues</strong>, <strong className="text-navy">622 partages</strong>, <strong className="text-navy">+800 abonnés</strong>, <strong className="text-or-mat">+15 % de chiffre d'affaires</strong> sur la période.
                  </p>
                </div>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                  <h3 className="font-dm font-bold text-base text-navy mb-2">Électricien — Pays d'Iroise</h3>
                  <p className="font-dm text-ardoise/80 leading-relaxed">
                    Comparaison manuelle de plusieurs sites fournisseurs, plusieurs fois par semaine. Mise en place d'un assistant dédié : environ <strong className="text-navy">10 minutes économisées par jour</strong>, soit près de <strong className="text-or-mat">40 heures récupérées par an</strong>.
                  </p>
                </div>
              </div>
              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-navy border-l-0 pl-0 text-center">
                Mon rôle n'est pas de vous impressionner avec la technologie. <span className="text-or-mat">C'est de la rendre utile.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Ce qui différencie */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Ce qui différencie cette approche
              </h2>
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">
                Le marché de l'accompagnement IA propose souvent deux modèles : une formation générique délivrée à de nombreuses entreprises simultanément, ou une solution vendue rapidement sans diagnostic sérieux.
              </p>
              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-or-mat border-l-0 pl-0 text-center mb-6">
                Chez Semaine 54, rien n'est vendu avant d'être compris. Rien n'est installé avant d'être calibré. Rien n'est livré sans s'assurer que ça fonctionne dans vos conditions réelles.
              </p>
              <ul className="space-y-3">
                {differences.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* La méthode — 5 étapes */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                La méthode Semaine 54 — 5 étapes
              </h2>
              <div className="space-y-0">
                {etapes.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0">
                        <span className="font-dm text-sm font-bold text-or-mat">{step.num}</span>
                      </div>
                      {i < etapes.length - 1 && <div className="w-px h-full bg-navy/15 my-1" />}
                    </div>
                    <div className={`${i < etapes.length - 1 ? "pb-10" : "pb-2"}`}>
                      <h3 className="font-dm font-bold text-lg text-navy mb-2">{step.title}</h3>
                      <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                      {step.note && <p className="font-dm text-xs text-or-mat mt-3 italic">{step.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                FAQ pratique
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div key={i} className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-2">
                      <HelpCircle size={16} className="text-or-mat mt-0.5 shrink-0" />
                      <h3 className="font-dm font-bold text-base text-blanc-casse">{item.q}</h3>
                    </div>
                    <p className="font-dm text-sm text-blanc-casse/70 leading-relaxed pl-7">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                Prêt à démarrer ?
              </h2>
              <p className="font-dm text-ardoise/80 mb-2">
                On commence par comprendre votre situation. On propose ensuite — et uniquement si c'est pertinent.
              </p>
              <p className="font-dm text-ardoise/80 mb-6">
                Je m'adapte à vos disponibilités, y compris en soirée et le week-end.
              </p>
              <Button variant="cta" size="lg" asChild className="text-lg px-10 py-6">
                <a href="/#contact">
                  Réserver mon audit gratuit
                  <ArrowRight size={20} />
                </a>
              </Button>
              <p className="font-dm text-ardoise/50 text-sm mt-4 italic">
                Sans engagement, sans présentation commerciale.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default CommentCaMarche;
