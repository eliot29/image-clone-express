import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";

const MethodeSemaine54 = () => {
  return (
    <>
      <Helmet>
        <title>La méthode Semaine 54 — Accompagnement IA pour TPE et PME en Bretagne | Semaine 54</title>
        <meta name="description" content="Découvrez la méthode Semaine 54 : diagnostic, orientation, déploiement, suivi. Un accompagnement IA pragmatique et progressif pour TPE et PME, avec un seul interlocuteur en Bretagne." />
        <link rel="canonical" href="/methode-semaine-54" />
      </Helmet>
      <ScrollToHash />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                La méthode Semaine 54
              </h1>
              <p className="font-dm text-ardoise/80 text-lg leading-relaxed">
                Comment se déroule un accompagnement&nbsp;: à qui il s'adresse, comment les besoins sont identifiés, comment les projets avancent. Une démarche simple, structurée, avec un seul interlocuteur du début à la fin.
              </p>
            </div>
          </div>
        </section>

        {/* À qui s'adresse */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="qui" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center" style={{ scrollMarginTop: '120px' }}>
                À qui s'adresse Semaine 54
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Semaine 54 s'adresse aux TPE et PME qui souhaitent gagner du temps sans complexifier leur fonctionnement, et sans engager un projet de transformation lourd. L'IA en entreprise ne concerne pas uniquement les dirigeants&nbsp;: tous les profils sont concernés dès qu'une partie du quotidien repose sur des tâches répétitives ou peu valorisantes.
                </p>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Des profils variés, dans tous les services</h3>
                <ul className="space-y-2 pl-1">
                  {[
                    "fonctions administratives",
                    "gestion et back-office",
                    "commerce et relation client",
                    "équipes terrain et opérationnelles",
                    "coordination et pilotage",
                    "support et services internes",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse/85">{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Les tâches concernées</h3>
                <p>
                  Dans la plupart des entreprises, une grande partie du temps est absorbée par des actions à faible valeur ajoutée&nbsp;:
                </p>
                <ul className="space-y-2 pl-1">
                  {[
                    "saisie et ressaisie d'informations",
                    "relances clients ou fournisseurs",
                    "recherche d'informations dans plusieurs outils",
                    "suivi commercial et suivi client",
                    "organisation de l'activité et planning",
                    "reporting et tableaux de suivi",
                    "génération de documents (devis, comptes-rendus, courriers)",
                    "centralisation et mise à jour des données",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse/85">{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Des gains rapidement significatifs</h3>
                <p>
                  Une automatisation bien ciblée, même sur une seule tâche, peut représenter plusieurs heures gagnées chaque semaine. Multipliés par le nombre de collaborateurs concernés, ces gains deviennent rapidement importants à l'échelle d'une équipe ou d'une entreprise. Les solutions s'intègrent dans votre organisation actuelle, s'appuient sur vos outils existants et respectent vos habitudes de travail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Les 4 étapes */}
        <section className="bg-blanc-casse py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="etapes" className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center" style={{ scrollMarginTop: '120px' }}>
                Les quatre étapes d'un accompagnement
              </h2>
              <p className="font-dm text-ardoise/75 text-center mb-8 max-w-2xl mx-auto">
                Une démarche progressive, lisible, sans engagement avant d'avoir compris ce qui peut réellement vous faire gagner du temps.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-dm font-bold text-xl text-navy mb-2">01. Diagnostic (20 à 30 minutes)</h3>
                  <p className="font-dm text-ardoise/85 leading-relaxed mb-2">
                    Un échange par téléphone ou en visio pour comprendre votre activité, votre organisation, vos contraintes et vos objectifs réels. C'est la première étape, indispensable, pour ne proposer que ce qui aura un véritable impact.
                  </p>
                  <p className="font-dm text-ardoise/85 leading-relaxed">
                    Nous identifions ensemble les tâches chronophages, les points de friction, les zones où l'information circule mal et les actions offrant le meilleur retour sur investissement. Le ROI est évalué simplement&nbsp;: temps gagné, fiabilité, charge mentale réduite.
                  </p>
                  <p className="italic text-ardoise/65 mt-2">Sans engagement. Aucune vente forcée.</p>
                </div>

                <div>
                  <h3 className="font-dm font-bold text-xl text-navy mb-2">02. Orientation et proposition</h3>
                  <p className="font-dm text-ardoise/85 leading-relaxed mb-2">
                    À l'issue du diagnostic, une orientation claire est définie. Toutes les entreprises n'ont pas le même besoin&nbsp;: certaines cherchent à supprimer des tâches techniques, d'autres à mieux utiliser les outils IA déjà accessibles. Deux approches sont possibles, et peuvent se combiner&nbsp;: la <strong className="text-navy">Conception IA sur-mesure</strong> et l'<strong className="text-navy">Accompagnement IA</strong>.
                  </p>
                  <p className="font-dm text-ardoise/85 leading-relaxed">
                    Une proposition vous est transmise sous quelques jours&nbsp;: solutions retenues, gains attendus exprimés en temps et en simplicité, outils utilisés, articulation avec votre existant, calendrier. Vous savez précisément ce qui est prévu, et pourquoi.
                  </p>
                </div>

                <div>
                  <h3 className="font-dm font-bold text-xl text-navy mb-2">03. Déploiement et ajustement</h3>
                  <p className="font-dm text-ardoise/85 leading-relaxed mb-2">
                    Les solutions sont mises en place dans vos conditions réelles, avec vos données et vos outils. Cette étape est essentielle&nbsp;: une solution ne vaut que si elle fonctionne sur le terrain, pas en démonstration.
                  </p>
                  <p className="font-dm text-ardoise/85 leading-relaxed">
                    Selon le besoin, le déploiement peut concerner la mise en place d'automatisations et d'outils, ou des sessions de formation et de cadrage des usages. Les retours utilisateurs guident les ajustements jusqu'à ce que l'usage devienne naturel.
                  </p>
                  <p className="italic text-ardoise/65 mt-2">L'objectif n'est pas de livrer un outil, mais une solution réellement utilisée.</p>
                </div>

                <div>
                  <h3 className="font-dm font-bold text-xl text-navy mb-2">04. Autonomie et suivi</h3>
                  <p className="font-dm text-ardoise/85 leading-relaxed mb-2">
                    L'objectif est votre <strong className="text-navy">autonomie</strong>, pas votre dépendance. Une solution n'a d'intérêt que si elle vit dans la durée, sans intervention permanente d'un prestataire externe. Vous comprenez comment elle fonctionne, comment l'utiliser et comment l'adapter si vos besoins évoluent.
                  </p>
                  <p className="font-dm text-ardoise/85 leading-relaxed">
                    Un suivi reste possible pour ajuster les automatisations, répondre aux questions et approfondir certains usages. Mais c'est vous qui décidez de la fréquence et de l'intensité.
                  </p>
                  <p className="font-bold text-navy pt-2">Un seul interlocuteur, du diagnostic jusqu'au suivi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La logique */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center">
                Une logique simple&nbsp;: pragmatisme, autonomie, progressivité
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  La méthode Semaine 54 repose sur quelques principes simples, appliqués systématiquement.
                </p>
                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Pragmatisme</h3>
                <p>
                  Aucune solution n'est mise en place pour la démonstration. Chaque action doit produire un effet concret&nbsp;: temps gagné, erreurs évitées, charge mentale réduite. Si une piste n'apporte pas suffisamment de valeur, elle n'est pas retenue.
                </p>
                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Autonomie</h3>
                <p>
                  L'objectif n'est pas de vous rendre dépendant d'un prestataire. Vous comprenez ce qui est mis en place, vous l'utilisez et vous pouvez l'ajuster vous-même. Le savoir-faire reste dans l'entreprise.
                </p>
                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Progressivité</h3>
                <p>
                  Pas de grand projet risqué. On commence par un cas simple, on valide, puis on étend. Cette approche par étapes permet de mesurer les gains à chaque pas, et d'arrêter à tout moment.
                </p>
                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Un seul interlocuteur</h3>
                <p>
                  De l'audit jusqu'à la mise en service, vous échangez avec une seule personne en Bretagne. Pas de relais, pas de chef de projet intermédiaire. Le contexte est connu, les décisions sont rapides.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks
          links={[
            { label: "Découvrir les solutions techniques", to: "/conception-ia-sur-mesure" },
            { label: "Découvrir l'accompagnement IA", to: "/accompagnement-ia" },
            { label: "Pourquoi l'IA générique ne suffit pas", to: "/pourquoi-ia-generique-ne-suffit-pas" },
          ]}
        />

        <ContactCTA
          title="Demander un diagnostic"
          intro="Un premier échange de 20 à 30 minutes suffit pour identifier plusieurs heures de tâches automatisables chaque semaine."
          subIntro="On commence petit, mais utile. Vous arrêtez quand vous voulez."
          idPrefix="methode"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default MethodeSemaine54;