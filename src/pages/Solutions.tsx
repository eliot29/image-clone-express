import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Cog, GraduationCap, Filter, Workflow, Link2, RotateCcw, Lightbulb, MessageSquare, PenTool, Users, SlidersHorizontal, ShieldCheck, Ban, Compass, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const avantApres = [
  {
    type: "Artisan — Pays d'Iroise",
    avant: "Les appels pour la prise de rendez-vous interrompaient le travail en cours plusieurs fois par jour. Chaque RDV nécessitait un échange téléphonique, une note manuelle, un rappel de confirmation.",
    apres: "Un système automatisé prend les RDV en ligne, envoie la confirmation, et déclenche un rappel la veille.",
    gain: "30 min à 1h par jour",
  },
  {
    type: "Indépendant — Pays d'Iroise",
    avant: "Consultation manuelle de plusieurs sites fournisseurs pour comparer les prix, plusieurs fois par semaine. Chronophage et source d'erreurs d'achat.",
    apres: "Un workflow agrège et compare les tarifs en temps réel. Un seul tableau synthétique à consulter.",
    gain: "1 à 2h par semaine",
  },
  {
    type: "Commerce de proximité — Saint-Brieuc",
    avant: "Les publications réseaux étaient irrégulières, préparées à la dernière minute, souvent abandonnées.",
    apres: "Calendrier éditorial défini une fois, contenu généré assisté, publication planifiée automatiquement.",
    gain: "1 à 2h par semaine",
  },
];

const echecs = [
  { text: "Absence de diagnostic : on choisit un outil avant de comprendre le problème." },
  { text: "Solutions non calibrées : les prompts et workflows ne correspondent pas à votre activité réelle." },
  { text: "Aucun suivi : l'outil est installé, puis abandonné faute d'accompagnement." },
];

const autoItems = [
  { icon: Workflow, text: "Prise de rendez-vous et confirmation client automatique" },
  { icon: Link2, text: "Relances clients, suivi de devis, génération de documents" },
  { icon: RotateCcw, text: "Veille fournisseurs et comparaison de prix en temps réel" },
  { icon: Lightbulb, text: "Tri, gestion et réponse aux mails entrants, support client" },
  { icon: Cog, text: "Génération et publication automatique de contenu (Facebook, Instagram, LinkedIn)" },
  { icon: ShieldCheck, text: "Rapprochement de factures, comptabilité assistée" },
];

const formationItems = [
  { icon: MessageSquare, text: "Prendre en main un assistant IA : ChatGPT, Claude, Gemini" },
  { icon: PenTool, text: "Maîtriser le prompting pour des résultats professionnels et reproductibles" },
  { icon: Users, text: "Identifier les bons cas d'usage pour votre secteur" },
  { icon: SlidersHorizontal, text: "Découvrir des outils IA métiers : Noota, Copilot, Notion AI" },
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
    a: "Les automatisations sont construites pour que vos données restent dans votre environnement. Les accès sont limités au strict nécessaire. Aucune donnée client n'est transférée vers une plateforme tierce sans votre accord explicite. La conformité RGPD est abordée dès le diagnostic.",
  },
];

