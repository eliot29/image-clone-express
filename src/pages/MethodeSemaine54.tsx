import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";
import Highlight from "@/components/secondary/Highlight";
import Reveal from "@/components/secondary/Reveal";

const PAGE_TITLE =
  "La méthode Semaine 54 — Accompagnement IA pour TPE et PME en Bretagne | Semaine 54";
const PAGE_DESC =
  "Découvrez la méthode Semaine 54 : diagnostic, orientation, déploiement, suivi. Un accompagnement IA pragmatique et progressif pour TPE et PME, avec un seul interlocuteur en Bretagne.";

const MethodeSemaine54 = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href="https://semaine54.fr/methode-semaine-54" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content="https://semaine54.fr/methode-semaine-54" />
        <meta property="og:image" content="https://semaine54.fr/og-semaine54.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>
      <ScrollToHash />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-8">
          <div className="section-wrap">
            <div className="text-center">
              <h1 className="font-dm font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] text-navy mb-4">
                La méthode Semaine 54
              </h1>
              <p className="txt-corps text-ardoise/80 mx-auto">
                Comment se déroule un accompagnement&nbsp;: à qui il s'adresse, comment les besoins sont identifiés, comment les projets avancent. Une démarche simple, structurée, avec un seul interlocuteur du début à la fin.
              </p>
            </div>
          </div>
        </section>

        {/* À qui s'adresse */}
        <section className="bg-navy py-14 md:py-20">
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 id="qui" className="txt-section text-blanc-casse mb-10 text-center" style={{ scrollMarginTop: '120px' }}>
                À qui s'adresse Semaine 54
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card">
                <p className="txt-corps text-blanc-casse">
                  Semaine 54 s'adresse aux TPE et PME qui souhaitent <strong className="text-or-mat">gagner du temps</strong> <strong className="text-white">sans complexifier leur fonctionnement</strong>, et sans engager un projet de transformation lourd. L'IA en entreprise ne concerne pas uniquement les dirigeants&nbsp;: tous les profils sont concernés dès qu'une partie du quotidien repose sur des <strong className="text-white">tâches répétitives</strong> ou peu valorisantes.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse pt-8">Des profils variés, dans tous les services</h3>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "fonctions administratives",
                    "gestion et back-office",
                    "commerce et relation client",
                    "équipes terrain et opérationnelles",
                    "coordination et pilotage",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 txt-corps text-blanc-casse">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse">{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse pt-8">Les tâches concernées</h3>
                <p className="txt-corps text-blanc-casse mt-3">
                  Dans la plupart des entreprises, une grande partie du temps est absorbée par des actions à <strong className="text-white">faible valeur ajoutée</strong>&nbsp;:
                </p>
                <ul className="space-y-3 pl-1 mt-3">
                  {[
                    "saisie et ressaisie d'informations",
                    "relances clients ou fournisseurs",
                    "recherche d'informations dans plusieurs outils",
                    "génération de documents (devis, comptes-rendus, courriers)",
                    "rapports et tableaux de suivi",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 txt-corps text-blanc-casse">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span className="text-blanc-casse">{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-blanc-casse pt-8">Des gains rapidement significatifs</h3>
                <p className="txt-corps text-blanc-casse mt-3">
                  Une automatisation bien ciblée, même sur une seule tâche, peut représenter <strong className="text-or-mat">plusieurs heures gagnées chaque semaine</strong>. Multipliés par le nombre de collaborateurs concernés, ces <strong className="text-white">gains rapidement significatifs</strong> deviennent importants à l'échelle d'une équipe ou d'une entreprise. Les solutions s'intègrent dans votre organisation actuelle, s'appuient sur vos outils existants et respectent vos habitudes de travail.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Les 4 étapes */}
        <section className="bg-blanc-casse py-14 md:py-20">
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 id="etapes" className="txt-section text-navy mb-10 text-center" style={{ scrollMarginTop: '120px' }}>
                Les <span className="text-or-mat">quatre étapes</span> d'un accompagnement
              </h2>
            </Reveal>
            <Reveal variant="card">
              <p className="txt-corps text-ardoise/75 text-center mx-auto mb-8">
                Une démarche progressive, lisible, sans engagement avant d'avoir compris ce qui peut réellement vous faire gagner du temps.
              </p>
            </Reveal>

            <Reveal variant="card" stagger={110} className="space-y-6">
              <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-2"><span className="text-or-mat">01.</span> Diagnostic (20 à 30 minutes)</h3>
                <p className="txt-corps text-ardoise/85 mb-2">
                  Un échange par téléphone ou en visio pour comprendre votre activité, votre organisation, vos contraintes et vos objectifs réels. C'est la première étape, indispensable, pour ne proposer que ce qui aura un véritable impact.
                </p>
                <p className="txt-corps text-ardoise/85">
                  Nous identifions ensemble les tâches chronophages, les points de friction, les zones où l'information circule mal et les actions offrant le meilleur <strong className="text-navy">retour sur investissement</strong>. Le ROI est évalué simplement&nbsp;: temps gagné, fiabilité, charge mentale réduite.
                </p>
                <p className="txt-corps text-or-mat font-semibold mt-2">Sans engagement. Aucune vente forcée.</p>
              </div>

              <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-2"><span className="text-or-mat">02.</span> Orientation et proposition</h3>
                <p className="txt-corps text-ardoise/85 mb-2">
                  À l'issue du diagnostic, une orientation claire est définie. Toutes les entreprises n'ont pas le même besoin&nbsp;: certaines cherchent à supprimer des tâches techniques, d'autres à mieux utiliser les outils IA déjà accessibles. Deux approches sont possibles, et peuvent se combiner&nbsp;: la <strong className="text-or-mat">conception sur mesure</strong> et l'<strong className="text-or-mat">accompagnement</strong>.
                </p>
                <p className="txt-corps text-ardoise/85">
                  Une proposition vous est transmise sous quelques jours&nbsp;: solutions retenues, gains attendus exprimés en temps et en simplicité, outils utilisés, articulation avec votre existant, calendrier. Vous savez précisément ce qui est prévu, et pourquoi.
                </p>
              </div>

              <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-2"><span className="text-or-mat">03.</span> Déploiement et ajustement</h3>
                <p className="txt-corps text-ardoise/85 mb-2">
                  Les solutions sont mises en place dans vos <strong className="text-navy">conditions réelles</strong>, avec vos données et vos outils. Cette étape est essentielle&nbsp;: une solution ne vaut que si elle fonctionne sur le terrain, pas en démonstration.
                </p>
                <p className="txt-corps text-ardoise/85">
                  Selon le besoin, le déploiement peut concerner la mise en place d'automatisations et d'outils, ou des sessions de formation et de cadrage des usages. Les retours utilisateurs guident les ajustements jusqu'à ce que l'usage devienne naturel.
                </p>
                <Highlight variant="accent-light" className="mt-3 mb-0">
                  L'objectif n'est pas de livrer un outil, mais une <span className="text-or-mat">solution réellement utilisée</span>.
                </Highlight>
              </div>

              <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-navy mb-2"><span className="text-or-mat">04.</span> Autonomie et suivi</h3>
                <p className="txt-corps text-ardoise/85 mb-2">
                  L'objectif est votre <strong className="text-or-mat">autonomie, pas votre dépendance</strong>. Une solution n'a d'intérêt que si elle vit dans la durée, sans intervention permanente d'un prestataire externe. Vous comprenez comment elle fonctionne, comment l'utiliser et comment l'adapter si vos besoins évoluent.
                </p>
                <p className="txt-corps text-ardoise/85">
                  Un suivi reste possible pour ajuster les automatisations, répondre aux questions et approfondir certains usages. Mais c'est vous qui décidez de la fréquence et de l'intensité.
                </p>
                <p className="txt-corps font-bold text-navy pt-2"><span className="text-or-mat">Un seul interlocuteur</span>, du diagnostic jusqu'au suivi.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* La logique */}
        <section className="bg-navy py-14 md:py-20">
          <div className="section-wrap">
            <Reveal variant="text">
              <h2 className="txt-section text-blanc-casse mb-10 text-center">
                Une logique simple&nbsp;: <span className="text-or-mat">pragmatisme</span>, <span className="text-or-mat">autonomie</span>, <span className="text-or-mat">progressivité</span>
              </h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal variant="card">
                <p className="txt-corps text-blanc-casse">
                  La méthode Semaine 54 repose sur quelques principes simples, appliqués systématiquement.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-or-mat pt-8">Pragmatisme</h3>
                <p className="txt-corps text-blanc-casse mt-3">
                  Aucune solution n'est mise en place pour la démonstration. Chaque action doit produire un effet concret&nbsp;: temps gagné, erreurs évitées, charge mentale réduite. Si une piste n'apporte pas suffisamment de valeur, elle n'est pas retenue.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-or-mat pt-8">Autonomie</h3>
                <p className="txt-corps text-blanc-casse mt-3">
                  L'objectif n'est pas de vous rendre dépendant d'un prestataire. Vous comprenez ce qui est mis en place, vous l'utilisez et vous pouvez l'ajuster vous-même. Le savoir-faire reste dans l'entreprise.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-or-mat pt-8">Progressivité</h3>
                <Highlight variant="accent-dark">
                  <span className="text-or-mat">Pas de grand projet risqué.</span> Je commence par un cas simple, on valide ensemble, puis on étend.
                </Highlight>
                <p className="txt-corps text-blanc-casse mt-3">
                  Cette approche par étapes permet de mesurer les gains à chaque pas, et d'arrêter à tout moment.
                </p>
              </Reveal>

              <Reveal variant="card" stagger={110}>
                <h3 className="font-dm font-bold text-[19px] sm:text-[21px] text-or-mat pt-8">Un seul interlocuteur</h3>
                <p className="txt-corps text-blanc-casse mt-3">
                  Du diagnostic jusqu'à la mise en service, vous échangez avec <strong className="text-white">un seul interlocuteur</strong> en Bretagne. Pas de relais, pas de chef de projet intermédiaire. Le contexte est connu, les décisions sont rapides.
                </p>
              </Reveal>
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
          title="Demander un diagnostic gratuit"
          intro="Un premier échange de 20 à 30 minutes suffit pour identifier plusieurs heures de tâches automatisables chaque semaine."
          idPrefix="methode"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default MethodeSemaine54;
