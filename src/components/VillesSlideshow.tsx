import { useEffect, useState } from "react";
import brest from "@/assets/brest.jpg.asset.json";
import rennes from "@/assets/rennes.jpg.asset.json";
import saintBrieuc from "@/assets/saint-brieuc.jpg.asset.json";
import vannes from "@/assets/vannes.jpg.asset.json";

const villes = [
  { url: brest.url, alt: "Brest, Finistère" },
  { url: rennes.url, alt: "Rennes, Ille-et-Vilaine" },
  { url: saintBrieuc.url, alt: "Saint-Brieuc, Côtes-d'Armor" },
  { url: vannes.url, alt: "Vannes, Morbihan" },
];

const VillesSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % villes.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
      {villes.map((ville, i) => (
        <img
          key={ville.url}
          src={ville.url}
          alt={ville.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default VillesSlideshow;
