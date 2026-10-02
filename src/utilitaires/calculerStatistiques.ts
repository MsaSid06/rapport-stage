import type { Rapport } from '../types/rapport'
import { obtenirMois } from './formaterDate'
import { compterMots } from './formaterTexte'

export function calculerStatistiques(rapports: Rapport[]) {
  const tries = [...rapports].sort((a, b) => a.jour_stage - b.jour_stage)
  const mots = rapports.reduce((total, r) => total + compterMots(r.activites), 0)
  const parMois = new Map<string, number>()
  rapports.forEach((r) => parMois.set(obtenirMois(r.date), (parMois.get(obtenirMois(r.date)) ?? 0) + 1))
  const jours = [...new Set(rapports.map((r) => r.jour_stage))].sort((a, b) => a - b)
  const joursManquants: number[] = []
  for (let i = 1; i < jours.length; i++) for (let j = jours[i - 1] + 1; j < jours[i]; j++) joursManquants.push(j)
  return {
    total: rapports.length,
    premierJour: tries[0]?.jour_stage ?? null,
    dernierJour: tries.at(-1)?.jour_stage ?? null,
    premiereDate: [...rapports].sort((a, b) => a.date.localeCompare(b.date))[0]?.date ?? null,
    derniereDate: [...rapports].sort((a, b) => b.date.localeCompare(a.date))[0]?.date ?? null,
    moyenneMotsActivites: rapports.length ? Math.round(mots / rapports.length) : 0,
    joursCouverts: jours.length,
    joursManquants,
    mensuel: [...parMois.entries()].map(([mois, nombre]) => ({ mois, nombre })),
  }
}
