import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Search, HeadphonesIcon, Calendar, FileText, Eye, BarChart3, Mail, Share2, Receipt, GraduationCap, MessageSquare, Target, Lightbulb, Filter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const avantApres = [
  {
    titre: "Artisan — Pays d'Iroise",
    avant: "Les appels pour la prise de rendez-vous interrompaient le travail en cours plusieurs fois par jour. Chaque RDV nécessitait un échange téléphonique, une note manuelle, un rappel de confirmation.",
    apres: "Un système automatisé prend les RDV en ligne, envoie la confirmation, et déclenche un rappel la veille.",
    gain: "30 min à 1h par jour",
  },
  {
    titre: "Indépendant — Pays d'Iroise",
    avant: "Consultation manuelle de plusieurs sites fournisseurs pour comparer les prix, plusieurs fois par semaine. Chronophage et source d'erreurs d'achat.",
    apres: "Un workflow agrège et compare les tarifs en temps réel. Un seul tableau synthétique à consulter.",
    gain: "1 à 2h par semaine",
  },
  {
    titre: "Commerce de proximité — Saint-Brieuc",
    avant: "Les publications réseaux étaient irrégulières, préparées à la dernière minute, souvent abandonnées.",
    apres: "Calendrier éditorial défini une fois, contenu généré assisté, publication planifiée automatiquement.",
    gain: "1 à 2h par semaine",
  },
];

const autoItems = [
  { icon: Calendar, text: "Prise de rendez-vous et confirmation client automatique" },
  { icon: FileText, text: "Relances clients, suivi de devis, génération de documents" },
  { icon: Eye, text: "Veille fournisseurs et comparaison de prix en temps réel" },
  { icon: Mail, text: "Tri, gestion et réponse aux mails entrants, support client" },
  { icon: Share2, text: "Génération et publication automatique de contenu (Facebook, Instagram, LinkedIn)" },
  { icon: Receipt, text: "Rapprochement de factures, comptabilité assistée" },
];

const formationItems = [
  { icon: MessageSquare, text: "Prendre en main un assistant IA : ChatGPT, Claude, Gemini" },
  { icon: Target, text: "Maîtriser le prompting pour des résultats professionnels et reproductibles" },
  { icon: Lightbulb, text: "Identifier les bons cas d'usage pour votre secteur" },
  { icon: GraduationCap, text: "Découvrir des outils IA métiers : Noota, Copilot, Notion AI" },
];

