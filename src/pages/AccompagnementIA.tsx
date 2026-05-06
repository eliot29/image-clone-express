import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";

const AccompagnementIA = () => {
  return (
    <>
      <Helmet>
        <title>Accompagnement IA — Formation ChatGPT et conseil IA pour PME en Bretagne | Semaine 54</title>
        <meta name="description" content="Formation IA en Bretagne : ChatGPT, Claude, Gemini, Copilot. Intégration des usages, structuration des pratiques, conseil sur le choix des outils. Accompagnement IA progressif et humain pour TPE et PME." />
        <link rel="canonical" href="/accompagnement-ia" />
      </Helmet>
      <ScrollToHash />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                Accompagnement IA pour TPE et PME
              </h1>
              <p className="font-dm text-ardoise/80 text-lg leading-relaxed">
                Formation aux outils, intégration dans les habitudes de travail, conseil sur le choix des solutions. Une montée en compétence progressive, ancrée dans votre réalité métier.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center">
                Mieux utiliser l'IA déjà à votre portée
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Toutes les entreprises n'ont pas besoin de développer des solutions techniques complexes. Pour beaucoup, le vrai sujet est de <strong className="text-blanc-casse">structurer les usages</strong> et de mieux utiliser les outils IA déjà accessibles&nbsp;: ChatGPT, Claude, Gemini, Copilot. Bien employés, ils suffisent à transformer le quotidien d'un service entier.
                </p>
                <p>
                  L'enjeu est avant tout <strong className="text-blanc-casse">humain et organisationnel</strong>&nbsp;: aider les équipes à adopter l'IA sans la subir, dans un cadre clair et utile. L'objectif est une <strong className="text-blanc-casse">adoption progressive</strong>, ancrée dans la pratique, qui produit des résultats sans bouleverser le quotidien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formation */}
        <section id="formation" className="bg-blanc-casse py-10" style={{ scrollMarginTop: '120px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-3">
                Formation aux outils IA
              </h2>
              <p className="font-dm text-or-mat font-semibold mb-5">
                ChatGPT · Claude · Gemini · Copilot
              </p>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  Une formation concrète, basée sur des cas réels rencontrés dans votre entreprise. L'objectif n'est pas d'enseigner la théorie de l'IA, mais de <strong className="text-navy">transformer rapidement l'usage des outils en gains de temps mesurables</strong>.
                </p>

                <h3 className="font-dm font-bold text-xl text-navy pt-2">Ce qui est couvert</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "apprentissage concret des outils du marché : ChatGPT, Claude, Gemini, Copilot",
                    "compréhension des forces, limites et coûts de chaque outil",
                    "maîtrise des bons réflexes et du prompting",
                    "qualité, fiabilité et vérification des résultats produits",
                    "cadrage des usages professionnels par fonction",
                    "mise en pratique sur vos cas réels d'entreprise",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-navy pt-2">Format</h3>
                <p>
                  Sessions ciblées, en petit groupe ou en individuel, sur site ou en visio. Pas de formation standard délivrée à des dizaines d'entreprises en même temps. Chaque session est calée sur vos cas concrets&nbsp;: rédaction de devis, réponses clients, comptes-rendus de réunion, analyses, recherche d'information, organisation du travail.
                </p>

                <p className="font-bold text-navy pt-2">
                  L'objectif&nbsp;: rendre vos équipes autonomes et efficaces rapidement, avec un gain directement applicable dès la fin de la session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intégration */}
        <section id="integration" className="bg-navy py-10" style={{ scrollMarginTop: '120px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-3">
                Intégration des usages IA dans l'entreprise
              </h2>
              <p className="font-dm text-or-mat italic mb-5">
                Adapter l'IA aux habitudes de travail et aux besoins réels.
              </p>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Donner accès à des outils IA ne suffit pas. Sans cadre, les usages deviennent rapidement désorganisés&nbsp;: chacun teste de son côté, les pratiques s'éparpillent, les résultats restent décevants. L'intégration consiste à <strong className="text-blanc-casse">structurer ces usages dans la durée</strong>, pour qu'ils deviennent réellement utiles à l'entreprise.
                </p>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Ce qui est mis en place</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "identification des bons cas d'usage par service",
                    "cadrage des pratiques et règles internes (données, confidentialité, vérification)",
                    "adaptation aux processus et aux outils existants",
                    "mise en place progressive et accompagnée, par étapes",
                    "suivi de la montée en compétence des équipes",
                    "construction d'usages utiles, durables et partagés",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse/85">{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Une logique humaine et progressive</h3>
                <p>
                  L'IA n'est jamais imposée. Elle est introduite là où elle apporte un bénéfice immédiat&nbsp;: gagner du temps sur une tâche précise, fiabiliser un livrable, réduire la charge mentale. Les collaborateurs concernés sont accompagnés directement, sans jargon, jusqu'à ce que l'usage devienne naturel.
                </p>

                <p>
                  Cette étape évite l'écueil le plus fréquent&nbsp;: une IA présente partout, mais mal utilisée. Elle ancre des pratiques concrètes dans le fonctionnement réel de l'entreprise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conseil */}
        <section id="conseil" className="bg-blanc-casse py-10" style={{ scrollMarginTop: '120px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-3">
                Conseil et choix des outils IA
              </h2>
              <p className="font-dm text-or-mat italic mb-5">
                Faire les bons choix dans un marché saturé.
              </p>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  Le marché des outils IA évolue chaque semaine. Des centaines de solutions apparaissent, souvent payantes, parfois redondantes. Sans cadre, les abonnements se multiplient sans véritable bénéfice. Le rôle du conseil est de <strong className="text-navy">vous orienter vers ce qui correspond à votre niveau, à vos besoins réels et à votre organisation</strong>.
                </p>

                <h3 className="font-dm font-bold text-xl text-navy pt-2">Ce qui est apporté</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "analyse de vos besoins réels et de votre maturité IA",
                    "sélection des outils les plus pertinents par fonction",
                    "comparaison objective entre solutions équivalentes",
                    "suppression des abonnements inutiles ou redondants",
                    "mise en cohérence avec votre organisation et vos outils existants",
                    "choix d'outils simples, adaptés et durables",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-bold text-navy pt-2">
                  L'objectif est d'aller à l'essentiel, sans perte de temps ni d'argent.
                </p>
              </div>
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
          title="Demander un diagnostic"
          intro="Un premier échange suffit à identifier les usages IA les plus utiles pour vos équipes."
          subIntro="Sans engagement. Aucune vente forcée."
          idPrefix="accompagnement"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default AccompagnementIA;