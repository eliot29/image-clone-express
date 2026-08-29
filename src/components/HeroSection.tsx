import { Button } from "@/components/ui/button";
import TaskFlow from "@/components/TaskFlow";






const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-blanc-casse overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-6 lg:pt-24 lg:pb-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - hidden on mobile */}
          <div className="hidden sm:flex justify-center mt-12 mb-6">
            <img
              src="/logo-semaine54-dark-new.svg"
              alt="Semaine 54"
              className="h-20 lg:h-24 w-auto"
            />
          </div>

          {/* Punchline élégante */}
          <p className="font-bold italic text-navy text-xs sm:text-sm mt-8 sm:mt-0 mb-8 leading-tight" style={{ fontFamily: "'Anonymous Pro', monospace" }}>
            {"\n"}
          </p>
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
          

          

          {/* Pain points — flux continu de cartes */}
          <TaskFlow />


          <p className="font-dm text-ardoise text-sm mb-2 italic">
            Et si toutes ces tâches se faisaient automatiquement ?
          </p>

          {/* Stat highlight */}
          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center mb-6">
            Une année compte 52 semaines. Gagnez votre semaine 54
          </p>

          <div className="mt-8 flex justify-center">
            <Button variant="cta" size="lg" className="w-full sm:w-auto text-center whitespace-normal" asChild>
              <a href="#calculateur">Découvrez combien de temps vous pourriez gagner</a>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;