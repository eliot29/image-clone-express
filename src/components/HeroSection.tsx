import { Clock, Mail, FileText, Share2, FolderOpen, Search, BarChart3, Image } from "lucide-react";

const painPoints = [
{ icon: FileText, text: "Devis rédigés à la main" },
{ icon: Search, text: "Recherches d'informations répétitives" },
{ icon: Mail, text: "Relances de mails chronophages" },
{ icon: Share2, text: "Publications irrégulières sur les réseaux" },
{ icon: FolderOpen, text: "Administratif qui s'accumule" },
{ icon: Clock, text: "Comparaisons fournisseurs fastidieuses" },
{ icon: BarChart3, text: "Longues analyses de fichiers Excel" },
{ icon: Image, text: "Productions laborieuses de supports visuels" }];


const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-6 lg:pt-28 lg:pb-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - hidden on mobile */}
          <div className="hidden sm:flex justify-center mb-8">
            <img
              src="/logo-semaine54-dark-new.svg"
              alt="Semaine 54"
              className="h-20 lg:h-24 w-auto"
            />
          </div>

          {/* Tagline badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20">
              <span className="w-2 h-2 rounded-full bg-or-mat animate-pulse" />
              <span className="font-dm text-sm text-or-mat font-medium tracking-wide uppercase">Basé à Brest (Finistère)</span>
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-sm text-navy font-medium">Agence IA pour TPE et PME bretonnes</span>
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10">
              <span className="font-dm text-sm text-navy font-medium">Automatisations & conseils IA sur-mesure</span>
            </span>
          </div>

          {/* Punchline */}
          <h1 className="font-dm font-bold text-lg sm:text-xl text-navy mb-6 max-w-full mx-auto leading-snug tracking-tight">
            Gagnez du temps. Gagnez en productivité. Gagnez en rentabilité.
          </h1>

          {/* Punchline */}
          



          

          {/* Intro text */}
          

          

          {/* Pain points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 max-w-2xl mx-auto text-left">
            {painPoints.map((point, i) =>
            <div key={i} className="flex items-center gap-3 text-ardoise font-dm text-sm">
                <point.icon size={18} className="text-or-mat/60 shrink-0" />
                <span>{point.text}</span>
              </div>
            )}
          </div>

          <p className="font-dm text-ardoise text-sm mb-6 italic">
            Ces tâches ne créent pas de valeur. Elles consomment votre temps.
          </p>

          {/* Stat highlight */}
          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center">
            <span className="text-or-mat">30 minutes</span> perdues par jour = <span className="text-or-mat">120 heures</span> par an.
            <br />
            Soit près de <span className="text-or-mat">3 semaines</span> de travail à récupérer.
          </p>
        </div>
      </div>
    </section>);

};

export default HeroSection;