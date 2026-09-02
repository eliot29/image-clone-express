import PhotoSlideshow from "@/components/PhotoSlideshow";
import brestImg from "@/assets/brest-3.jpg.asset.json";
import rennesImg from "@/assets/rennes-3.jpg.asset.json";
import saintBrieucImg from "@/assets/saint-brieuc-3.jpg.asset.json";
import vannesImg from "@/assets/vannes-3.jpg.asset.json";
import metier1Img from "@/assets/metier-1.png.asset.json";
import metier2Img from "@/assets/metier-2.png.asset.json";
import metier3Img from "@/assets/metier-3.png.asset.json";
import metier4Img from "@/assets/metier-4.png.asset.json";

const villes = [brestImg.url, rennesImg.url, saintBrieucImg.url, vannesImg.url];
const metiers = [metier1Img.url, metier2Img.url, metier3Img.url, metier4Img.url];

const PhotosBandeau = () => {
  return (
    <section className="bg-blanc-casse py-16 md:py-24">
      <div className="section-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <PhotoSlideshow images={villes} label="Ville de Bretagne" />
          <PhotoSlideshow images={metiers} label="Métier accompagné" interval={4200} />
        </div>
      </div>
    </section>
  );
};

export default PhotosBandeau;
