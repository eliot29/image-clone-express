content = r"""
import { useState } from "react";
import { Calculator } 
  from "lucide-react";

const Calculateur
Section = () => {
  const 
[minutes, setMinutes] =
    useState(30);
  const 
[perWeek, set
Per
Week] =
    useState(5);

  const hours
PerYear =
 Math.round(
    minutes 
* perWeek
 * 52 / 60
  );
  const
 weeks

Equiv
 =

 (hoursPerYear

 / 40).toFixed(1);

  const

 gainHours
 =

 Math.round(hours

PerYear

 * 0.8);



  return
 (
    <div

 className

="w

-full

 text

-left">



      
<
div

 className


="flex


 items


-start


 gap


-3


 mb


-4">




        
<
div




 className



="inline



-flex



 items



-center



 justify



-center



 w



-8



 h



-8



 rounded



-full



 bg



-or



-mat



/10



 shrink



-0">



          
<
Calculator





 size



={16}




 className



="text



-or



-mat"



 />






        
</



div



>





        
<
div



>



          
<
h2





 className






="font







-ddm







 font







-bold







 text







-sm







 sm







:text







-base







 text







-navy







 leading







-snug">







            
Combien







 vous







 coûte







 cette







 tâche







 chaque







année







?







          
</







h2







>







          
<
p







 className







="font







-dm







 text







-xs







 text







-gris







-bleur







">
SS
            
Entrez







 le







 temps







 passé







 et







 la







 fréquence.







          
</







p







>







        
</







div







>











      
</







div







>











"""


open('x.tssx','w').write(content)
