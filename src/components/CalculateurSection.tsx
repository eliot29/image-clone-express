import { useState } from "react";
import { Calculator } from "lucide-react";

const CalculateurSection = () => {
  const [minutes, setMinutes] = useState(30);
  const [perWeek, setPerWeek] = useState(5);

  // Hypothèses affichées : 48 semaines travaillées, 80 % de la tâche automatisable
  const hoursPerYear = Math.round((minutes * perWeek * 48) / 60);
  const weeksEquivalent = (hoursPerYear / 35).toFixed(1);
  const gainHours = Math.round(hoursPerYear * 0.8);

  return (
    <div className="w-full text-left">
      <div className="flex items-start gap-3 mb-5">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-or-mat/15 shrink-0">
          <Calculator size={17} className="text-or-mat" />
        </div>
        <div>
          <h2 className="font-syne font-bold text-base sm:text-lg text-navy leading-snug">
            Combien vous coûte cette tâche chaque année&nbsp;?
          </h2>
          <p className="font-dm text-xs text-gris-bleu mt-1">
            Entrez le temps passé et la fréquence.
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 mb-5">
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <label className="font-dm text-xs font-semibold text-ardoise">
              Temps par occurrence
            </label>
            <span className="font-dm text-xs font-bold text-or-mat">
              {minutes} min
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={120}
            step={5}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full accent-or-mat"
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <label className="font-dm text-xs font-semibold text-ardoise">
              Fréquence / semaine
            </label>
            <span className="font-dm text-xs font-bold text-or-mat">
              {perWeek}×
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={perWeek}
            onChange={(e) => setPerWeek(Number(e.target.value))}
            className="w-full accent-or-mat"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
        <div className="bg-gris-perle rounded-xl p-3">
          <div className="font-syne text-xl sm:text-2xl font-bold text-navy">
            {hoursPerYear}
          </div>
          <div className="font-dm text-[10px] sm:text-xs leading-tight text-gris-bleu mt-1">
            heures perdues/an
          </div>
        </div>
        <div className="bg-gris-perle rounded-xl p-3">
          <div className="font-syne text-xl sm:text-2xl font-bold text-navy">
            {weeksEquivalent}
          </div>
          <div className="font-dm text-[10px] sm:text-xs leading-tight text-gris-bleu mt-1">
            semaines de travail
          </div>
        </div>
        <div className="bg-navy rounded-xl p-3">
          <div className="font-syne text-xl sm:text-2xl font-bold text-or-mat">
            {gainHours}h
          </div>
          <div className="font-dm text-[10px] sm:text-xs leading-tight text-blanc-casse/70 mt-1">
            gain si automatisé
          </div>
        </div>
      </div>

      <p className="font-dm text-[10px] sm:text-xs text-gris-bleu mt-3 leading-snug">
        Hypothèses : 48 semaines travaillées par an, 35 h par semaine, 80 % de la
        tâche automatisable.
      </p>
    </div>
  );
};

export default CalculateurSection;
