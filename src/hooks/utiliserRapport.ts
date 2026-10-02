import { useEffect, useState } from 'react'
import type { Rapport } from '../types/rapport'
import { obtenirRapport } from '../services/rapports/serviceRapports'

export function utiliserRapport(id: number | undefined) {
  const [rapport, setRapport] = useState<Rapport | null>(null)
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')
  useEffect(() => {
    if (!id) { setChargement(false); return }
    obtenirRapport(id).then(setRapport).catch((e: unknown) => setErreur(e instanceof Error ? e.message : 'Rapport introuvable.')).finally(() => setChargement(false))
  }, [id])
  return { rapport, chargement, erreur }
}
