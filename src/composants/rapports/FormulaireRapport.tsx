import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'
import type { Rapport, RapportSaisie } from '../../types/rapport'
import { creerRapport, modifierRapport } from '../../services/rapports/serviceRapports'
import { CHAMPS_RAPPORT } from '../../constantes/rapports'
import Champ from '../interface/Champ'
import ZoneTexte from '../interface/ZoneTexte'
import Bouton from '../interface/Bouton'

export default function FormulaireRapport({ rapport }: { rapport?: Rapport }) {
  const naviguer = useNavigate()
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState('')
  const [formulaire, setFormulaire] = useState<RapportSaisie>({ date: rapport?.date ?? new Date().toISOString().slice(0, 10), jour_stage: rapport?.jour_stage ?? 1, objectif: rapport?.objectif ?? '', activites: rapport?.activites ?? '', difficultes: rapport?.difficultes ?? '', solutions: rapport?.solutions ?? '', apprentissages: rapport?.apprentissages ?? '', bilan: rapport?.bilan ?? '', demain: rapport?.demain ?? '' })
  function changer(champ: keyof RapportSaisie, valeur: string) { setFormulaire((ancien) => ({ ...ancien, [champ]: champ === 'jour_stage' ? Number(valeur) : valeur })) }
  async function soumettre(e: React.FormEvent) {
    e.preventDefault(); setErreur('')
    if (!formulaire.date || formulaire.jour_stage < 1 || !formulaire.objectif.trim() || !formulaire.activites.trim()) { setErreur('Renseignez la date, le jour de stage, l’objectif et les activités.'); return }
    setEnvoi(true)
    try { const resultat = rapport ? await modifierRapport(rapport.id, formulaire) : await creerRapport(formulaire); naviguer(`/rapports/${resultat.id}`) }
    catch (e) { setErreur(e instanceof Error ? e.message : 'Enregistrement impossible.') }
    finally { setEnvoi(false) }
  }
  return <form onSubmit={soumettre} className="space-y-6"><div className="grid gap-5 sm:grid-cols-2"><Champ label="Date du rapport" type="date" name="date" value={formulaire.date} onChange={(e) => changer('date', e.target.value)} required/><Champ label="Jour de stage" type="number" min={1} name="jour_stage" value={formulaire.jour_stage} onChange={(e) => changer('jour_stage', e.target.value)} required/></div>{CHAMPS_RAPPORT.map(({ nom, titre, obligatoire }) => nom === 'objectif' ? <ZoneTexte key={nom} label={titre} name={nom} value={formulaire[nom] ?? ''} onChange={(e) => changer(nom, e.target.value)} required={obligatoire} rows={3}/> : <ZoneTexte key={nom} label={titre} name={nom} value={formulaire[nom] ?? ''} onChange={(e) => changer(nom, e.target.value)} required={obligatoire} rows={nom === 'activites' ? 6 : 3}/>)}{erreur && <p className="text-sm error-text">{erreur}</p>}<div className="flex flex-wrap justify-end gap-3"><button type="button" className="btn btn-secondary" onClick={() => naviguer(-1 as never)}><ArrowLeft size={16}/>Annuler</button><Bouton type="submit" disabled={envoi}><Save size={16}/>{envoi ? 'Enregistrement…' : 'Enregistrer le rapport'}</Bouton></div></form>
}
