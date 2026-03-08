import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-navy py-6 border-t border-blanc-casse/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="tel:0610322082" className="flex items-center gap-2 font-dm text-blanc-casse/70 text-sm hover:text-or-mat transition-colors">
              <Phone size={14} className="text-or-mat" />
              06 10 32 20 82
            </a>
            <a href="mailto:semaine54ia@gmail.com" className="flex items-center gap-2 font-dm text-blanc-casse/70 text-sm hover:text-or-mat transition-colors">
              <Mail size={14} className="text-or-mat" />
              semaine54ia@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blanc-casse/50 hover:text-or-mat transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blanc-casse/50 hover:text-or-mat transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <p className="font-dm text-blanc-casse/70 text-sm mb-2">
            Basé à Brest (Finistère)
          </p>
          <p className="font-dm text-blanc-casse/50 text-sm mb-4">
            Accompagnement des PME et TPE en Bretagne
          </p>
          <div className="flex items-center justify-center gap-2 text-blanc-casse/40 font-dm text-sm">
            <MapPin size={14} className="text-or-mat" />
            <span>Finistère · Côtes-d'Armor · Morbihan · Ille-et-Vilaine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
