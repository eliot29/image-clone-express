import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const CommentCaMarche = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom.trim() || !email.trim()) {
      toast({ title: "Champs requis", description: "Merci de renseigner au moins votre nom et votre email.", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent("Demande de diagnostic gratuit — " + nom.trim());
    const body = encodeURIComponent(`Nom : ${nom.trim()}\nEmail : ${email.trim()}\nTéléphone : ${telephone.trim()}\n\nMessage :\n${message.trim()}`);
    window.location.href = `mailto:contact@semaine54.com?subject=${subject}&body=${body}`;
    toast({ title: "Redirection vers votre messagerie", description: "Votre client mail va s'ouvrir avec les informations pré-remplies." });
    setOpen(false);
    setNom(""); setEmail(""); setTelephone(""); setMessage("");
  };

  return (
    <>
      <Helmet>
        <title>Conception IA sur-mesure et Accompagnement IA pour TPE/PME | Semaine 54</title>
        <meta name="description" content="Méthode, solutions et accompagnement IA pour TPE et PME en Bretagne : automatisation, assistant IA métier, outils métier, formation, intégration et conseil. Diagnostic gratuit, mise en place concrète, gain de temps mesurable." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                Comment ça fonctionne avec Semaine 54
              </h1>
              <p className="font-dm text-ardoise/80 text-lg leading-relaxed mb-5">
                Un accompagnement simple, structuré, avec un seul interlocuteur du début à la mise en place.
              </p>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
                <p>
                  L'objectif n'est pas de transformer brutalement votre entreprise, ni de remplacer vos outils. Il s'agit d'améliorer ce qui existe déjà, là où vous perdez du temps aujourd'hui.
                </p>
                <p>
                  Les solutions s'intègrent dans votre organisation actuelle, s'appuient sur vos logiciels et s'adaptent aux habitudes de vos équipes. Pas besoin de tout changer pour obtenir des résultats concrets.
                </p>
                <p>
                  Le sujet principal reste simple&nbsp;: <strong className="text-navy">le gain de temps mesurable</strong> sur les tâches qui pèsent sur le quotidien — sans complexité technique inutile, sans projet long et risqué.
                </p>
                <p>
                  La démarche est progressive, pragmatique et toujours ancrée dans votre réalité terrain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse Semaine 54 */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="qui" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center" style={{ scrollMarginTop: '120px' }}>
                À qui s'adresse Semaine 54 ?
              </h2>

              <div className="font-dm text-blanc-casse/85 leading-relaxed space-y-5">
                <p>
                  Semaine 54 s'adresse aux TPE et PME qui souhaitent gagner du temps sans complexifier leur fonctionnement, et sans engager un projet de transformation lourd.
                </p>
                <p>
                  Contrairement à une idée reçue, l'IA en entreprise ne concerne pas uniquement les dirigeants. Tous les profils peuvent être concernés, à partir du moment où une partie du quotidien repose sur des tâches répétitives ou peu valorisantes.
                </p>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Des profils variés, dans tous les services</h3>
                <p>Les solutions Semaine 54 s'adaptent aux besoins des équipes&nbsp;:</p>
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
                      <span className="text-blanc-casse/80">{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Les tâches concernées</h3>
                <p>Dans la plupart des entreprises, une grande partie du temps est absorbée par des actions à faible valeur ajoutée&nbsp;:</p>
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
                      <span className="text-blanc-casse/80">{t}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-dm font-bold text-xl text-blanc-casse pt-2">Des gains rapidement significatifs</h3>
                <p>
                  Une automatisation bien ciblée, même sur une seule tâche, peut représenter plusieurs heures gagnées chaque semaine. Multipliés par le nombre de collaborateurs concernés, ces gains deviennent rapidement importants à l'échelle d'une équipe ou d'une entreprise.
                </p>
                <p>
                  Les solutions proposées s'intègrent dans votre organisation actuelle. Elles s'appuient sur vos outils existants et respectent vos habitudes de travail. L'objectif n'est jamais de remplacer vos équipes, mais de les libérer du travail à faible valeur pour qu'elles se concentrent sur l'essentiel.
                </p>
                <p className="font-dm font-bold text-or-mat text-lg leading-snug pt-2">
                  L'IA n'a de valeur que si elle est utilisée dans un cadre concret, compréhensible et maîtrisé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La méthode Semaine 54 */}
        <section className="bg-blanc-casse py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="methode" className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4 text-center" style={{ scrollMarginTop: '120px' }}>
                La méthode Semaine 54
              </h2>
              <p className="font-dm text-ardoise/80 text-center mb-8 max-w-2xl mx-auto">
                Un accompagnement structuré en quatre étapes, avec deux approches complémentaires&nbsp;: la <strong className="text-navy">Conception IA sur-mesure</strong> et l'<strong className="text-navy">Accompagnement IA</strong>.
              </p>

              {/* Étape 01 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">01. Diagnostic (20 à 30 minutes)</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>
                    Un échange par téléphone ou en visio pour comprendre votre activité, votre organisation, vos contraintes et vos objectifs réels. C'est la première étape, indispensable, pour ne proposer que ce qui aura un véritable impact.
                  </p>
                  <p>Ensemble, nous identifions&nbsp;:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "les tâches chronophages et répétitives",
                      "les points de friction dans votre organisation",
                      "les zones où l'information circule mal",
                      "les actions offrant le meilleur retour sur investissement (ROI)",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Le ROI est évalué de manière simple et concrète&nbsp;: temps gagné par semaine, fiabilité accrue, charge mentale réduite. Ce premier échange permet de déterminer rapidement si une solution pertinente existe — ou non.
                  </p>
                  <p className="italic text-ardoise/70">Sans engagement. Aucune vente forcée.</p>
                </div>
              </div>

              {/* Étape 02 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">02. Orientation et proposition</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>
                    À l'issue du diagnostic, une orientation claire est définie. Toutes les entreprises n'ont pas le même besoin&nbsp;: certaines cherchent à supprimer des tâches techniques, d'autres à mieux utiliser les outils IA déjà disponibles.
                  </p>
                  <p>Deux approches sont possibles, et peuvent se combiner&nbsp;:</p>
                  <div className="pl-1 space-y-3">
                    <div>
                      <p className="font-bold text-navy">Conception IA sur-mesure</p>
                      <p>
                        Pour les entreprises qui ont besoin de <strong>solutions techniques concrètes</strong>&nbsp;: automatisations, assistant IA métier, outils internes. Le gain provient de la suppression de tâches manuelles et de la fiabilisation des opérations.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-navy">Accompagnement IA</p>
                      <p>
                        Pour les entreprises qui ont surtout besoin de <strong>structurer leurs usages internes</strong>&nbsp;: formation aux outils IA, intégration dans les habitudes de travail, conseil sur le choix des outils. Le gain repose sur la montée en compétence et l'organisation.
                      </p>
                    </div>
                  </div>
                  <p>
                    Dans la pratique, beaucoup d'entreprises bénéficient d'un mélange des deux&nbsp;: quelques automatisations ciblées pour libérer du temps, et un accompagnement pour que les équipes utilisent l'IA correctement au quotidien.
                  </p>
                  <p>Une proposition vous est transmise sous quelques jours, avec&nbsp;:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "les solutions retenues",
                      "les gains attendus, exprimés en temps et en simplicité",
                      "les outils utilisés et leur articulation avec votre existant",
                      "le calendrier de mise en place",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Vous savez précisément ce qui est prévu, et pourquoi.</p>
                </div>
              </div>

              {/* Étape 03 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">03. Déploiement et ajustement</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>
                    Les solutions sont mises en place directement dans vos conditions réelles, avec vos données et vos outils. Cette étape est essentielle&nbsp;: une solution ne vaut que si elle fonctionne sur le terrain, pas en démonstration.
                  </p>
                  <p>Selon le besoin :</p>
                  <div className="pl-1 space-y-3">
                    <div>
                      <p className="font-bold text-navy">Pour la Conception IA sur-mesure&nbsp;:</p>
                      <ul className="space-y-2 pl-1 mt-2">
                        {[
                          "configuration des automatisations",
                          "connexion aux outils existants",
                          "tests en conditions réelles",
                          "ajustements selon les retours terrain",
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-navy">Pour l'Accompagnement IA&nbsp;:</p>
                      <ul className="space-y-2 pl-1 mt-2">
                        {[
                          "sessions de formation ciblées",
                          "mise en pratique sur vos cas réels",
                          "structuration des usages internes",
                          "intégration progressive dans les habitudes de travail",
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p>
                    Chaque solution est ajustée pour correspondre à votre quotidien, et non l'inverse. Les retours utilisateurs guident les corrections jusqu'à ce que l'usage devienne naturel.
                  </p>
                  <p className="italic text-ardoise/70">L'objectif n'est pas de livrer un outil, mais une solution réellement utilisée.</p>
                </div>
              </div>

              {/* Étape 04 */}
              <div>
                <h3 className="font-dm font-bold text-xl text-navy mb-3">04. Autonomie et suivi</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>
                    L'objectif est votre <strong className="text-navy">autonomie</strong>, pas votre dépendance. Une solution n'a d'intérêt que si elle vit dans la durée, sans intervention permanente d'un prestataire externe.
                  </p>
                  <p>Vous comprenez :</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "comment fonctionne la solution",
                      "comment l'utiliser",
                      "comment l'adapter si vos besoins évoluent",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Un suivi reste possible pour :</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "ajuster les automatisations",
                      "répondre aux questions",
                      "approfondir certains usages",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-navy pt-2">Un seul interlocuteur, du diagnostic jusqu'au suivi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les solutions proposées */}
        <section className="bg-navy py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="solutions" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4 text-center" style={{ scrollMarginTop: '120px' }}>
                Les solutions proposées
              </h2>
              <p className="font-dm text-blanc-casse/80 text-center mb-10 max-w-2xl mx-auto">
                Deux familles de solutions complémentaires&nbsp;: la <strong className="text-or-mat">Conception IA sur-mesure</strong> pour les besoins techniques, l'<strong className="text-or-mat">Accompagnement IA</strong> pour structurer les usages.
              </p>

              {/* Levier 1 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-2xl text-or-mat mb-2">Conception IA sur-mesure</h3>
                <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-3 mb-6">
                  <p>
                    La Conception IA sur-mesure regroupe les solutions <strong>conçues spécifiquement pour votre entreprise</strong>. Elles ne reposent pas sur un produit générique, mais sur ce dont vous avez réellement besoin au quotidien.
                  </p>
                  <p>
                    Ces solutions <strong>s'intègrent à vos outils existants</strong> (email, CRM, fichiers, ERP, agenda…), <strong>suppriment les tâches répétitives</strong> et <strong>fiabilisent vos opérations</strong> en limitant les erreurs et les oublis.
                  </p>
                  <p>
                    Trois grandes familles d'outils sont possibles, séparément ou combinées.
                  </p>
                </div>

                {/* Automatisation */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Automatisation</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Des tâches répétitives qui disparaissent de votre quotidien.
                  </p>
                  <p className="font-dm text-blanc-casse/80 text-sm mb-3 leading-relaxed">
                    L'automatisation consiste à confier à un système des actions que vous réalisez aujourd'hui à la main, dans plusieurs outils différents. L'objectif est simple&nbsp;: que ces actions s'exécutent toutes seules, au bon moment, sans erreur.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Workflows conçus sur-mesure pour vos processus",
                      "Connexion entre vos outils (email, CRM, fichiers, ERP, agenda...)",
                      "Automatisation des tâches chronophages et répétitives",
                      "Déclenchements automatiques selon des règles métier claires",
                      "Suppression des ressaisies manuelles",
                      "Réduction significative des erreurs et des oublis",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    Une fois en place, ces automatisations fonctionnent en continu, sans supervision constante. Elles libèrent du temps réel, chaque semaine, sur des tâches souvent invisibles mais très consommatrices.
                  </p>
                </div>

                {/* Assistant IA métier */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Assistant IA métier</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Un assistant qui vous accompagne dans votre travail au quotidien.
                  </p>
                  <p className="font-dm text-blanc-casse/80 text-sm mb-3 leading-relaxed">
                    Il ne s'agit pas d'un chatbot gadget, mais d'un véritable <strong>assistant connecté à vos données et à vos documents internes</strong>. Il vous aide à retrouver une information, à synthétiser un dossier ou à préparer une décision en quelques secondes.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Accès rapide à vos informations internes",
                      "Synthèse de documents, comptes-rendus, échanges",
                      "Analyse de données et aide à la décision",
                      "Centralisation des connaissances dispersées",
                      "Adapté à votre activité et à votre vocabulaire métier",
                      "Utilisation simple, sans compétence technique",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    L'objectif est d'accélérer vos prises de décision et de réduire le temps passé à chercher l'information au lieu de la traiter.
                  </p>
                </div>

                {/* Outils métier */}
                <div className="bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Outils métier</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Des outils simples, conçus pour répondre à un besoin précis.
                  </p>
                  <p className="font-dm text-blanc-casse/80 text-sm mb-3 leading-relaxed">
                    Beaucoup d'entreprises fonctionnent encore avec des fichiers Excel partagés, des feuilles bricolées ou des méthodes informelles. Les outils métier remplacent ces solutions dispersées par des <strong>interfaces simples, claires et adaptées à un usage quotidien</strong>.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Interfaces claires et rapides à prendre en main",
                      "Connexion à vos données et à vos outils existants",
                      "Automatisation intégrée directement dans l'outil",
                      "Simplification des processus internes",
                      "Remplacement des méthodes dispersées ou bricolées",
                      "Utilisation quotidienne sans complexité technique",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    Pas de logiciel complexe à déployer. Des outils simples, conçus pour être utilisés immédiatement et faire gagner du temps dès la mise en service.
                  </p>
                </div>
              </div>

              {/* Levier 2 */}
              <div>
                <h3 className="font-dm font-bold text-2xl text-or-mat mb-2">Accompagnement IA</h3>
                <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-3 mb-6">
                  <p>
                    Toutes les entreprises n'ont pas besoin de développer des solutions techniques. Pour beaucoup, le vrai sujet est de <strong>structurer les usages</strong> et de mieux utiliser les outils IA déjà accessibles.
                  </p>
                  <p>
                    L'enjeu est avant tout <strong>humain et organisationnel</strong>&nbsp;: aider les équipes à adopter l'IA sans la subir, dans un cadre clair et utile. L'objectif est une <strong>adoption progressive</strong>, ancrée dans la pratique, qui produit des résultats sans bouleverser le quotidien.
                  </p>
                </div>

                {/* Formation */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-1">Formation aux outils IA</h4>
                  <p className="font-dm text-or-mat text-sm font-semibold mb-3">ChatGPT · Claude · Gemini · Copilot</p>
                  <p className="font-dm text-blanc-casse/80 text-sm mb-3 leading-relaxed">
                    Une formation concrète, basée sur des cas réels rencontrés dans votre entreprise. L'objectif n'est pas d'enseigner la théorie, mais de <strong>transformer rapidement l'usage des outils IA en gains de temps mesurables</strong>.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Apprentissage concret sur les outils du marché (ChatGPT, Claude, Gemini, Copilot)",
                      "Mise en pratique sur vos cas réels d'entreprise",
                      "Cadrage des usages professionnels",
                      "Maîtrise des bons réflexes et du prompt",
                      "Qualité et fiabilité des résultats produits",
                      "Gain de temps directement applicable au quotidien",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    L'objectif est de rendre vos équipes autonomes et efficaces rapidement.
                  </p>
                </div>

                {/* Intégration & usages IA */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Intégration &amp; usages IA</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Adapter l'IA aux habitudes de travail et aux besoins réels de l'entreprise.
                  </p>
                  <p className="font-dm text-blanc-casse/80 text-sm mb-3 leading-relaxed">
                    Donner accès à des outils IA ne suffit pas. Sans cadre, les usages deviennent rapidement désorganisés&nbsp;: chacun teste de son côté, les pratiques s'éparpillent, et les résultats restent décevants. L'intégration consiste à <strong>structurer ces usages dans la durée</strong>, pour qu'ils deviennent réellement utiles à l'entreprise.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Identification des bons cas d'usage par service",
                      "Cadrage des pratiques et règles internes",
                      "Adaptation aux processus et aux outils existants",
                      "Mise en place progressive et accompagnée",
                      "Suivi de la montée en compétence des équipes",
                      "Construction d'usages utiles, durables et partagés",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    Cette étape évite l'écueil le plus fréquent&nbsp;: une IA présente partout, mais mal utilisée. Elle ancre des pratiques concrètes dans le fonctionnement réel de l'entreprise.
                  </p>
                </div>

                {/* Conseil */}
                <div className="bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Conseil &amp; choix d'outils</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Faire les bons choix dans un marché saturé.
                  </p>
                  <p className="font-dm text-blanc-casse/80 text-sm mb-3 leading-relaxed">
                    Le marché des outils IA évolue chaque semaine. Des centaines de solutions apparaissent, souvent payantes, parfois redondantes. Sans cadre, les abonnements se multiplient sans véritable bénéfice. Le rôle du conseil est de <strong>vous orienter vers ce qui correspond à votre niveau, à vos besoins réels et à votre organisation</strong>.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Analyse de vos besoins réels et de votre maturité",
                      "Sélection des outils les plus pertinents",
                      "Suppression des abonnements inutiles ou redondants",
                      "Mise en cohérence avec votre organisation",
                      "Choix d'outils simples, adaptés et durables",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    L'objectif est d'aller à l'essentiel, sans perte de temps ni d'argent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-blanc-casse py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                Conclusion
              </h2>
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4">
                <p>
                  Dans la plupart des entreprises, plusieurs heures de travail peuvent être récupérées chaque semaine. Pas en bouleversant l'organisation, mais en supprimant les tâches qui n'apportent pas de valeur réelle.
                </p>
                <p>
                  Tout n'a pas vocation à être automatisé. Le vrai sujet n'est pas de tout confier à l'IA, mais d'<strong className="text-navy">identifier les actions à forte valeur</strong> et de remettre du temps là où il compte vraiment&nbsp;: la relation client, la qualité du travail, le pilotage, la prise de décision.
                </p>
                <p>
                  C'est tout l'objet de la démarche Semaine 54&nbsp;: un <strong className="text-navy">diagnostic clair</strong>, une <strong className="text-navy">priorisation réaliste</strong>, une <strong className="text-navy">approche terrain</strong> et un <strong className="text-navy">gain de temps concret</strong>, mesurable dès les premières semaines.
                </p>
                <p className="font-bold text-navy text-center pt-2">
                  Pas de promesses excessives. Des résultats utiles, durables, et adaptés à votre réalité.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* CTA final */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4">
                Prêt à démarrer ?
              </h2>
              <p className="font-dm text-blanc-casse/70 italic mb-2">
                Un premier échange de 20 à 30 minutes suffit souvent à identifier plusieurs heures de tâches automatisables chaque semaine.
              </p>
              <p className="font-dm text-blanc-casse/70 italic mb-4">
                On commence petit, mais utile. Vous arrêtez quand vous voulez.
              </p>
              <p className="font-dm text-blanc-casse/80 mb-6">
                Je m'adapte à vos disponibilités, y compris en soirée et le week-end.
              </p>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="cta" size="lg" className="text-lg px-10 py-6">
                    Être rappelé
                    <ArrowRight size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-navy border-blanc-casse/10 sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-dm font-extrabold text-xl text-blanc-casse text-center">
                      Être rappelé
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="nom-ccm" className="text-blanc-casse/80 font-dm text-sm">Nom *</Label>
                      <Input id="nom-ccm" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" maxLength={100} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-ccm" className="text-blanc-casse/80 font-dm text-sm">Email *</Label>
                      <Input id="email-ccm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" maxLength={255} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tel-ccm" className="text-blanc-casse/80 font-dm text-sm">Téléphone</Label>
                      <Input id="tel-ccm" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="06 00 00 00 00" maxLength={20} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="msg-ccm" className="text-blanc-casse/80 font-dm text-sm">Message</Label>
                      <Textarea id="msg-ccm" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Décrivez brièvement votre activité ou votre besoin..." maxLength={1000} rows={3} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm resize-none" />
                    </div>
                    <Button variant="cta" size="lg" type="submit" className="w-full text-base">
                      Envoyer <ArrowRight size={18} />
                    </Button>
                    <p className="text-blanc-casse/40 text-xs text-center font-dm">Votre client mail s'ouvrira avec les informations pré-remplies.</p>
                  </form>
                </DialogContent>
              </Dialog>

              <div className="mt-6 max-w-lg mx-auto">
                <p className="font-dm text-blanc-casse/60 text-sm leading-relaxed">
                  Je vous contacte pour répondre à vos éventuelles questions et planifier votre audit — en appel ou en visio, selon votre préférence.
                </p>
                <p className="font-dm text-blanc-casse/60 text-sm mt-3 leading-relaxed">
                  Vous pouvez aussi m'appeler, m'envoyer un SMS ou un email directement.
                </p>
                <p className="font-dm text-blanc-casse/50 text-xs mt-2 italic">
                  Également disponible en soirée et le week-end.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default CommentCaMarche;
