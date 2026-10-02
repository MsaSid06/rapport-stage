import { useCallback, useEffect, useState } from 'react'
import type { Rapport } from '../types/rapport'
import { obtenirRapports } from '../services/rapports/serviceRapports'

export function utiliserRapports() {
  const [rapports, setRapports] = useState<Rapport[]>([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')
  const actualiser = useCallback(async () => {
    setChargement(true)
    setErreur('')
    try { setRapports(await obtenirRapports()) }
    catch (e) { setErreur(e instanceof Error ? e.message : 'Impossible de charger les rapports.') }
    finally { setChargement(false) }
  }, [])
  useEffect(() => { void actualiser() }, [actualiser])
  return { rapports, setRapports, chargement, erreur, actualiser }
}
