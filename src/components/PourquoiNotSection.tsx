import { useState } from "react";
import {
  Eye,
  Users,
  TrendingUp,
  PhoneCall,
  Mic,
  FileText,
  Camera,
  SprayCan,
  Inbox,
} from "lucide-react";
import Reveal from "@/components/secondary/Reveal";

const resultats = [
  { icon: Eye, value: "73 000", label: "vues" },
  { icon: Users, value: "+800", label: "abonnés" },
  { icon: TrendingUp, value: "+15 %", label: "de CA" },
];

const solutions = [
  { icon: PhoneCall, label: "Assistant vocal" },
  { icon: Mic, label: "Inventaires à la voix" },
  { FileText, label: "Bons de transport dictés" },
  { Camera, label: "Photo → traçabilité" },
  { SprayCan, label: "Suivi des tâches d'hygiène" },
  { Inbox, label: "Tri des e-mails et documents" },
];

const PourquoiSection = () => {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section id="approche" className="bg-blanc-casse py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-6xl mx-auto">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy text-center mb-6">
            Pourquoi Semaine 54 ?
          </h2>
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_mınmax(0,1fr)] gap-6 lg:gap-10 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <span className="font-semibold text-[11px] uppercase tracking-[0.18em] text-or">
                Parcours
              </span>
              <p className="text-ardoise/80 leading-relaxed mt-3">
                Je suis <strong className="text-navy">Clément, 35 ans</strong>, à l'initiative de{" "}
                <strong className="text-navy">Semaine 54</strong>. Après une dizaine d'années dans
                différents métiers de la <strong className="text-navy">grande distribution</strong>,
                j'explore et utilise depuis plus de trois ans les{" "}
                <strong className="text-navy">outils d'IA dans des contextes professionnels</strong>.
              </p>

              <p className="font-bold text-navy text-lg sm:text-xl leading-snug mt-5 pl-4 border-l-2 border-or/40">
                Le déclic est venu en accompagnant{" "}
                <span className="text-or">une poissonnerie du Pays d'Iroise.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiSection;
