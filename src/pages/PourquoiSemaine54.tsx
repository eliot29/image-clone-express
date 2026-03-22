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

const PourquoiSemaine54 = () => {
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
        <title>Pourquoi Semaine 54 — Consultant IA terrain pour TPE et PME bretonnes | Semaine 54</title>
        <meta name="description" content="L'IA générique ne suffit pas. Semaine 54 est un consultant IA de terrain, dédié aux TPE et PME de Bretagne. Accompagnement sur-mesure, agent IA, automation Bretagne. Approche humaine, résultats mesurables." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                L'IA, une solution de productivité.{" "}
                <span className="text-or-mat">Sous certaines conditions.</span>
              </h1>
              <p className="font-dm text-ardoise/70 text-lg italic">
                Pourquoi les outils génériques échouent. Pourquoi l'IA est un avantage concurrentiel si elle est adaptée. Et pourquoi Semaine 54.
              </p>
            </div>
          </div>
        </section>

        {/* Le constat */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="constat" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4 text-center" style={{ scrollMarginTop: '120px' }}>
                Le constat : l'IA générique ne suffit pas
              </h2>

              <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-4 mb-6">
                <p>
                  <strong className="text-blanc-casse">Les outils IA se multiplient. La majorité des structures qui se lancent le font sans accompagnement, avec des solutions génériques inadaptées à leur réalité terrain. Le discours est partout. Les résultats concrets, beaucoup moins.</strong>
                </p>
                <p>Trois raisons expliquent la plupart des échecs :</p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  { bold: "Absence de diagnostic", rest: " : on choisit un outil avant de comprendre le problème." },
                  { bold: "Solutions non calibrées", rest: " : les prompts et workflows ne correspondent pas à l'activité réelle." },
                  { bold: "Aucun suivi", rest: " : l'outil est installé, puis abandonné faute d'accompagnement." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80">
                    <span className="text-or-mat mt-1 shrink-0">•</span>
                    <span><strong className="text-blanc-casse">{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>

              <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-4 mb-6">
                <p>
                  Une formation IA délivrée en visio à 40 entreprises en même temps ne résout pas le problème d'un chef d'entreprise de Landerneau. Elle lui apprend à utiliser un outil — <strong className="text-blanc-casse">elle ne lui dit pas lequel choisir, ni comment l'adapter à ses devis, ses clients et son agenda.</strong>
                </p>
                <p><strong className="text-blanc-casse">Le vrai sujet : l'accompagnement et la personnalisation.</strong></p>
              </div>

              <p className="font-dm text-blanc-casse/70 italic leading-relaxed">
                L'IA est un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise. Mal calibrée, elle fait perdre du temps plutôt qu'en gagner.
              </p>
            </div>
          </div>
        </section>

        {/* Vous hésitez */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4 text-center">
                Vous hésitez à vous lancer ? C'est normal.
              </h2>

              <p className="font-dm text-ardoise/70 italic leading-relaxed mb-6">
                Vous n'avez pas le temps de tester des outils qui ne serviront peut-être à rien. Vous ne voulez pas mettre vos données n'importe où. Vous ne voulez pas d'un projet que plus personne ne comprend au bout de six mois.
              </p>

              <p className="font-dm text-ardoise/80 leading-relaxed mb-4">
                Ces freins sont légitimes. Ils sont partagés par la majorité des dirigeants de TPE et PME. Et ils sont exactement ce que l'approche Semaine 54 est construite pour adresser :
              </p>

              <ul className="space-y-3 mb-4">
                {[
                  "Pas de grand projet risqué — on avance par étapes, vous arrêtez quand vous voulez.",
                  "Vos données ne circulent pas sans raison — les accès sont limités au strict nécessaire.",
                  "Pour les données sensibles, des solutions d'IA souveraine comme Mistral peuvent être privilégiées.",
                  "Vous savez exactement ce qui tourne chez vous, avec quels outils et pourquoi.",
                  "L'IA n'est pas là pour remplacer vos équipes — mais pour les débarrasser du répétitif.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-ardoise/80">
                    <span className="text-or-mat mt-1 shrink-0">•</span>
                    {text}
                  </li>
                ))}
                <li className="flex items-start gap-3 font-dm text-ardoise/80">
                  <span className="text-or-mat mt-1 shrink-0">•</span>
                  <strong className="text-navy">On commence petit, mais utile. Vous gardez la main à chaque étape.</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pourquoi l'IA en 2026 */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4 text-center">
                Pourquoi l'IA en 2026 ?
              </h2>

              <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-4">
                <p>
                  Pendant des années, certaines solutions étaient inaccessibles aux petites structures — pas parce qu'elles étaient trop complexes, mais parce qu'elles nécessitaient des équipes dédiées, des mois de développement et des budgets hors de portée.
                </p>
                <p>
                  <strong className="text-blanc-casse">L'IA générative a changé la donne.</strong>
                </p>
                <p>
                  Ce qui nécessitait autrefois un développeur et plusieurs milliers d'euros peut aujourd'hui être mis en place en quelques jours, pour une fraction du coût. Les barrières techniques ont baissé. Les barrières financières aussi.
                </p>
                <p>
                  <strong className="text-blanc-casse">Automatisation des process, génération de contenu, analyse de données, agents IA, chatbots, reporting automatisé : les outils sont opérationnels. Pas expérimentaux.</strong>
                </p>
                <p className="italic text-blanc-casse/70">
                  Les prochains mois verront émerger une nouvelle génération d'outils — agents IA autonomes, plateformes comme Claude Cowork qui automatisent directement depuis le bureau — qui vont encore accélérer les gains possibles pour les PME qui auront déjà pris de l'avance.
                </p>
                <p className="italic text-blanc-casse/70">
                  Les entreprises qui intègrent l'IA aujourd'hui ne font pas un pari technologique. Elles prennent une avance opérationnelle sur celles qui attendent.
                </p>
                <p>
                  <strong className="text-blanc-casse">Une automatisation bien ciblée est souvent amortie en moins d'un an.</strong> Plus tôt elle est en place, plus tôt elle produit du retour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Semaine 54 */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="parcours" className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4 text-center" style={{ scrollMarginTop: '120px' }}>
                Pourquoi Semaine 54 ?
              </h2>

              <div className="font-dm text-ardoise/80 leading-relaxed space-y-4">
                <p>
                  Je suis <strong className="text-navy">Clément, 35 ans, fondateur de Semaine 54</strong>. Mon parcours est commercial avant d'être technique : plusieurs années en grande distribution comme chef de rayon, puis chef de secteur GMS côté marques.
                </p>
                <p>
                  J'ai aussi brièvement vendu des sites internet — une expérience qui m'a appris ce que je ne voulais pas faire : conclure en un rendez-vous sans vraiment comprendre l'entreprise en face.
                </p>
                <p>
                  Depuis plus de trois ans, je consacre entre cinq et huit heures par semaine à tester, documenter et expérimenter les outils d'intelligence artificielle. <strong className="text-navy">Ces tests, je les mène dans ma vie personnelle, dans mon quotidien professionnel, et avec des amis chefs d'entreprise</strong> — autant de contextes réels qui m'ont permis de comprendre ce qui fonctionne vraiment, et ce qui ne fonctionne pas. Ce temps investi, c'est du temps que vous n'avez pas à passer.
                </p>
                <p>
                  <strong className="text-navy">Je ne suis pas ingénieur IA. Je suis un praticien de terrain — on appelle ça un AI Implémenteur.</strong>
                </p>
                <p className="italic text-ardoise/70">
                  L'IA avance vite. Mon travail est d'en suivre l'évolution pour vous — et de garder de l'humain au centre de chaque solution mise en place. Un outil qui tourne sans être compris ni surveillé, ce n'est pas une solution. C'est un risque.
                </p>
                <p className="italic text-ardoise/70">
                  Je travaille en langage clair, avec vos équipes. Vous gardez toujours la main sur vos données et vos décisions.
                </p>
                <p>
                  <strong className="text-navy">Mon point de départ : comprendre votre métier avant de parler technologie.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deux exemples concrets */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 id="preuves" className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center" style={{ scrollMarginTop: '120px' }}>
                Deux exemples concrets. Deux gains mesurables.
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-xl p-6">
                  <h3 className="font-dm font-bold text-lg text-or-mat mb-2">Poissonnerie — Pays d'Iroise</h3>
                  <p className="font-dm text-blanc-casse/80 leading-relaxed">
                    Une amie tenait une poissonnerie dans une zone artisanale que personne ne connaissait. Sans budget communication, sans agence. En structurant une stratégie nourrie par l'IA et en la mettant en œuvre avec des outils assistés : <strong className="text-blanc-casse">73 000 vues, 622 partages, +800 abonnés, +15 % de chiffre d'affaires</strong> sur la période.
                  </p>
                </div>

                <div className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-xl p-6">
                  <h3 className="font-dm font-bold text-lg text-or-mat mb-2">Électricien — Pays d'Iroise</h3>
                  <p className="font-dm text-blanc-casse/80 leading-relaxed">
                    Comparaison manuelle de plusieurs sites fournisseurs, plusieurs fois par semaine. Mise en place d'un assistant IA dédié : <strong className="text-blanc-casse">environ 10 minutes économisées par jour, soit près de 40 heures récupérées par an.</strong>
                  </p>
                </div>
              </div>

              <p className="font-dm font-bold text-blanc-casse text-lg sm:text-xl leading-snug text-center mb-2">
                Mon approche vient du terrain. <span className="text-or-mat">Pas d'une démonstration théorique.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Ce qui différencie */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4 text-center">
                Ce qui différencie cette approche
              </h2>

              <div className="font-dm text-ardoise/80 leading-relaxed space-y-4 mb-6">
                <p>
                  Le marché propose souvent deux modèles : une formation générique délivrée à de nombreuses entreprises simultanément, ou une solution vendue en un rendez-vous sans diagnostic sérieux. Dans les deux cas : un outil qui ne correspond pas à votre réalité, sans personne pour ajuster après la livraison.
                </p>
                <p className="italic text-ardoise/70">
                  Chez Semaine 54, rien n'est vendu avant d'être compris. Rien n'est installé avant d'être calibré. Rien n'est livré sans s'assurer que ça fonctionne dans vos conditions réelles.
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Pas de package imposé avant diagnostic.",
                  "Pas d'engagement sur plusieurs solutions avant d'en avoir vu une fonctionner.",
                  "Pas de formation standard délivrée à des dizaines d'entreprises en même temps.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-ardoise/80">
                    <span className="text-or-mat mt-1 shrink-0">•</span>
                    {text}
                  </li>
                ))}
                <li className="flex items-start gap-3 font-dm text-ardoise/80">
                  <span className="text-or-mat mt-1 shrink-0">•</span>
                  <strong className="text-navy">Une relation construite dans la durée, pas une prestation one-shot.</strong>
                </li>
                <li className="flex items-start gap-3 font-dm text-ardoise/80">
                  <span className="text-or-mat mt-1 shrink-0">•</span>
                  Vous savez exactement ce qui est fait, avec quels outils et pourquoi.
                </li>
              </ul>

              <div className="font-dm text-ardoise/80 leading-relaxed space-y-4">
                <p className="italic text-ardoise/70">
                  Que l'on travaille ensemble ou non, mon implication commence dès la fin de l'audit. Si j'identifie une piste pertinente pour votre activité, je la note — et je vous la communique dans la proposition.
                </p>
                <p>
                  <strong className="text-navy">Semaine 54 est un partenaire dédié aux TPE et PME bretonnes — pour des solutions d'IA générative et d'automation construites sur mesure, autour de votre métier et de votre organisation.</strong>
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
                Prêt à en parler ?
              </h2>
              <p className="font-dm text-blanc-casse/70 italic mb-2">
                On commence par comprendre votre situation. On propose ensuite — et uniquement si c'est pertinent.
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
                      <Label htmlFor="nom-pq" className="text-blanc-casse/80 font-dm text-sm">Nom *</Label>
                      <Input id="nom-pq" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" maxLength={100} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-pq" className="text-blanc-casse/80 font-dm text-sm">Email *</Label>
                      <Input id="email-pq" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" maxLength={255} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tel-pq" className="text-blanc-casse/80 font-dm text-sm">Téléphone</Label>
                      <Input id="tel-pq" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="06 00 00 00 00" maxLength={20} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="msg-pq" className="text-blanc-casse/80 font-dm text-sm">Message</Label>
                      <Textarea id="msg-pq" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Décrivez brièvement votre activité ou votre besoin..." maxLength={1000} rows={3} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm resize-none" />
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

export default PourquoiSemaine54;
