import { useState } from "react";
import { Calculator } from "lucide-react";

const Calculateur
 
Section = () => {
  const [minutes, setMinutes] = useState(30);
  const [perWeek, setPerWeek] = useState(5);

  const hoursPerYear = Math.round(minutes * perWeek * 52 / 60);
  const weeksEquiv = (hoursPerYear / 40).toFixed(1);
  const gainHours = Math.round(hoursPerYear * 0.8);

  return (
    <div className="w-full text-left">
      <div className="flex items-start gap-3 mb-4">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-or-mat/10 shrink-0">
          <Calculator size={16} className="text-or-mat" />
        </div>
        <div>
          <h2 className="font-dm font-bold text-sm sm:text-base text-navy leading-snug">
            Combien vous coûte cette tâche chaque année&nbsp;?
          </h2>
          <p className="font-dm text-xs text-gris-bleu mt-0.5">
            Entrez le temps passé et la fréquence.
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-0 mb-4">
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-1 mb-1 whitespace-nowrap">
            <label className="font-dm text-xs font-semibold text-ardoise truncate">
              Temps par occurrence
            </label>
            <span className="font-dm text-xs font-bold text-navy whitespace-nowrap">
              {minutes} min
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={120}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full accent-or-mat" />
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-1 mb-1 whitespace-nowrap">
            <label className="font-dm text-xs font-semibold text-ardoise truncate">
              Fréquence / semaine
            </label>
            <span className="font-dm text-xs font-bold 
text-navy whitespace-nowrap">
              {perWeek}×/sem
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={perWeek}
            onChange={(e) => 
setPerWeek(Number(e.target.value))}
            className="w-full accent-or-mat" />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-2 
text-center">
        <div className="bg-gris-perle rounded-lg p-2.5">
          <div className="font-dm text-lg 
sm:text-xl font-bold text-navy">{hoursPerYear}</div>
          <div className="font-dm text-[10px] leading-tight text-gris-bleu mt-0.5">heures perdues/an</div>
        </div>
        <div className="bg-gris-perle rounded-lg p-2.5">
          <div className="font-dm text-lg 
sm:text-xl font-bold text-or-mat">{weeksEquiv}</div>
          <div className="font-dm text-[10px] leading-tight 
text-gris-bleu 
mt-0.5">semaines de travail</div>
        </div>
        <div className="bg-navy 
rounded-lg p-2.5">
          <div className="font-dm text-lg sm:text-xl 
font-bold text-or-mat">
{gainHours}h</div>
          <div className="font-dm text-[10px] leading-tight text-blanc-casse/60 mt-0.5">gain si automatisé</div>
        </div>
      </div>
    </div>
  );
};

export default CalculateurSection;
