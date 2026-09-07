import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";
import Highlight from "@/components/secondary/Highlight";
import Reveal from "@/components/secondary/Reveal";

const PAGE_TITLE =
  "Conception IA sur-mesure — Automatisation et assistants IA pour PME en Bretagne | Semaine 54";
const PAGE_DESC =
  "Automatisation des tâches, enchaînements d'actions sur-mesure, assistants IA métier, outils internes : conception de solutions IA adaptées aux TPE et PME en Bretagne. Connexion à vos outils existants, gain de temps mesurable.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conception IA sur-mesure",
  provider: { "@type": "LocalBusiness", name: "Semaine 54" },
  areaServed: ["Finistère", "Côtes-d'Armor", "Morbihan"],
  description: PAGE_DESC,
};

const ConceptionIASurMesure = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href="https://semaine54.fr/conception-ia-sur-mesure" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content="https://semaine54.fr/conception-ia-sur-mesure" />
        <meta property="og:image" content="https://semaine54.fr/og-semaine54.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ScrollToHash />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-8">
          <div className="section-wrap">
            <div className="text-center">
              <h1 className="font-dm font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] text-navy mb-4">
                Conception IA sur-mesure
              </h1>
              <p className="txt-corps text-ardoise/80 mx-auto">
                Automatisation, assistants IA métier, outils internes&nbsp;: des solutions techniques conçues spécifiquement pour votre entreprise, connectées à vos outils existants, pensées pour le gain de temps réel.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-navy py-14 md:py-20">
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-blanc-casse mb-10 text-center">
                Des solutions techniques adaptées à votre métier
              </h2>
            </Reveal>
            <Reveal variant="card" stagger={110}>
              <p className="txt-corps text-blanc-casse mb-4">
                La conception sur mesure regroupe les solutions <strong className="text-white">conçues spécifiquement pour votre entreprise</strong>. Elles ne reposent pas sur un produit générique, mais sur ce dont vous avez réellement besoin au quotidien&nbsp;: des enchaînements d'actions automatiques — ce qu'on appelle des workflows —, un assistant connecté à vos données, ou un outil simple pour remplacer un fonctionnement bricolé.
              </p>
              <p className="txt-corps text-blanc-casse mb-4">
                Ces solutions s'intègrent à vos <strong className="text-or-mat">outils existants</strong> (email, agenda, comptabilité…), <strong className="text-white">suppriment les tâches répétitives</strong> et fiabilisent vos opérations en limitant les erreurs et les oublis. L'objectif est toujours le même&nbsp;: <strong className="text-or-mat">gain de temps réel</strong> pour vos équipes, sur ce qui crée vraiment de la valeur.
              </p>
              <p className="txt-corps text-blanc-casse">
                Trois grandes familles d'outils sont possibles, séparément ou combinées.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Automatisation */}
        <section id="automatisation" className="bg-blanc-casse py-14 md:py-20" style={{ scrollMarginTop: '120px' }}>
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-navy mb-10">
                Automatisation des tâches et workflows sur-mesure
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card" stagger={110}>
                <p className="txt-corps text-ardoise/85">
                  L'<strong className="text-navy">automatisation des tâches</strong> consiste à confier à un système des actions que vous réalisez aujourd'hui à la main, dans plusieurs outils différents. L'objectif est simple&nbsp;: que ces actions s'exécutent toutes seules, au bon moment, sans erreur.
                </p>
                <p className="txt-corps text-ardoise/85">
                  Ces <strong className="text-navy">enchaînements sur-mesure</strong> sont conçus à partir de votre fonctionnement réel, pas d'un modèle théorique. Ils respectent vos règles métier, vos validations, vos exceptions. Ils s'adaptent à votre organisation — pas l'inverse.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-3">Ce que je mets en place</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "des suites d'actions conçues sur-mesure pour vos processus internes",
                      "connexion entre vos outils (email, agenda, comptabilité)",
                      "déclenchements automatiques selon des règles métier claires",
                      "suppression des ressaisies manuelles d'un outil à l'autre",
                      "rapports envoyés automatiquement aux bonnes personnes, au bon rythme",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 txt-corps text-ardoise/85">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-3">Cas d'usage fréquents</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "génération automatique de devis ou de comptes-rendus à partir d'informations existantes",
                      "relances clients ou fournisseurs déclenchées selon le bon délai",
                      "consolidation hebdomadaire des chiffres de vente, de stock ou d'activité",
                      "tri et classement automatique des emails ou pièces jointes",
                      "extraction de données depuis des PDF entrants vers un fichier exploitable",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 txt-corps text-ardoise/85">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="card">
                <p className="txt-corps text-ardoise/85 mt-8">
                  Une fois en place, ces automatisations fonctionnent en continu, sans supervision constante. Elles libèrent du temps réel, chaque semaine, sur des tâches souvent invisibles mais très consommatrices.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Assistant IA métier */}
        <section id="assistant" className="bg-navy py-14 md:py-20" style={{ scrollMarginTop: '120px' }}>
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-blanc-casse mb-10">
                Assistant IA métier
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card">
                <p className="txt-corps text-blanc-casse">
                  Il ne s'agit pas d'un chatbot gadget. Un <strong className="text-or-mat">assistant connecté à vos données</strong> et à vos documents internes vous aide à <strong className="text-white">retrouver rapidement une information</strong>, à <strong className="text-white">synthétiser un dossier</strong>, à préparer une décision en quelques secondes là où vous mettriez plusieurs minutes — voire plusieurs heures — à la main.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-blanc-casse/5 border border-blanc-casse/15 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse mb-3">Ce qu'il sait faire</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "centraliser l'information dispersée entre plusieurs outils",
                      "retrouver rapidement un devis, un échange, une fiche client ou un document",
                      "synthétiser un dossier, un compte-rendu, un échange long",
                      "comparer plusieurs offres, fournisseurs, contrats ou propositions",
                      "préparer une réponse client ou un brief interne en quelques secondes",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 txt-corps text-blanc-casse">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span className="text-blanc-casse">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse pt-8">Pour qui</h3>
                <p className="txt-corps text-blanc-casse mt-3">
                  Particulièrement utile dans les fonctions commerciales, administratives, support et pilotage&nbsp;: tous les rôles où le temps perdu à chercher l'information dépasse largement le temps passé à la traiter. Utilisable simplement, sans compétence technique.
                </p>
                <p className="txt-corps text-blanc-casse mt-4">
                  L'objectif est d'apporter une véritable <strong className="text-or-mat">aide à la décision</strong> et de réduire le temps passé à chercher l'information au lieu de la traiter.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Outils métier */}
        <section id="outils-metier" className="bg-blanc-casse py-14 md:py-20" style={{ scrollMarginTop: '120px' }}>
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-navy mb-10">
                Outils métier internes et tableaux de bord
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card">
                <p className="txt-corps text-ardoise/85">
                  Beaucoup d'entreprises fonctionnent encore avec des <strong className="text-navy">fichiers Excel partagés</strong>, des feuilles bricolées ou des méthodes informelles. Ces solutions tiennent un temps, puis deviennent vite ingérables&nbsp;: erreurs, doublons, version à jour introuvable, dépendance à une personne. Des <strong className="text-or-mat">outils internes</strong> remplacent ces solutions dispersées par des <strong className="text-navy">interfaces simples</strong>, claires et adaptées à un usage quotidien.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-3">Ce que je construis</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "interfaces claires et rapides à prendre en main",
                      "tableaux de bord pour piloter une activité, un service ou une équipe",
                      "automatisation intégrée directement dans l'outil",
                      "suppression des fichiers Excel partagés devenus ingérables",
                      "remplacement progressif des méthodes dispersées ou bricolées",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 txt-corps text-ardoise/85">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="card">
                <p className="txt-corps text-ardoise/85 mt-8">
                  Pas de logiciel complexe à déployer, pas de mois de paramétrage. Des outils simples, conçus pour être utilisés immédiatement et faire gagner du temps dès la mise en service.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gains mesurables */}
        <section className="bg-navy py-14 md:py-20">
          <div className="section-wrap">
            <Reveal variant="text">
              <Highlight variant="accent-dark" className="text-center txt-section mb-10">
                Des <span className="text-or-mat">gains mesurables</span>, pas des promesses.
              </Highlight>
            </Reveal>

            <Reveal variant="card" stagger={110}>
              <div className="bg-blanc-casse/5 border border-blanc-casse/15 rounded-xl p-6 mb-4">
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse mb-2">Poissonnerie · Pays d'Iroise</h3>
                <p className="txt-corps text-blanc-casse">
                  Une poissonnerie située dans une zone artisanale peu visible, sans budget communication. En structurant une stratégie nourrie par l'IA et en la mettant en œuvre avec des outils assistés&nbsp;: <strong className="text-or-mat">73&nbsp;000 vues</strong>, 622 partages, plus de 800 abonnés gagnés et <strong className="text-or-mat">+15&nbsp;% de chiffre d'affaires</strong> sur la période.
                </p>
              </div>
              <div className="bg-blanc-casse/5 border border-blanc-casse/15 rounded-xl p-6">
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse mb-2">Électricien · Pays d'Iroise</h3>
                <p className="txt-corps text-blanc-casse">
                  Comparaison manuelle de plusieurs sites fournisseurs, plusieurs fois par semaine. Mise en place d'un assistant IA dédié&nbsp;: environ 10 minutes économisées par jour, soit <strong className="text-or-mat">près de 40 heures récupérées par an</strong>.
                </p>
              </div>
            </Reveal>

            <Reveal variant="card" stagger={110}>
              <p className="txt-corps text-blanc-casse mt-8">
                Chaque solution est pensée pour produire un effet concret, mesurable&nbsp;: <strong className="text-white">temps gagné</strong> par semaine, <strong className="text-white">erreurs évitées</strong>, fiabilité des opérations, <strong className="text-white">charge mentale réduite</strong>. Les gains les plus fréquents observés sur des cas réels&nbsp;:
              </p>
              <ul className="space-y-3 pl-1 mt-4">
                {[
                  "plusieurs heures récupérées chaque semaine par collaborateur concerné",
                  "réduction significative des erreurs de saisie et des oublis",
                  "centralisation de l'information précédemment dispersée",
                  "réactivité commerciale et opérationnelle accrue",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 txt-corps text-blanc-casse">
                    <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                    <span className="text-blanc-casse">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="txt-corps font-bold text-blanc-casse pt-4">
                Une automatisation bien ciblée est souvent <span className="text-or-mat">amortie en moins d'un an</span>&nbsp;: chez l'électricien du Pays d'Iroise, environ 10 minutes économisées par jour, soit près de 40 heures récupérées par an.
              </p>
            </Reveal>
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
          title="Demander un diagnostic gratuit"
          intro="Un premier échange suffit à identifier les premières automatisations utiles dans votre activité."
          idPrefix="conception"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default ConceptionIASurMesure;
