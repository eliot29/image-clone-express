import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-navy py-6 border-t border-blanc-casse/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Col 1: Contact + réseaux */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-dm font-bold text-blanc-casse text-sm uppercase tracking-wider">Contact</h3>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blanc-casse hover:text-or-mat transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blanc-casse hover:text-or-mat transition-colors">
                  <Instagram size={16} />
                </a>
              </div>
              <a href="tel:0610322082" className="flex items-center gap-2 font-dm text-blanc-casse text-sm hover:text-or-mat transition-colors">
                <Phone size={14} className="text-or-mat" />
                06 10 32 20 82
              </a>
              <a href="mailto:semaine54ia@gmail.com" className="flex items-center gap-2 font-dm text-blanc-casse text-sm hover:text-or-mat transition-colors">
                <Mail size={14} className="text-or-mat" />
                semaine54ia@gmail.com
              </a>
            </div>

            {/* Col 2: Localisation */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="font-dm font-bold text-blanc-casse text-sm uppercase tracking-wider mb-1">Localisation</h3>
              <div className="flex items-center gap-2 font-dm text-blanc-casse text-sm">
                <MapPin size={14} className="text-or-mat shrink-0" />
                Basé à Brest (Finistère)
              </div>
              <p className="font-dm text-blanc-casse text-sm">
                Accompagnement des PME et TPE en Bretagne
              </p>
            </div>

            {/* Col 3: Zone d'intervention */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="font-dm font-bold text-blanc-casse text-sm uppercase tracking-wider mb-1">Zone d'intervention</h3>
              <p className="font-dm text-blanc-casse text-sm">Finistère · Côtes-d'Armor</p>
              <p className="font-dm text-blanc-casse text-sm">Morbihan · Ille-et-Vilaine</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="font-dm text-or-mat text-sm">
            semaine54.fr — site réalisé à l'aide d'intelligence artificielle
          </p>
          <img src="/logo-semaine54.svg" alt="Semaine 54" className="h-12 brightness-0 invert" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;