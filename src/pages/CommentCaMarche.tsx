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
              <p className="font-dm text-ardoise/80 text-center mb-8">
                Un accompagnement structuré en quatre étapes, avec deux approches possibles selon votre besoin.
              </p>

              {/* Étape 01 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">01. Diagnostic (20 à 30 minutes)</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>Un échange par téléphone ou en visio pour comprendre votre activité, vos contraintes et vos objectifs.</p>
                  <p>Nous identifions ensemble :</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "les tâches chronophages",
                      "les points de friction dans votre organisation",
                      "les actions offrant le meilleur retour sur investissement",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Ce premier échange permet de déterminer rapidement si une solution pertinente existe.</p>
                  <p className="italic text-ardoise/70">Sans engagement. Aucune vente forcée.</p>
                </div>
              </div>

              {/* Étape 02 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">02. Orientation et proposition</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>À l'issue du diagnostic, une orientation claire est définie.</p>
                  <p>Deux approches sont possibles :</p>
                  <div className="pl-1 space-y-3">
                    <div>
                      <p className="font-bold text-navy">Mise en place de solutions IA sur-mesure</p>
                      <p>Lorsque le gain provient de l'automatisation ou de la création d'outils.</p>
                    </div>
                    <div>
                      <p className="font-bold text-navy">Accompagnement et montée en compétence</p>
                      <p>Lorsque le gain repose sur l'usage direct de l'IA par vos équipes.</p>
                    </div>
                  </div>
                  <p>Dans certains cas, les deux approches sont combinées.</p>
                  <p>Une proposition vous est transmise sous quelques jours, avec :</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "les solutions retenues",
                      "les gains attendus",
                      "les outils utilisés",
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
                  <p>Les solutions sont mises en place dans vos conditions réelles.</p>
                  <p>Selon le besoin :</p>
                  <div className="pl-1 space-y-3">
                    <div>
                      <p className="font-bold text-navy">Pour les solutions techniques :</p>
                      <ul className="space-y-2 pl-1 mt-2">
                        {[
                          "configuration des automatisations",
                          "connexion aux outils existants",
                          "tests et ajustements",
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-navy">Pour l'accompagnement :</p>
                      <ul className="space-y-2 pl-1 mt-2">
                        {[
                          "sessions de formation ciblées",
                          "mise en pratique sur vos cas réels",
                          "structuration des usages",
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p>Chaque solution est ajustée pour correspondre à votre quotidien.</p>
                  <p className="italic text-ardoise/70">L'objectif n'est pas de livrer un outil, mais une solution réellement utilisée.</p>
                </div>
              </div>

              {/* Étape 04 */}
              <div>
                <h3 className="font-dm font-bold text-xl text-navy mb-3">04. Autonomie et suivi</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-3">
                  <p>L'objectif est votre autonomie, pas votre dépendance.</p>
                  <p>Vous comprenez :</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "comment fonctionne la solution",
                      "comment l'utiliser",
                      "comment l'adapter si nécessaire",
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
              <p className="font-dm text-blanc-casse/80 text-center mb-10">
                Deux leviers complémentaires, selon votre situation.
              </p>

              {/* Levier 1 */}
              <div className="mb-10">
                <h3 className="font-dm font-bold text-2xl text-or-mat mb-2">Solutions IA sur-mesure</h3>
                <p className="font-dm text-blanc-casse/80 mb-6">
                  Des solutions concrètes qui automatisent et simplifient votre quotidien.
                </p>

                {/* Automatisation */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Automatisation</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Des tâches répétitives qui disparaissent de votre quotidien.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Workflows conçus sur-mesure",
                      "Connexion à vos outils existants (email, CRM, fichiers, etc.)",
                      "Automatisation des tâches chronophages",
                      "Déclenchements automatiques selon vos processus métier",
                      "Fonctionnement fiable et évolutif",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    Ces automatisations permettent de supprimer les actions manuelles répétitives et de réduire les erreurs.
                  </p>
                </div>

                {/* Assistant IA métier */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Assistant IA métier</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Un assistant qui vous accompagne dans votre travail au quotidien.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Connecté à vos données et documents internes",
                      "Capable d'analyser et de synthétiser rapidement",
                      "Adapté à votre activité et à vos besoins",
                      "Utilisation simple, sans compétence technique",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    L'objectif est d'accélérer vos prises de décision et de faciliter l'accès à l'information.
                  </p>
                </div>

                {/* Outils métier */}
                <div className="bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-2">Outils métier</h4>
                  <p className="font-dm text-blanc-casse/75 italic mb-3">
                    Des outils simples, conçus pour répondre à un besoin précis.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Interfaces claires et rapides à prendre en main",
                      "Connexion à vos outils et à vos données",
                      "Automatisation intégrée directement dans l'outil",
                      "Utilisation quotidienne sans complexité",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    Pas de logiciel lourd à déployer.<br />
                    Des outils simples, conçus pour être utilisés immédiatement.
                  </p>
                </div>
              </div>

              {/* Levier 2 */}
              <div>
                <h3 className="font-dm font-bold text-2xl text-or-mat mb-2">Accompagnement et montée en compétence IA</h3>
                <p className="font-dm text-blanc-casse/80 mb-6">
                  Quand la meilleure solution est d'apprendre à utiliser l'IA efficacement en interne.
                </p>

                {/* Formation */}
                <div className="mb-6 bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-3">Formation & acculturation IA</h4>
                  <ul className="space-y-2">
                    {[
                      "Comprendre les usages concrets de l'IA",
                      "Structurer une utilisation professionnelle",
                      "Maîtriser les bons réflexes et le prompt",
                      "Appliquer directement sur vos cas réels",
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

                {/* Conseil */}
                <div className="bg-blanc-casse/5 rounded-2xl p-5 border border-blanc-casse/10">
                  <h4 className="font-dm font-bold text-lg text-blanc-casse mb-3">Conseil & choix d'outils</h4>
                  <ul className="space-y-2">
                    {[
                      "Analyse de vos besoins réels",
                      "Sélection des outils pertinents",
                      "Éviter les abonnements inutiles",
                      "Mise en cohérence avec votre organisation",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80 text-sm">
                        <span className="text-or-mat mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-or-mat" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-dm text-blanc-casse/70 text-sm mt-3">
                    Le marché des outils IA évolue rapidement.<br />
                    L'objectif est de vous orienter vers des solutions utiles, adaptées et durables.
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
              <div className="font-dm text-ardoise/85 leading-relaxed space-y-4 text-center">
                <p>
                  Dans la plupart des entreprises, plusieurs heures de travail peuvent être automatisées chaque semaine.
                </p>
                <p>Encore faut-il identifier les bonnes actions.</p>
                <p className="font-bold text-navy">
                  Le diagnostic permet de faire ce tri rapidement et de prioriser les solutions réellement utiles.
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
