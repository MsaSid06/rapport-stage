export type Rapport = {
  id: number
  date: string
  jour_stage: number
  objectif: string
  activites: string
  difficultes: string | null
  solutions: string | null
  apprentissages: string | null
  bilan: string | null
  demain: string | null
  created_at: string
  updated_at: string
}

export type RapportSaisie = Omit<Rapport, 'id' | 'created_at' | 'updated_at'>
export type RapportExport = Rapport & { equipe: string; encadrant: string }
