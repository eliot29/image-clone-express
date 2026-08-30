# Plan — Élargissement du bloc calculateur

## Objectif
Le bloc calculateur (phrase + sliders + résultats) est trop étroit : l'élargir horizontalement (gauche et droite) pour qu'il prenne mieux la largeur disponible, sans casser la mise en page mobile.

## Modifications

### 1. Conteneur du bloc (HeroSection)
- Augmenter la largeur maximale du bloc punchline + calculateur (`max-w-xl` → `max-w-3xl`) et lui laisser prendre plus d'espace dans la flex row du Hero.
- Conserver le centrage et les marges latérales pour les petits écrans.

### 2. Nettoyage du fichier CalculateurSection.tsx
- Le fichier actuel contient un contenu fragmenté corrompu (lignes cassées) ; le réécrire proprement en conservant exactement les mêmes fonctionnalités :
  - Sliders « Temps / occurrence » et « Fréquence / semaine » côte à côte (2 colonnes).
  - Résultats : heures perdues/an, semaines de travail, gain si automatisé.
  - Tokens Tailwind existants (navy, or-mat, gris-perle…), aucun hexadécimal brut.

## Validation
- `tsc` sans erreur, aperçu vérifié : bloc élargi, sliders sur une ligne, aucun débordement mobile.
