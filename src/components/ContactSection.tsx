import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-navy py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-4">
            Prêt à récupérer votre Semaine 54 ?
          </h2>
          <p className="font-dm text-blanc-casse/60 mb-10">
            Un premier échange de 30 à 45 minutes — téléphone ou en visio. On commence par comprendre votre situation avant de proposer quoi que ce soit.
          </p>

          <Button variant="cta" size="lg" className="mb-6">
            Réserver mon audit gratuit
            <ArrowRight size={18} />
          </Button>

          <p className="font-dm text-xs text-blanc-casse/40 mb-12">
            Sans engagement · Sans présentation commerciale · Réponse sous 48h
          </p>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blanc-casse/50 font-dm text-sm">
            <span className="font-syne font-bold text-or-mat">semaine54.bzh</span>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-or-mat" />
              <span>[À renseigner]</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-or-mat" />
              <span>[À renseigner]</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-blanc-casse/50 font-dm text-sm">
            <MapPin size={14} className="text-or-mat" />
            <span>Finistère (29) · Côtes-d'Armor (22) · Morbihan (56) · Ille-et-Vilaine (35)</span>
          </div>

          {/* Tool logos bar */}
          <div className="mt-16 pt-8 border-t border-blanc-casse/10">
            <p className="font-dm text-xs text-blanc-casse/30 mb-4 uppercase tracking-wider">
              Les outils que j'utilise — ceux qui correspondent à votre situation
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-blanc-casse/25 font-dm text-sm font-medium">
              {["n8n", "Claude", "ChatGPT", "Gemini", "Make", "Notion AI", "Noota"].map((tool) => (
                <span key={tool} className="hover:text-blanc-casse/50 transition-colors">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
