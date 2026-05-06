import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactCTA from "@/components/secondary/ContactCTA";
import InternalLinks from "@/components/secondary/InternalLinks";
import ScrollToHash from "@/components/secondary/ScrollToHash";
import Highlight from "@/components/secondary/Highlight";

const PourquoiIAGenerique = () => {
  return (
    <>
      <Helmet>
        <title>Pourquoi l'IA générique ne suffit pas pour les TPE et PME | Semaine 54</title>
        <meta name="description" content="Outils IA génériques, formations standard, solutions vendues sans diagnostic : pourquoi ça ne fonctionne pas pour les TPE et PME. Sécurité des données, RGPD, IA souveraine, approche terrain et accompagnement adapté en Bretagne." />
        <link rel="canonical" href="/pourquoi-ia-generique-ne-suffit-pas" />
      </Helmet>
      <ScrollToHash />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                Pourquoi l'IA générique ne suffit pas
              </h1>
              <p className="font-dm text-ardoise/80 text-lg leading-relaxed">
                Les outils se multiplient, les promesses aussi. Les résultats concrets en entreprise, beaucoup moins. Comprendre pourquoi un accompagnement adapté change la donne pour une TPE ou une PME.
              </p>
            </div>
          </div>
        </section>

        {/* Le constat */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="constat" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center" style={{ scrollMarginTop: '120px' }}>
                Le constat : trop d'outils, trop peu de résultats
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Les outils d'intelligence artificielle se multiplient à un rythme inédit. Chaque semaine, de nouvelles solutions apparaissent. La majorité des entreprises qui se lancent le font seules, sans diagnostic préalable, en s'appuyant sur des <strong className="text-blanc-casse">outils génériques</strong> pensés pour tout le monde — et donc adaptés à personne en particulier.
                </p>
                <p>
                  Le discours sur l'IA est aujourd'hui partout. Les <strong className="text-blanc-casse">résultats concrets</strong>, eux, restent rares. Trois raisons expliquent l'essentiel de ces échecs.
                </p>

                <h3 className="font-dm font-bold text-xl text-or-mat pt-2">Absence de diagnostic</h3>
                <p>
                  Beaucoup d'entreprises choisissent un outil avant même d'avoir compris le problème à résoudre. Le résultat est prévisible&nbsp;: une solution mal positionnée, qui ne s'attaque pas aux vrais points de friction. L'outil tourne, mais ne change rien à la charge de travail réelle.
                </p>

                <h3 className="font-dm font-bold text-xl text-or-mat pt-2">Mauvais calibrage</h3>
                <p>
                  Un outil IA générique n'est jamais adapté à un métier précis. Les prompts sont approximatifs, les workflows ne correspondent pas à la réalité des opérations, et les sorties produites manquent de qualité. Ce n'est pas l'IA qui est en cause&nbsp;: c'est <strong className="text-blanc-casse">l'absence de calibrage</strong> par rapport à un contexte réel.
                </p>

                <h3 className="font-dm font-bold text-xl text-or-mat pt-2">Aucun suivi</h3>
                <p>
                  Une formation IA délivrée à 40 entreprises en visio en même temps n'a quasiment aucun effet durable. Une solution installée puis abandonnée, faute d'<strong className="text-blanc-casse">accompagnement</strong>, finit oubliée au bout de quelques semaines. Sans suivi, l'IA ne s'ancre jamais dans le quotidien.
                </p>

                <Highlight variant="accent-dark" className="text-center">
                  Le vrai sujet&nbsp;: <span className="text-or-mat">l'accompagnement et la personnalisation.</span>
                </Highlight>
              </div>
            </div>
          </div>
        </section>

        {/* Objections PME */}
        <section className="bg-blanc-casse py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center">
                Les freins légitimes des dirigeants de TPE et PME
              </h2>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  La plupart des dirigeants partagent les mêmes interrogations face à l'IA&nbsp;: pas le temps de tester des outils inutiles, pas envie d'envoyer des <strong className="text-navy">données sensibles</strong> n'importe où, pas l'intention d'engager un projet que personne ne comprendra dans six mois. Ces freins sont parfaitement légitimes. Ils sont même un signe de bon sens.
                </p>
                <p>
                  L'approche Semaine 54 est construite pour répondre à ces objections, point par point&nbsp;:
                </p>
                <ul className="space-y-3 pl-1">
                  {[
                    "pas de grand projet risqué : on avance par étapes, vous arrêtez quand vous voulez",
                    "vos données ne circulent pas sans raison : les accès sont limités au strict nécessaire",
                    "pour les données sensibles, des solutions d'IA souveraine peuvent être privilégiées",
                    "vous savez exactement ce qui tourne chez vous, avec quels outils et pourquoi",
                    "l'IA n'est jamais là pour remplacer vos équipes, mais pour les libérer du répétitif",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Highlight variant="accent-light" className="text-center">
                  On commence petit, mais utile.{" "}
                  <span className="text-or-mat">Vous gardez la main</span> à chaque étape.
                </Highlight>
              </div>
            </div>
          </div>
        </section>

        {/* Sécurité, RGPD, IA souveraine */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="securite" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center" style={{ scrollMarginTop: '120px' }}>
                Sécurité des données, RGPD et IA souveraine
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  La question des données revient systématiquement, à juste titre. Une entreprise n'a pas à exposer ses informations clients, ses devis, ses contrats ou ses échanges internes pour gagner du temps. La sécurité fait partie intégrante du cadrage de chaque solution.
                </p>
                <p>
                  Concrètement&nbsp;:
                </p>
                <ul className="space-y-3 pl-1">
                  {[
                    "les flux et accès aux données sont limités à ce qui est strictement nécessaire",
                    "les outils utilisés sont conformes au RGPD",
                    "les hébergements européens sont privilégiés lorsque c'est possible",
                    "pour les données sensibles, des solutions d'IA souveraine comme Mistral peuvent être mises en avant",
                    "vous conservez la maîtrise complète de vos données et de vos décisions",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  L'objectif n'est pas de présenter une solution unique comme miraculeuse, mais de choisir, pour chaque cas, l'outil le plus adapté à votre niveau de sensibilité et à votre organisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi l'IA en 2026 */}
        <section className="bg-blanc-casse py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center">
                Pourquoi l'IA en 2026 change la donne pour les PME
              </h2>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  Pendant des années, certaines solutions étaient hors de portée des petites structures&nbsp;: équipes dédiées, mois de développement, budgets élevés. L'<strong className="text-navy">IA générative</strong> a fait sauter ces barrières. Ce qui nécessitait autrefois un développeur et plusieurs milliers d'euros peut aujourd'hui être mis en place en quelques jours, pour une fraction du coût.
                </p>
                <p>
                  <strong className="text-navy">Automatisation</strong>, génération de contenu, analyse documentaire, <strong className="text-navy">assistants IA</strong>, chatbots, reporting automatisé&nbsp;: les outils sont opérationnels. Pas expérimentaux. Les TPE et PME peuvent désormais accéder à des leviers de productivité jusque-là réservés aux grands groupes.
                </p>
                <p>
                  Les prochains mois verront émerger une nouvelle génération d'outils — agents IA autonomes, plateformes capables d'agir directement depuis le poste de travail — qui amplifieront les gains possibles. Les entreprises qui s'organisent dès aujourd'hui prennent un <strong className="text-navy">avantage opérationnel</strong> réel sur celles qui attendent.
                </p>
                <p className="font-bold text-navy">
                  Une automatisation bien ciblée est souvent amortie en moins d'un an. Plus tôt elle est en place, plus tôt elle produit du retour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implémenteur / parcours Clément */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="parcours" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center" style={{ scrollMarginTop: '120px' }}>
                Un AI Implémenteur de terrain, pas un théoricien
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Je suis <strong className="text-blanc-casse">Clément, 35 ans, fondateur de Semaine 54</strong>. J'ai exercé pendant une dizaine d'années plusieurs métiers dans la grande distribution. J'ai aussi brièvement vendu des sites internet — une expérience qui m'a appris ce que je ne voulais pas faire&nbsp;: conclure en un rendez-vous sans avoir compris l'entreprise en face.
                </p>
                <p>
                  Depuis plus de trois ans, je consacre cinq à huit heures par semaine à tester, documenter et expérimenter les outils d'intelligence artificielle. Ces tests, je les mène dans ma vie personnelle, dans mon quotidien professionnel et avec des chefs d'entreprise. Autant de contextes réels qui m'ont permis de comprendre ce qui fonctionne — et ce qui ne fonctionne pas. Ce temps investi, c'est du temps que vous n'avez pas à passer.
                </p>
                <p>
                  Je ne suis pas ingénieur IA. Je suis un <strong className="text-or-mat">praticien de terrain</strong> — un <strong className="text-or-mat">AI Implémenteur</strong>. Mon rôle est de faire le tri dans un marché saturé, de <strong className="text-blanc-casse">comprendre votre métier avant de parler technologie</strong>, et de mettre en place ce qui produit un effet concret sur votre quotidien.
                </p>
                <p className="italic text-blanc-casse/75">
                  Je travaille en langage clair, avec vos équipes. Vous gardez toujours la main sur vos données et vos décisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemples concrets */}
        <section className="bg-blanc-casse py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="preuves" className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center" style={{ scrollMarginTop: '120px' }}>
                Deux exemples concrets, deux gains mesurables
              </h2>
              <div className="space-y-4 mb-4">
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">Poissonnerie — Pays d'Iroise</h3>
                  <p className="font-dm text-ardoise/85 leading-relaxed">
                    Une poissonnerie située dans une zone artisanale peu visible, sans budget communication. En structurant une stratégie nourrie par l'IA et en la mettant en œuvre avec des outils assistés&nbsp;: <strong className="text-or-mat">73&nbsp;000 vues</strong>, 622 partages, plus de 800 abonnés gagnés et <strong className="text-or-mat">+15&nbsp;% de chiffre d'affaires</strong> sur la période.
                  </p>
                </div>
                <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">Électricien — Pays d'Iroise</h3>
                  <p className="font-dm text-ardoise/85 leading-relaxed">
                    Comparaison manuelle de plusieurs sites fournisseurs, plusieurs fois par semaine. Mise en place d'un assistant IA dédié&nbsp;: environ 10 minutes économisées par jour, soit <strong className="text-or-mat">près de 40 heures récupérées par an</strong>.
                  </p>
                </div>
              </div>
              <p className="font-dm font-bold text-navy text-lg leading-snug text-center pt-2">
                L'approche vient du terrain. <span className="text-or-mat">Pas d'une démonstration théorique.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Différence avec agences et formations */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5 text-center">
                Une approche différente des agences et des formations classiques
              </h2>
              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-4">
                <p>
                  Le marché propose souvent deux modèles. D'un côté, des agences qui vendent une solution en un rendez-vous, sans diagnostic sérieux. De l'autre, des formations génériques délivrées simultanément à des dizaines d'entreprises aux situations très différentes. Dans les deux cas, l'écart avec votre réalité est trop grand pour produire un effet durable.
                </p>
                <p>Chez Semaine 54&nbsp;:</p>
                <ul className="space-y-3 pl-1">
                  {[
                    "rien n'est vendu avant d'être compris",
                    "rien n'est installé avant d'être calibré",
                    "rien n'est livré sans être validé en conditions réelles",
                    "pas de package imposé avant diagnostic",
                    "pas de formation standard délivrée à des dizaines d'entreprises en même temps",
                    "une relation construite dans la durée, pas une prestation one-shot",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <strong className="text-blanc-casse">Semaine 54 est un partenaire dédié aux TPE et PME bretonnes</strong> pour des <strong className="text-blanc-casse">solutions construites sur-mesure</strong>, autour de votre métier et de votre organisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks
          links={[
            { label: "Découvrir la méthode", to: "/methode-semaine-54" },
            { label: "Découvrir les solutions techniques", to: "/conception-ia-sur-mesure" },
            { label: "Découvrir l'accompagnement IA", to: "/accompagnement-ia" },
          ]}
        />

        <ContactCTA
          title="Demander un diagnostic gratuit"
          intro="Un premier échange suffit souvent à voir si l'IA peut réellement vous faire gagner du temps."
          idPrefix="pq-ia"
        />
      </main>
      <FooterSection />
    </>
  );
};

export default PourquoiIAGenerique;