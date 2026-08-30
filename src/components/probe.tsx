import { useState } from "react";
import { Calculator } 
from "lucide-react";

const Calculateur
Section = () => {
  const 
[minutes, setMinutes] =
 useState(30);
  const 
[
per
Week, set
Per
Week] =
 useState(5);

  const hours

Per

Year

=

 Math

.round(



 minutes



 *



 perWeek



 *



52



/



60




);



 const



 weeks





Equiv





=





 (





hours





Per





Year





 /





 40).toFixed(1);
 const

 gain





Hours





 =





 Math.round(hoursPerYear



 *





 0.8);





 return (





   <div className="w-full text-left">





     <div className="flex items-start gap-3 mb-4">





       <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-or-mat/10 shrink-0">





         <Calculator size={16} className="text-or-mat" />





       </div>





       <div>





         <h2 className="font-dm font-bold text-sm text-navy leading-snug">





           Combien vous coute cette tache chaque annee?





         </h2>





         <p className="font-dm text-xs text-gris-bleu">





           Entrez le temps passe et la frequence.





         </p>





       </div>





     </div>





   </div>





 );
};
