import { EQUIPE, ENCADRANT } from '../constantes/application'
import type { Rapport, RapportExport } from '../types/rapport'

export function preparerExport(rapports: Rapport[]): RapportExport[] {
  return rapports.map((rapport) => ({ ...rapport, equipe: EQUIPE, encadrant: ENCADRANT }))
}

export function telechargerJson(donnees: unknown, nomFichier = 'rapports-stage.json') {
  const contenu = JSON.stringify(donnees, null, 2)
  const url = URL.createObjectURL(new Blob([contenu], { type: 'application/json;charset=utf-8' }))
  const lien = document.createElement('a')
  lien.href = url
  lien.download = nomFichier
  lien.click()
  URL.revokeObjectURL(url)
}
