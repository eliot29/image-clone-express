import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";
import Highlight from "@/components/secondary/Highlight";
import Reveal from "@/components/secondary/Reveal";

const PAGE_TITLE =
  "Accompagnement IA — Formation ChatGPT et conseil IA pour PME en Bretagne | Semaine 54";
const PAGE_DESC =
  "Formation IA en Bretagne : ChatGPT, Claude, Gemini, Copilot. Intégration des usages, structuration des pratiques, conseil sur le choix des outils. Accompagnement IA progressif et humain pour TPE et PME.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accompagnement IA (formation, intégration, conseil)",
  provider: { "@type": "LocalBusiness", name: "Semaine 54" },
  areaServed: ["Finistère", "Côtes-d'Armor", "Morbihan"],
  description: PAGE_DESC,
};

const AccompagnementIA = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href="https://semaine54.fr/accompagnement-ia" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content="https://semaine54.fr/accompagnement-ia" />
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
                Accompagnement IA pour TPE et PME
              </h1>
              <p className="txt-corps text-ardoise/80 mx-auto">
                Formation aux outils, intégration dans les habitudes de travail, conseil sur le choix des solutions. Une montée en compétence progressive, ancrée dans votre réalité métier.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-navy py-14 md:py-20">
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-blanc-casse mb-10 text-center">
                <span className="text-or-mat">Mieux utiliser l'IA</span> déjà à votre portée
              </h2>
            </Reveal>
            <Reveal variant="card" stagger={110}>
              <p className="txt-corps text-blanc-casse mb-4">
                Toutes les entreprises n'ont pas besoin de développer des solutions techniques complexes. Pour beaucoup, le vrai sujet est de <strong className="text-white">structurer les usages</strong> et de mieux utiliser les outils IA déjà accessibles&nbsp;: <strong className="text-or-mat">ChatGPT</strong>, <strong className="text-or-mat">Claude</strong>, <strong className="text-or-mat">Gemini</strong>, <strong className="text-or-mat">Copilot</strong>. Bien employés, ils suffisent à transformer le quotidien d'un service entier.
              </p>
              <p className="txt-corps text-blanc-casse mb-4">
                L'enjeu est avant tout <strong className="text-white">humain et organisationnel</strong>&nbsp;: aider les équipes à adopter l'IA sans la subir, dans un cadre clair et utile.
              </p>
              <Highlight variant="soft-dark">
                L'objectif est une <span className="text-or-mat">adoption progressive</span>, ancrée dans la pratique, qui produit des résultats sans bouleverser le quotidien.
              </Highlight>
            </Reveal>
          </div>
        </section>

        {/* Formation */}
        <section id="formation" className="bg-blanc-casse py-14 md:py-20" style={{ scrollMarginTop: '120px' }}>
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-navy mb-10">
                <span className="text-or-mat">Formation</span> aux outils IA
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card" stagger={110}>
                <p className="font-dm text-or-mat font-semibold mb-5">
                  ChatGPT · Claude · Gemini · Copilot
                </p>
                <p className="txt-corps text-ardoise/85">
                  Une formation concrète, basée sur des <strong className="text-navy">cas réels d'entreprise</strong>. L'objectif n'est pas d'enseigner la théorie de l'IA, mais de transformer rapidement l'usage des outils en <strong className="text-or-mat">gains de temps mesurables</strong>.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-3">Ce qui est couvert</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "apprentissage concret des outils du marché : ChatGPT, Claude, Gemini, Copilot",
                      "compréhension des forces, limites et coûts de chaque outil",
                      "maîtrise des bons réflexes et du prompting",
                      "vérification de la qualité des résultats produits",
                      "mise en pratique sur vos cas réels d'entreprise",
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
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy pt-8">Format</h3>
                <p className="txt-corps text-ardoise/85 mt-3">
                  Sessions ciblées, en petit groupe ou en individuel, sur site ou en visio. Pas de formation standard délivrée à des dizaines d'entreprises en même temps. Chaque session est calée sur vos cas concrets&nbsp;: rédaction de devis, réponses clients, comptes-rendus de réunion, analyses, recherche d'information, organisation du travail.
                </p>
                <Highlight variant="soft-light">
                  L'objectif&nbsp;: rendre vos équipes <span className="text-or-mat">autonomes et efficaces rapidement</span>, avec un gain directement applicable dès la fin de la session.
                </Highlight>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Intégration */}
        <section id="integration" className="bg-navy py-14 md:py-20" style={{ scrollMarginTop: '120px' }}>
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-blanc-casse mb-10">
                <span className="text-or-mat">Intégration des usages IA</span> dans l'entreprise
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card" stagger={110}>
                <p className="txt-corps text-blanc-casse">
                  Adapter l'IA aux habitudes de travail et aux besoins réels.
                </p>
                <p className="txt-corps text-blanc-casse mt-4">
                  Donner accès à des outils IA ne suffit pas. Sans cadre, les usages deviennent rapidement désorganisés&nbsp;: chacun teste de son côté, les pratiques s'éparpillent, les résultats restent décevants. L'intégration consiste à <strong className="text-white">structurer les usages</strong> dans la durée, dans un <strong className="text-white">cadre clair</strong>, pour qu'ils deviennent réellement utiles à l'entreprise.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-blanc-casse/5 border border-blanc-casse/15 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse mb-3">Ce que je mets en place</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "identification des bons cas d'usage par service",
                      "cadrage des pratiques et règles internes (données, confidentialité, vérification)",
                      "adaptation aux processus et aux outils existants",
                      "mise en place progressive et accompagnée, par étapes",
                      "suivi de la montée en compétence des équipes",
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
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse pt-8">Une logique humaine et progressive</h3>
                <Highlight variant="accent-dark">
                  <span className="text-or-mat">L'IA n'est jamais imposée.</span> Elle est introduite là où elle apporte un bénéfice immédiat&nbsp;: gagner du temps sur une tâche précise, fiabiliser un livrable, réduire la charge mentale.
                </Highlight>
                <p className="txt-corps text-blanc-casse mt-4">
                  Les collaborateurs concernés sont accompagnés directement, sans jargon, jusqu'à ce que l'usage devienne naturel.
                </p>
                <p className="txt-corps text-blanc-casse mt-4">
                  Cette étape évite l'écueil le plus fréquent&nbsp;: une IA présente partout, mais mal utilisée. Elle ancre des <strong className="text-white">usages utiles, durables et partagés</strong> dans le fonctionnement réel de l'entreprise.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Conseil */}
        <section id="conseil" className="bg-blanc-casse py-14 md:py-20" style={{ scrollMarginTop: '120px' }}>
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-navy mb-10">
                <span className="text-or-mat">Conseil et choix</span> des outils IA
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card" stagger={110}>
                <p className="txt-corps text-ardoise/85">
                  Faire les bons choix dans un marché saturé.
                </p>
                <p className="txt-corps text-ardoise/85 mt-4">
                  Le <strong className="text-navy">marché saturé</strong> des outils IA évolue chaque semaine. Des centaines de solutions apparaissent, souvent payantes, parfois redondantes. Sans cadre, les abonnements se multiplient sans véritable bénéfice. Mon rôle est de vous orienter vers ce qui correspond à votre niveau, à vos <strong className="text-navy">besoins réels</strong> et à votre organisation.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6 mt-8">
                  <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-3">Ce que j'apporte</h3>
                  <ul className="space-y-3 pl-1">
                    {[
                      "analyse de vos besoins réels et de votre maturité IA",
                      "sélection des outils les plus pertinents par fonction",
                      "comparaison objective entre solutions équivalentes",
                      "suppression des abonnements inutiles ou redondants",
                      "mise en cohérence avec votre organisation et vos outils existants",
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
                <Highlight variant="soft-light">
                  L'objectif&nbsp;: des <span className="text-or-mat">outils simples, adaptés et durables</span>, sans perte de temps ni d'argent.
                </Highlight>
              </Reveal>
            </div>
          </div>
        </section>

        <InternalLinks
          links={[
            { label: "Comprendre la méthode", to: "/methode-semaine-54" },
            { label: "Découvrir les solutions techniques", to: "/conception-ia-sur-mesure" },
            { label: "Pourquoi l'IA générique ne suffit pas", to: "/pourquoi-ia-generique-ne-suffit-pas" },
          ]}
        />

        <ContactCTA
          title="Demander un diagnostic gratuit"
          intro="Un premier échange suffit à identifier les usages IA les plus utiles pour vos équipes."
          idPrefix="accompagnement"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default AccompagnementIA;
