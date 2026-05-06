import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";

const ConceptionIASurMesure = () => {
  return (
    <>
      <Helmet>
        <title>Conception IA sur-mesure — Automatisation et assistants IA pour PME en Bretagne | Semaine 54</title>
        <meta name="description" content="Automatisation des tâches, workflows sur-mesure, assistants IA métier, outils internes : conception de solutions IA adaptées aux TPE et PME en Bretagne. Connexion à vos outils existants, gain de temps mesurable." />
        <link rel="canonical" href="/conception-ia-sur-mesure" />
      </Helmet>
      <ScrollToHash />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                Conception IA sur-mesure
              </h1>
              <p className="font-dm text-ardoise/80 text-lg leading-relaxed">
                Automatisation, assistants IA métier, outils internes&nbsp;: des solutions techniques conçues spécifiquement pour votre entreprise, connectées à vos outils existants, pensées pour le gain de temps réel.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center">
                Des solutions techniques adaptées à votre métier
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  La Conception IA sur-mesure regroupe les solutions <strong className="text-blanc-casse">conçues spécifiquement pour votre entreprise</strong>. Elles ne reposent pas sur un produit générique, mais sur ce dont vous avez réellement besoin au quotidien&nbsp;: un workflow précis, un assistant connecté à vos données, ou un outil simple pour remplacer un fonctionnement bricolé.
                </p>
                <p>
                  Ces solutions <strong className="text-blanc-casse">s'intègrent à vos outils existants</strong> (email, CRM, fichiers, ERP, agenda, comptabilité…), <strong className="text-blanc-casse">suppriment les tâches répétitives</strong> et <strong className="text-blanc-casse">fiabilisent vos opérations</strong> en limitant les erreurs et les oublis. L'objectif est toujours le même&nbsp;: redonner du temps à vos équipes pour qu'elles se concentrent sur ce qui crée vraiment de la valeur.
                </p>
                <p>
                  Trois grandes familles d'outils sont possibles, séparément ou combinées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Automatisation */}
        <section id="automatisation" className="bg-blanc-casse py-10" style={{ scrollMarginTop: '120px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-3">
                Automatisation des tâches et workflows sur-mesure
              </h2>
              <p className="font-dm text-or-mat italic mb-5">
                Des tâches répétitives qui disparaissent de votre quotidien.
              </p>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  L'automatisation consiste à confier à un système des actions que vous réalisez aujourd'hui à la main, dans plusieurs outils différents. L'objectif est simple&nbsp;: que ces actions s'exécutent toutes seules, au bon moment, sans erreur.
                </p>
                <p>
                  Les workflows sont conçus à partir de votre fonctionnement réel, pas d'un modèle théorique. Ils respectent vos règles métier, vos validations, vos exceptions. Ils s'adaptent à votre organisation — pas l'inverse.
                </p>

                <h3 className="font-dm font-bold text-xl text-navy pt-2">Ce qu'on met en place</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "workflows conçus sur-mesure pour vos processus internes",
                    "connexion entre vos outils (email, CRM, fichiers, ERP, agenda, comptabilité)",
                    "automatisation des tâches chronophages et répétitives",
                    "déclenchements automatiques selon des règles métier claires",
                    "suppression des ressaisies manuelles d'un outil à l'autre",
                    "reporting automatisé envoyé aux bonnes personnes, au bon rythme",
                    "analyse documentaire (devis, factures, contrats, comptes-rendus)",
                    "réduction significative des erreurs et des oublis",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-navy pt-2">Cas d'usage fréquents</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "génération automatique de devis ou de comptes-rendus à partir d'informations existantes",
                    "relances clients ou fournisseurs déclenchées selon le bon délai",
                    "consolidation hebdomadaire des chiffres de vente, de stock ou d'activité",
                    "tri et classement automatique des emails ou pièces jointes",
                    "synchronisation entre un CRM, une boîte mail et un agenda",
                    "extraction de données depuis des PDF entrants vers un fichier exploitable",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  Une fois en place, ces automatisations fonctionnent en continu, sans supervision constante. Elles libèrent du temps réel, chaque semaine, sur des tâches souvent invisibles mais très consommatrices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assistant IA métier */}
        <section id="assistant" className="bg-navy py-10" style={{ scrollMarginTop: '120px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-3">
                Assistant IA métier
              </h2>
              <p className="font-dm text-or-mat italic mb-5">
                Un assistant connecté à vos données, qui vous fait gagner du temps chaque jour.
              </p>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Il ne s'agit pas d'un chatbot gadget. Un assistant IA métier est un véritable <strong className="text-blanc-casse">assistant connecté à vos données et à vos documents internes</strong>. Il vous aide à retrouver une information, à synthétiser un dossier, à préparer une décision en quelques secondes là où vous mettriez plusieurs minutes — voire plusieurs heures — à la main.
                </p>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Ce qu'il sait faire</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "centraliser l'information dispersée entre plusieurs outils",
                    "retrouver rapidement un devis, un échange, une fiche client ou un document",
                    "synthétiser un dossier, un compte-rendu, un échange long",
                    "comparer plusieurs offres, fournisseurs, contrats ou propositions",
                    "préparer une réponse client ou un brief interne en quelques secondes",
                    "s'adapter à votre vocabulaire métier et à vos formats internes",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse/85">{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Pour qui</h3>
                <p>
                  Particulièrement utile dans les fonctions commerciales, administratives, support et pilotage&nbsp;: tous les rôles où le temps perdu à chercher l'information dépasse largement le temps passé à la traiter. Utilisable simplement, sans compétence technique.
                </p>

                <p>
                  L'objectif est d'<strong className="text-blanc-casse">accélérer vos prises de décision</strong> et de <strong className="text-blanc-casse">réduire le temps passé à chercher l'information au lieu de la traiter</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outils métier */}
        <section id="outils-metier" className="bg-blanc-casse py-10" style={{ scrollMarginTop: '120px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-3">
                Outils métier internes et dashboards
              </h2>
              <p className="font-dm text-or-mat italic mb-5">
                Des outils simples, conçus pour répondre à un besoin précis.
              </p>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  Beaucoup d'entreprises fonctionnent encore avec des fichiers Excel partagés, des feuilles bricolées ou des méthodes informelles. Ces solutions tiennent un temps, puis deviennent vite ingérables&nbsp;: erreurs, doublons, version à jour introuvable, dépendance à une personne. Les outils métier remplacent ces solutions dispersées par des <strong className="text-navy">interfaces simples, claires et adaptées à un usage quotidien</strong>.
                </p>

                <h3 className="font-dm font-bold text-xl text-navy pt-2">Ce qu'on construit</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "interfaces claires et rapides à prendre en main",
                    "dashboards opérationnels pour piloter une activité, un service ou une équipe",
                    "connexion à vos données et à vos outils existants",
                    "automatisation intégrée directement dans l'outil",
                    "suppression des fichiers Excel partagés devenus ingérables",
                    "remplacement progressif des méthodes dispersées ou bricolées",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  Pas de logiciel complexe à déployer, pas de mois de paramétrage. Des outils simples, conçus pour être utilisés immédiatement et faire gagner du temps dès la mise en service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gains mesurables */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center">
                Des gains mesurables, pas des promesses
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Chaque solution est pensée pour produire un effet concret, mesurable&nbsp;: temps gagné par semaine, erreurs évitées, fiabilité des opérations, charge mentale réduite. Les gains les plus fréquents observés sur des cas réels&nbsp;:
                </p>
                <ul className="space-y-2 pl-1">
                  {[
                    "plusieurs heures récupérées chaque semaine par collaborateur concerné",
                    "réduction significative des erreurs de saisie et des oublis",
                    "centralisation de l'information précédemment dispersée",
                    "réactivité commerciale et opérationnelle accrue",
                    "moins de dépendance à une personne unique pour les opérations critiques",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse/85">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-blanc-casse pt-2">
                  Une automatisation bien ciblée est souvent amortie en moins d'un an.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks
          links={[
            { label: "Comprendre la méthode", to: "/methode-semaine-54" },
            { label: "Découvrir l'accompagnement IA", to: "/accompagnement-ia" },
            { label: "Pourquoi l'IA générique ne suffit pas", to: "/pourquoi-ia-generique-ne-suffit-pas" },
          ]}
        />

        <ContactCTA
          title="Demander un diagnostic"
          intro="Un premier échange suffit à identifier les premières automatisations utiles dans votre activité."
          subIntro="Sans engagement. Aucune vente forcée."
          idPrefix="conception"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default ConceptionIASurMesure;