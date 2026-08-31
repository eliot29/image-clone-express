import { Shield, Scale } from "lucide-react";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import brestImg from "@/assets/brest-3.jpg.asset.json";
import rennesImg from "@/assets/rennes-3.jpg.asset.json";
import saintBrieucImg from "@/assets/saint-brieuc-3.jpg.asset.json";
import vannesImg from "@/assets/vannes-3.jpg.asset.json";
import metier1Img from "@/assets/metier-1.png.asset.json";
import metier2Img from "@/assets/metier-2.png.asset.json";
import metier3Img from "@/assets/metier-3.png.asset.json";
import metier4Img from "@/assets/metier-4.png.asset.json";

const villes = [brestImg, rennesImg, saintImg, vannesImg];
const metiers = [metier1Img, metier2Img];

const SecurityComponent = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-6">
        <div className="bg-gris-perle rounded-xl p-8 md:p-10 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
              <Shield size={18} className="text-or-mat" />
            </div>
            <h2 className="font-dm font-bold text-2xl text-navy">Titre</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Server />
            <Lock />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecuritySection;
