import { useState } from "react";
import { Calculator } from "lucide-react";

const presets: { label: string; minutes: number; perWeek: number }[] = [];


const CalculateurSection = () => {
  const [minutes, setMinutes] = useState(30);
  const [perWeek, setPerWeek] = useState(5);

  const hoursPerYear = Math.round(minutes * perWeek * 52 / 60);
  const weeksEquiv = (hoursPerYear / 40).toFixed(1);
  const gainHours = Math.round(hoursPerYear * 0.8);

  return (
    <section id="calculateur" className="bg-gris-perle py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-or-mat/10 mb-4">
              <Calculator size={24} className="text-or-mat" />
            </div>
            <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-3">Combien vous coûte 
cette tâche chaque année ?
            </h2>
            <p className="font-dm text-gris-bleu">
              Entrez le temps passé et la fréquence.
            </p>
          </div>

          {/* Input area */}
          <div className="bg-card rounded-xl shadow-card p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="font-dm text-sm font-semibold text-ardoise mb-2 block">
                  Temps par occurrence (minutes)
                </label>
                <input
                  type="range"
                  min={5}
                  max={120}
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  className="w-full accent-or-mat" />
                
                <div className="font-dm text-2xl font-bold text-navy mt-1">{minutes} min</div>
              </div>
              <div>
                <label className="font-dm text-sm font-semibold text-ardoise mb-2 block">
                  Fréquence par semaine
                </label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={perWeek}
                  onChange={(e) => setPerWeek(Number(e.target.value))}
                  className="w-full accent-or-mat" />
                
                <div className="font-dm text-2xl font-bold text-navy mt-1">{perWeek}×/sem</div>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gris-perle rounded-lg p-4">
                <div className="font-dm text-3xl font-bold text-navy">{hoursPerYear}</div>
                <div className="font-dm text-xs text-gris-bleu mt-1">heures perdues/an</div>
              </div>
              <div className="bg-gris-perle rounded-lg p-4">
                <div className="font-dm text-3xl font-bold text-or-mat">{weeksEquiv}</div>
                <div className="font-dm text-xs text-gris-bleu mt-1">semaines de travail</div>
              </div>
              <div className="bg-navy rounded-lg p-4">
                <div className="font-dm text-3xl font-bold text-or-mat">{gainHours}h</div>
                <div className="font-dm text-xs text-blanc-casse/60 mt-1">gain si automatisé</div>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap gap-2 justify-center">
            {presets.map((p, i) =>
            <button
              key={i}
              onClick={() => {setMinutes(p.minutes);setPerWeek(p.perWeek);}}
              className="font-dm text-xs px-4 py-2 rounded-full border border-navy/15 text-ardoise hover:border-or-mat hover:text-or-mat transition-colors">
              
                {p.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CalculateurSection;