const faqItems = [
  {
    q: "Faut-il changer ses outils pour automatiser ?",
    a: "Non. Les solutions s'intègrent à ce que vous utilisez déjà. Le diagnostic permet de vérifier la compatibilité avant toute mise en place.",
  },
  {
    q: "Et si je n'ai pas de logiciel de gestion ?",
    a: "Pas de problème. Beaucoup de solutions fonctionnent depuis un formulaire Google, une feuille Excel ou des emails entrants. Le workflow est adapté à votre point de départ réel.",
  },
  {
    q: "Est-ce que ça demande des compétences techniques ?",
    a: "Non. Une prise en main courte est incluse pour que vous sachiez surveiller la solution et intervenir si besoin. Rien n'est une boîte noire.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Les automatisations sont construites pour que vos données restent dans votre environnement. Les accès sont limités au strict nécessaire. Aucune donnée client n'est transférée vers une plateforme tierce sans votre accord explicite. La conformité RGPD est abordée dès le diagnostic. Semaine 54 conçoit selon les bonnes pratiques, sans se substituer à vos obligations légales.",
  },
];

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Automatisation IA & solutions pour PME Bretagne | Semaine 54</title>
        <meta name="description" content="Workflows n8n, assistant IA sur-mesure, formation ciblée. Cas concrets, FAQ technique, RGPD. Consultant IA basé en Finistère, interventions en Bretagne." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero — Clair */}
        <section className="bg-blanc-casse pt-28 pb-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                Les solutions Semaine 54
              </h1>
              <p className="punchline font-dm font-bold text-or-mat text-lg sm:text-xl border-l-0 pl-0 text-center">
                L'IA ne remplace pas votre expertise. Elle élimine le temps inutile autour.
              </p>
              <p className="font-dm text-ardoise/70 mt-4 leading-relaxed">
                Cette page détaille ce que Semaine 54 propose concrètement : pourquoi l'IA générique échoue pour les PME, quelles solutions existent, et ce que ça change dans la pratique.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi l'IA générique ne fonctionne pas — Sombre */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Pourquoi l'IA générique ne fonctionne pas pour les PME
              </h2>
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">
                Les outils d'IA grand public sont puissants. Mais utilisés sans cadre ni méthode, ils produisent des résultats irréguliers et inadaptés aux contraintes d'un artisan ou d'une PME. Trois raisons expliquent la plupart des échecs :
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  { icon: AlertTriangle, text: "Absence de diagnostic : on choisit un outil avant de comprendre le problème." },
                  { icon: Search, text: "Solutions non calibrées : les prompts et workflows ne correspondent pas à votre activité réelle." },
                  { icon: HeadphonesIcon, text: "Aucun suivi : l'outil est installé, puis abandonné faute d'accompagnement." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-sm text-blanc-casse/70">
                    <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">
                Une formation IA délivrée en visio à 40 entreprises en même temps ne résout pas le problème d'un plombier de Landerneau. Elle lui apprend à utiliser un outil — elle ne lui dit pas lequel choisir, ni comment l'adapter à ses devis, ses clients et son agenda.
              </p>
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-6">
                Le même problème se retrouve du côté des solutions packagées : un outil vendu en un rendez-vous, sans diagnostic sérieux, sans comprendre comment l'entreprise fonctionne réellement. Une fois la vente conclue, personne n'est là pour calibrer, ajuster, corriger.
              </p>
              <p className="punchline font-dm font-bold text-or-mat text-lg sm:text-xl border-l-0 pl-0 text-center">
                L'IA est un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise. Mal calibrée, elle fait perdre du temps plutôt qu'en gagner.
              </p>
              <div className="flex justify-center mt-6">
                <Button variant="ctaOutline" size="lg" asChild>
                  <a href="#contact">
                    Prendre un audit gratuit
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi utiliser l'IA en 2026 — Clair */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                Pourquoi utiliser l'IA en 2026 ?
              </h2>
              <div className="font-dm text-ardoise/70 space-y-4 leading-relaxed">
                <p>
                  Pendant des années, certaines solutions étaient inaccessibles aux petites structures — pas parce qu'elles étaient trop complexes, mais parce qu'elles nécessitaient des équipes dédiées, des mois de développement et des budgets hors de portée.
                </p>
                <p>
                  L'IA générative a changé la donne. Ce qui nécessitait autrefois un développeur, des semaines de travail et plusieurs milliers d'euros peut aujourd'hui être mis en place en quelques jours, pour une fraction du coût. Les barrières techniques ont baissé. Les barrières financières aussi.
                </p>
                <p>
                  En 2026, les outils ont atteint un niveau de maturité suffisant pour être utilisés de façon fiable dans un contexte professionnel réel — pas seulement dans une démonstration. Les agents IA actuels peuvent exécuter des tâches complètes, s'intégrer à vos outils existants, et produire des résultats reproductibles.
                </p>
              </div>
              <p className="punchline font-dm font-bold text-navy text-lg sm:text-xl mt-6 text-center border-l-0 pl-0">
                Les entreprises qui intègrent l'IA aujourd'hui ne font pas un pari technologique. <span className="text-or-mat">Elles prennent une avance opérationnelle.</span>
              </p>
              <p className="font-dm text-ardoise/70 leading-relaxed mt-4">
                Dans trois à cinq ans, les structures qui auront automatisé leurs tâches à faible valeur ajoutée auront libéré du temps, réduit leurs coûts opérationnels, et construit des habitudes de travail plus efficaces. Une automatisation bien ciblée est souvent amortie en moins d'un an. Plus tôt elle est en place, plus tôt elle produit du retour.
              </p>
            </div>
          </div>
        </section>

        {/* Avant / après — Sombre */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-6xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Avant / après : ce que l'automatisation change concrètement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {avantApres.map((cas, i) => (
                  <div key={i} className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-2xl p-6">
                    <h3 className="font-dm font-bold text-blanc-casse text-base mb-4">{cas.titre}</h3>
                    <p className="font-dm text-blanc-casse/60 text-sm mb-3">
                      <strong className="text-blanc-casse/80">Avant :</strong> {cas.avant}
                    </p>
                    <p className="font-dm text-blanc-casse/60 text-sm mb-3">
                      <strong className="text-blanc-casse/80">Après :</strong> {cas.apres}
                    </p>
                    <p className="font-dm text-or-mat text-sm font-semibold">
                      Gain estimé : {cas.gain}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trois leviers — Clair */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-2 text-center">
                Trois leviers. <span className="text-or-mat">Le bon, selon votre situation.</span>
              </h2>

              {/* 1. Automatisation */}
              <div className="mt-8">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">1. Automatisation sur-mesure</h3>
                <p className="font-dm text-ardoise/70 leading-relaxed mb-4">
                  Workflows automatisés via n8n — une plateforme qui connecte vos outils existants entre eux, en gardant vos données dans votre environnement. Cas d'usage couverts :
                </p>
                <ul className="space-y-2">
                  {autoItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-dm text-sm text-ardoise/70">
                      <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Formation */}
              <div className="mt-8">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">2. Formation & acculturation IA</h3>
                <p className="font-dm text-ardoise/70 leading-relaxed mb-4">
                  Quand la bonne solution est d'apprendre à utiliser un outil directement. Sessions calibrées sur votre activité, vos outils, vos questions réelles — pas un cours standard délivré à des dizaines d'entreprises en même temps.
                </p>
                <ul className="space-y-2">
                  {formationItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-dm text-sm text-ardoise/70">
                      <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Conseil */}
              <div className="mt-8">
                <h3 className="font-dm font-bold text-xl text-navy mb-3">3. Conseil & aide au choix d'outils</h3>
                <p className="font-dm text-ardoise/70 leading-relaxed">
                  Le marché propose des centaines d'outils IA. Semaine 54 joue un rôle de filtre : identifier ce qui correspond à vos besoins et parfois vous conseiller une solution simple plutôt qu'un abonnement coûteux dont vous n'utiliserez qu'une fraction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outils utilisés — Sombre */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Les outils utilisés
              </h2>
              <p className="font-dm text-blanc-casse/70 mb-6 text-center">
                Aucun outil n'est imposé. Chaque solution est choisie selon votre activité, vos contraintes et votre budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Assistants IA", tools: "ChatGPT · Claude · Gemini · Microsoft Copilot" },
                  { label: "Automatisation", tools: "n8n · Make · Zapier" },
                  { label: "Outils métiers", tools: "Notion AI · Noota · et d'autres selon vos besoins" },
                  { label: "Intégrations courantes", tools: "Gmail · Outlook · Google Sheets · HubSpot · Slack · WhatsApp Business · Facebook · Instagram · LinkedIn · Stripe · Calendly" },
                ].map((cat, i) => (
                  <div key={i} className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-xl p-4">
                    <p className="font-dm font-bold text-or-mat text-sm mb-1">{cat.label}</p>
                    <p className="font-dm text-blanc-casse/70 text-sm">{cat.tools}</p>
                  </div>
                ))}
              </div>
              <p className="punchline font-dm font-bold text-or-mat text-lg sm:text-xl mt-6 text-center border-l-0 pl-0">
                Mon rôle : faire le filtre. Et parfois vous conseiller une solution simple plutôt qu'un abonnement coûteux.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — Clair */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                FAQ technique & sécurité
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-navy/5 border border-navy/10 rounded-xl px-6">
                    <AccordionTrigger className="font-dm font-bold text-navy text-left hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-dm text-ardoise/70 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA final — Sombre */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4">
                Prêt à identifier la bonne solution ?
              </h2>
              <p className="font-dm text-blanc-casse/70 mb-2">
                Un premier échange de 30 minutes suffit souvent à identifier plusieurs heures de tâches automatisables chaque semaine.
              </p>
              <p className="font-dm text-blanc-casse/70 mb-6">
                Je m'adapte à vos disponibilités, y compris en soirée et le week-end.
              </p>
              <Button variant="cta" size="lg" asChild className="text-lg px-10 py-6">
                <a href="#contact">
                  Réserver mon audit gratuit
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default Solutions;
