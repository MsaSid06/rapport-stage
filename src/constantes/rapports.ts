export const CHAMPS_RAPPORT = [
  { nom: 'objectif', titre: 'Objectif du jour', obligatoire: true },
  { nom: 'activites', titre: 'Activités réalisées', obligatoire: true },
  { nom: 'difficultes', titre: 'Difficultés rencontrées', obligatoire: false },
  { nom: 'solutions', titre: 'Solutions apportées', obligatoire: false },
  { nom: 'apprentissages', titre: 'Apprentissages', obligatoire: false },
  { nom: 'bilan', titre: 'Bilan de la journée', obligatoire: false },
  { nom: 'demain', titre: 'Prévisions pour demain', obligatoire: false },
] as const