const Solutions = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-blanc-casse pt-24 pb-6 lg:pt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                Les solutions Semaine 54
              </h1>
              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-navy border-l-0 pl-0 text-center">
                L'IA ne remplace pas votre expertise. <span className="text-or-mat">Elle élimine le temps inutile autour.</span>
              </p>
              <p className="font-dm text-ardoise/80 mt-4 leading-relaxed">
                Cette page détaille ce que Semaine 54 propose concrètement : pourquoi l'IA générique échoue pour les PME, quelles solutions existent, et ce que ça change dans la pratique.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi l'IA générique ne fonctionne pas */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Pourquoi l'IA générique ne fonctionne pas pour les PME
              </h2>
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-6">
                Les outils d'IA grand public sont puissants. Mais utilisés sans cadre ni méthode, ils produisent des résultats irréguliers et inadaptés aux contraintes d'un artisan ou d'une PME. Trois raisons expliquent la plupart des échecs :
              </p>
              <div className="space-y-3 mb-6">
                {echecs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-or-mat mt-1 shrink-0" />
                    <p className="font-dm text-blanc-casse/80 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">
                Une formation IA délivrée en visio à 40 entreprises en même temps ne résout pas le problème d'un plombier de Landerneau. Elle lui apprend à utiliser un outil. Elle ne lui dit pas lequel choisir, ni comment l'adapter à ses devis, ses clients et son agenda.
              </p>
              <p className="font-dm text-blanc-casse/70 leading-relaxed">
                Le même problème se retrouve du côté des solutions packagées : un outil vendu en un rendez-vous, sans diagnostic sérieux, sans comprendre comment l'entreprise fonctionne réellement. Une fois la vente conclue, personne n'est là pour calibrer, ajuster, corriger.
              </p>
              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-or-mat mt-6 border-l-0 pl-0 text-center">
                L'IA est un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise. Mal calibrée, elle fait perdre du temps plutôt qu'en gagner.
              </p>
            </div>
          </div>
        </section>

        {/* Avant / après */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                Avant / après : ce que l'automatisation change concrètement
              </h2>
              <div className="space-y-4">
                {avantApres.map((item, i) => (
                  <div key={i} className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                    <h3 className="font-dm font-bold text-base text-navy mb-3">{item.type}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <span className="font-dm text-xs font-semibold uppercase tracking-wider text-ardoise/50 mb-1 block">Avant</span>
                        <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{item.avant}</p>
                      </div>
                      <div>
                        <span className="font-dm text-xs font-semibold uppercase tracking-wider text-or-mat mb-1 block">Après</span>
                        <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{item.apres}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-dm font-bold text-navy bg-or-mat/10 px-4 py-2 rounded-full text-sm">{item.gain}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi utiliser l'IA en 2026 */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Pourquoi utiliser l'IA en 2026 ?
              </h2>
              <div className="font-dm text-blanc-casse/70 space-y-4 leading-relaxed">
                <p>
                  Pendant des années, certaines solutions étaient inaccessibles aux petites structures — pas parce qu'elles étaient trop complexes, mais parce qu'elles nécessitaient des équipes dédiées, des mois de développement et des budgets hors de portée.
                </p>
                <p>
                  L'IA générative a changé la donne. Ce qui nécessitait autrefois un développeur, des semaines de travail et plusieurs milliers d'euros peut aujourd'hui être mis en place en quelques jours, pour une fraction du coût.
                </p>
                <p>
                  En 2026, les outils ont atteint un niveau de maturité suffisant pour être utilisés de façon fiable dans un contexte professionnel réel — pas seulement dans une démonstration.
                </p>
              </div>
              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-or-mat mt-6 border-l-0 pl-0 text-center">
                Les entreprises qui intègrent l'IA aujourd'hui ne font pas un pari technologique. Elles prennent une avance opérationnelle sur celles qui attendent.
              </p>
              <p className="font-dm text-blanc-casse/70 mt-4 leading-relaxed">
                Ce n'est pas une question d'urgence artificielle. C'est une question de fenêtre d'avantage compétitif : une automatisation bien ciblée est souvent amortie en moins d'un an.
              </p>
            </div>
          </div>
        </section>

        {/* Trois leviers */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                Trois leviers. Le bon, selon votre situation.
              </h2>

              {/* 1. Automatisation */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center">
                    <Cog size={22} className="text-or-mat" />
                  </div>
                  <h3 className="font-dm font-bold text-lg text-navy">1. Automatisation sur-mesure</h3>
                </div>
                <p className="font-dm text-ardoise/80 mb-3 leading-relaxed">
                  Workflows automatisés via n8n — une plateforme qui connecte vos outils existants entre eux, en gardant vos données dans votre environnement.
                </p>
                <ul className="space-y-2">
                  {autoItems.map((item, i) => (
                    <li key={i} className="font-dm text-sm text-ardoise/70 flex items-start gap-2">
                      <item.icon size={14} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Formation */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center">
                    <GraduationCap size={22} className="text-or-mat" />
                  </div>
                  <h3 className="font-dm font-bold text-lg text-navy">2. Formation & acculturation IA</h3>
                </div>
                <p className="font-dm text-ardoise/80 mb-3 leading-relaxed">
                  Quand la bonne solution est d'apprendre à utiliser un outil directement. Sessions calibrées sur votre activité, vos outils, vos questions réelles — pas un cours standard délivré à des dizaines d'entreprises en même temps.
                </p>
                <ul className="space-y-2">
                  {formationItems.map((item, i) => (
                    <li key={i} className="font-dm text-sm text-ardoise/70 flex items-start gap-2">
                      <item.icon size={14} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Conseil */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center">
                    <Filter size={22} className="text-or-mat" />
                  </div>
                  <h3 className="font-dm font-bold text-lg text-navy">3. Conseil & aide au choix d'outils</h3>
                </div>
                <p className="font-dm text-ardoise/80 leading-relaxed">
                  Le marché propose des centaines d'outils IA. Semaine 54 joue un rôle de filtre : identifier ce qui correspond à vos besoins et parfois vous conseiller une solution simple plutôt qu'un abonnement coûteux dont vous n'utiliserez qu'une fraction.
                </p>
              </div>

              <p className="punchline font-dm font-bold italic text-lg sm:text-xl text-navy border-l-0 pl-0 text-center">
                Mon rôle : faire le filtre. <span className="text-or-mat">Et parfois vous conseiller une solution simple plutôt qu'un abonnement coûteux.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Outils utilisés */}
        <section className="bg-navy py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6 text-center">
                Les outils utilisés
              </h2>
              <p className="font-dm text-blanc-casse/70 mb-6 text-center">
                Aucun outil n'est imposé. Chaque solution est choisie selon votre activité, vos contraintes et votre budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Assistants IA", value: "ChatGPT · Claude · Gemini · Microsoft Copilot" },
                  { label: "Automatisation", value: "n8n · Make · Zapier" },
                  { label: "Outils métiers", value: "Notion AI · Noota · et d'autres selon vos besoins" },
                  { label: "Intégrations", value: "Gmail · Outlook · Google Sheets · HubSpot · Slack · WhatsApp Business · Facebook · Instagram · LinkedIn · Stripe · Calendly" },
                ].map((cat, i) => (
                  <div key={i} className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-xl p-5">
                    <h3 className="font-dm font-bold text-sm text-or-mat mb-2 uppercase tracking-wider">{cat.label}</h3>
                    <p className="font-dm text-blanc-casse/70 text-sm">{cat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-blanc-casse py-6">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-6 text-center">
                FAQ technique & sécurité
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div key={i} className="bg-navy/5 border border-navy/10 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-2">
                      <HelpCircle size={16} className="text-or-mat mt-0.5 shrink-0" />
                      <h3 className="font-dm font-bold text-base text-navy">{item.q}</h3>
                    </div>
                    <p className="font-dm text-sm text-ardoise/70 leading-relaxed pl-7">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                <a href="/#contact">
                  Réserver mon audit gratuit
                  <ArrowRight size={20} />
                </a>
              </Button>
              <p className="font-dm text-blanc-casse/50 text-sm mt-4 italic">
                Sans engagement, sans présentation commerciale.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default Solutions;
