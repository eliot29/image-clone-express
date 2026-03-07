import { MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-navy py-6 border-t border-blanc-casse/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
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
