import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Workflow, Bot, GraduationCap, Puzzle, Settings, MessageCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <title>Automatisation IA et accompagnement sur-mesure pour PME bretonnes | Semaine 54</title>
        <meta name="description" content="Découvrez la méthode Semaine 54 : audit gratuit, proposition sous 3 jours, mise en place calibrée et suivi dans la durée. Automatisation n8n, assistant IA, formation — un seul interlocuteur en Bretagne." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-28 pb-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
                Comment ça marche
              </h1>
              <p className="font-dm text-ardoise/70 text-lg italic">
                De l'audit à la mise en place, un seul interlocuteur. Du début à la fin.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que Semaine 54 propose */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4 text-center">
                Ce que Semaine 54 propose concrètement
              </h2>
              <p className="font-dm text-blanc-casse/70 italic text-center mb-6">
                L'IA ne remplace pas votre expertise. Elle élimine le temps inutile autour.
              </p>

              <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-4 mb-6">
                <p>
                  Semaine 54 s'adresse au <strong className="text-blanc-casse">dirigeant qui veut gagner du temps sur son pilotage</strong>, à la <strong className="text-blanc-casse">secrétaire qui gère les relances et les agendas</strong>, à <strong className="text-blanc-casse">l'adjoint de direction qui produit des rapports et des synthèses</strong>, à <strong className="text-blanc-casse">l'équipe terrain qui saisit et transmet des informations toute la journée</strong>. Une automatisation bien ciblée, c'est souvent plusieurs heures récupérées chaque semaine — multipliées par le nombre de personnes concernées.
                </p>
                <p>
                  Après un audit gratuit, la solution la plus pertinente est définie à partir de votre réalité terrain :
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  { icon: Workflow, text: "Automatisation via n8n" },
                  { icon: Bot, text: "Application ou assistant IA configuré sur-mesure" },
                  { icon: GraduationCap, text: "Formation ciblée aux LLM et aux outils d'IA" },
                  { icon: Puzzle, text: "Ou combinaison de ces solutions" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/80">
                    <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <p className="font-dm text-blanc-casse/80 leading-relaxed mb-2">
                <strong className="text-blanc-casse">Un seul interlocuteur en Bretagne, de l'audit jusqu'à la mise en service.</strong>
              </p>
              <p className="font-dm text-blanc-casse/80 leading-relaxed mb-6">
                Les projets sont volontairement limités pour garantir disponibilité et qualité de suivi.
              </p>

              <p className="font-dm text-blanc-casse/70 italic leading-relaxed mb-6">
                Objectif : vous libérer de vos tâches chronophages, répétitives ou mal maîtrisées — pour vous concentrer sur ce qui crée réellement de la valeur.
              </p>

              <p className="font-dm font-bold text-blanc-casse text-lg sm:text-xl leading-snug text-center mb-2">
                Maîtriser et tester les outils IA demande du temps. Ce temps, je l'ai pris.
              </p>
              <p className="font-dm font-bold text-or-mat text-lg sm:text-xl leading-snug text-center mb-6">
                Mon travail consiste à vous faire gagner le vôtre.
              </p>

              <div className="text-center">
                <Button variant="ctaOutline" size="lg" asChild>
                  <Link to="/pourquoi-semaine-54#parcours">
                    Découvrir mon parcours et ma méthode
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Méthode 4 étapes */}
        <section id="methode-details" className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                La méthode Semaine 54 — 4 étapes
              </h2>

              {/* Step 01 */}
              <div className="mb-8">
                <h3 className="font-dm font-bold text-lg text-navy mb-2">01. Audit gratuit (20 à 30 min)</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-4">
                  <p>
                    Par téléphone ou visio. On cartographie ensemble vos tâches répétitives, chronophages ou mal maîtrisées, et on identifie <strong className="text-navy">ce qui a le meilleur retour sur investissement</strong>. C'est un échange de diagnostic — pas une présentation commerciale.
                  </p>
                  <p><strong className="text-navy">Sans engagement. Aucune vente forcée.</strong></p>
                  <p className="italic text-ardoise/70">
                    Que l'on travaille ensemble ou non, mon implication commence dès la fin de l'audit. Si j'identifie une piste pertinente pour votre activité, je la note. Si une solution simple existe, je vous la signale — même si elle ne nécessite pas de me mandater.
                  </p>
                  <p>Je m'adapte à vos disponibilités, y compris en soirée et le week-end.</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="mb-8">
                <h3 className="font-dm font-bold text-lg text-navy mb-2">02. Proposition (sous 3 jours ouvrés)</h3>
                <p className="font-dm text-ardoise/80 leading-relaxed">
                  <strong className="text-navy">Une proposition adaptée à votre situation réelle</strong> — pas une solution générique copiée-collée. Elle précise la ou les solutions retenues, le gain attendu, les outils impliqués, et le calendrier de mise en place.
                </p>
              </div>

              {/* Step 03 */}
              <div className="mb-8">
                <h3 className="font-dm font-bold text-lg text-navy mb-2">03. Mise en place & calibration</h3>
                <div className="font-dm text-ardoise/80 leading-relaxed space-y-4">
                  <p>
                    Déploiement du workflow, configuration de l'assistant IA ou prise en main de l'outil retenu. <strong className="text-navy">On calibre jusqu'à ce que ça fonctionne dans vos conditions réelles.</strong> Si quelque chose ne correspond pas à votre usage quotidien, on ajuste.
                  </p>
                  <p>Durée : 3 à 15 jours ouvrés selon la complexité.</p>
                  <p>
                    <strong className="text-navy">L'objectif est votre autonomie.</strong> Rien n'est une boîte noire — vous devez comprendre ce qui tourne chez vous et pouvoir intervenir.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="mb-6">
                <h3 className="font-dm font-bold text-lg text-navy mb-2">04. Suivi</h3>
                <p className="font-dm text-ardoise/80 leading-relaxed mb-3">
                  Les outils évoluent. Votre activité aussi. Je reste disponible pour :
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    { icon: Settings, text: "Ajuster les solutions mises en place" },
                    { icon: MessageCircle, text: "Répondre aux questions" },
                    { icon: TrendingUp, text: "Approfondir certains usages si nécessaire" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70 text-sm">
                      <item.icon size={14} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <p className="font-dm text-ardoise/70 italic text-sm">
                  Un seul interlocuteur, du diagnostic jusqu'au suivi. Pas de transfert de dossier. Pas de passage au suivant.
                </p>
              </div>

              <div className="text-center">
                <Button variant="ctaOutline" size="lg" asChild>
                  <Link to="/comment-ca-marche#leviers">
                    Voir toutes les solutions
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trois leviers */}
        <section id="leviers" className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Trois leviers. Le bon, selon votre situation.
              </h2>

              {/* Levier 1 */}
              <div className="mb-8">
                <h3 className="font-dm font-bold text-xl text-or-mat mb-3">1. Automatisation sur-mesure</h3>
                <p className="font-dm text-blanc-casse/80 leading-relaxed mb-4">
                  <strong className="text-blanc-casse">Workflows automatisés via n8n</strong> — une plateforme professionnelle qui connecte vos outils existants entre eux, en gardant vos données dans votre environnement.
                </p>
                <ul className="space-y-2">
                  {[
                    "Prise de rendez-vous et confirmation client automatique",
                    "Relances clients, suivi de devis, génération de documents",
                    "Veille fournisseurs et comparaison de prix en temps réel",
                    "Tri, gestion et réponse aux mails entrants",
                    "Génération et publication automatique de contenu (Facebook, Instagram, LinkedIn)",
                    "Rapprochement de factures, comptabilité assistée",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/70 text-sm">
                      <span className="text-or-mat mt-1 shrink-0">•</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Levier 2 */}
              <div className="mb-8">
                <h3 className="font-dm font-bold text-xl text-or-mat mb-3">2. Formation & acculturation IA</h3>
                <p className="font-dm text-blanc-casse/80 leading-relaxed mb-4">
                  Sessions calibrées sur votre activité, vos outils, vos questions réelles — <strong className="text-blanc-casse">pas un cours standard délivré à des dizaines d'entreprises en même temps.</strong>
                </p>
                <ul className="space-y-2">
                  {[
                    "Prendre en main un assistant IA : ChatGPT, Claude, Gemini",
                    "Maîtriser le prompting pour des résultats professionnels et reproductibles",
                    "Identifier les bons cas d'usage pour votre secteur",
                    "Découvrir des outils IA métiers : Noota, Copilot, Notion AI",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 font-dm text-blanc-casse/70 text-sm">
                      <span className="text-or-mat mt-1 shrink-0">•</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Levier 3 */}
              <div>
                <h3 className="font-dm font-bold text-xl text-or-mat mb-3">3. Conseil & aide au choix d'outils</h3>
                <p className="font-dm text-blanc-casse/80 leading-relaxed mb-2">
                  Le marché propose des centaines d'outils IA. <strong className="text-blanc-casse">Semaine 54 joue un rôle de filtre</strong> : identifier ce qui correspond à vos besoins et parfois vous conseiller une solution simple plutôt qu'un abonnement coûteux dont vous n'utiliserez qu'une fraction.
                </p>
                <p className="font-dm text-blanc-casse/70 italic text-sm">
                  Mon rôle : faire le tri pour vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outils utilisés */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4 text-center">
                Les outils utilisés
              </h2>
              <p className="font-dm text-ardoise/80 leading-relaxed text-center mb-6">
                Aucun outil n'est imposé. <strong className="text-navy">Chaque solution est choisie selon votre activité, vos contraintes et votre budget.</strong>
              </p>

              <div className="space-y-4">
                {[
                  { label: "Assistants IA", tools: "ChatGPT · Claude · Gemini · Microsoft Copilot · Perplexity" },
                  { label: "Automatisation", tools: "n8n · Make · Zapier" },
                  { label: "Outils métiers", tools: "Notion AI · Noota · et d'autres selon vos besoins" },
                  { label: "Intégrations courantes", tools: "Gmail · Outlook · Google Sheets · HubSpot · Slack · WhatsApp Business · Facebook · Instagram · LinkedIn · Stripe · Calendly" },
                ].map((cat, i) => (
                  <div key={i} className="bg-gris-perle rounded-xl p-4">
                    <p className="font-dm text-sm">
                      <strong className="text-navy">{cat.label} :</strong>{" "}
                      <span className="text-ardoise/70">{cat.tools}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sécurité & RGPD */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4 text-center">
                Sécurité & RGPD
              </h2>
              <div className="font-dm text-blanc-casse/80 leading-relaxed space-y-4">
                <p>
                  Les automatisations sont déployées via <strong className="text-blanc-casse">n8n, une infrastructure professionnelle dédiée aux workflows automatisés</strong>. Les accès sont configurés au strict nécessaire, avec gestion sécurisée des identifiants et des connexions. Aucune donnée client n'est transférée vers une plateforme tierce sans votre accord explicite.
                </p>
                <p>
                  <strong className="text-blanc-casse">La conformité RGPD est abordée dès le diagnostic.</strong> Semaine 54 conçoit selon les bonnes pratiques, sans se substituer à vos obligations légales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                Questions fréquentes
              </h2>

              <Accordion type="single" collapsible className="space-y-2">
                {[
                  {
                    q: "Faut-il changer ses outils pour automatiser ?",
                    a: "Non. Les solutions s'intègrent à ce que vous utilisez déjà. Le diagnostic permet de vérifier la compatibilité avant toute mise en place."
                  },
                  {
                    q: "Et si je n'ai pas de logiciel de gestion ?",
                    a: "Pas de problème. Beaucoup de solutions fonctionnent depuis un formulaire Google, une feuille Excel ou des emails entrants. Le workflow est adapté à votre point de départ réel."
                  },
                  {
                    q: "Est-ce que ça demande des compétences techniques ?",
                    a: "Non. Une prise en main est incluse pour que vous sachiez surveiller la solution et intervenir si besoin. **Rien n'est une boîte noire.**"
                  },
                  {
                    q: "Quel est le tarif ?",
                    a: "Il dépend de la solution retenue et de la complexité du projet. Il est communiqué dans la proposition, après diagnostic. **L'audit initial est gratuit et sans engagement.**"
                  },
                  {
                    q: "Combien d'entreprises Semaine 54 accompagne-t-il simultanément ?",
                    a: "Volontairement limité — pour garantir une disponibilité réelle et un suivi de qualité."
                  },
                  {
                    q: "Que se passe-t-il si la solution ne fonctionne pas comme prévu ?",
                    a: "La phase de calibration est faite pour ça. **On ajuste jusqu'à ce que ça fonctionne dans vos conditions réelles.**"
                  },
                  {
                    q: "Semaine 54 intervient-il uniquement en Bretagne ?",
                    a: "Les échanges se font par téléphone ou visio. Semaine 54 intervient prioritairement en Bretagne : Finistère (29), Côtes-d'Armor (22), Morbihan (56), Ille-et-Vilaine (35)."
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-gris-perle rounded-xl border-none px-4">
                    <AccordionTrigger className="font-dm font-bold text-navy text-left hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-dm text-ardoise/80 leading-relaxed">
                      {faq.a.split("**").map((part, j) =>
                        j % 2 === 1 ? <strong key={j} className="text-navy">{part}</strong> : part
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
              <p className="font-dm text-blanc-casse/70 italic mb-6">
                Un premier échange de 20 à 30 minutes suffit souvent à identifier plusieurs heures de tâches automatisables chaque semaine.
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
