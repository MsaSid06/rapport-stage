import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { utiliserRapport } from '../../hooks/utiliserRapport'
import IndicateurChargement from '../../composants/interface/IndicateurChargement'
import EtatErreur from '../../composants/interface/EtatErreur'
import FormulaireRapport from '../../composants/rapports/FormulaireRapport'
export default function ModifierRapport() { const { id } = useParams(); const { rapport, chargement, erreur } = utiliserRapport(Number(id)); if (chargement) return <IndicateurChargement/>; if (erreur || !rapport) return <EtatErreur message={erreur || 'Rapport introuvable.'}/>; return <div className="mx-auto max-w-3xl space-y-6"><Link to={`/rapports/${rapport.id}`} className="inline-flex items-center gap-2 text-sm muted"><ArrowLeft size={16}/>Retour au rapport</Link><div><h1 className="text-3xl font-bold tracking-tight">Modifier le rapport</h1><p className="mt-2 text-sm muted">Mettez à jour les informations de votre journée.</p></div><div className="panel p-6 sm:p-8"><FormulaireRapport rapport={rapport}/></div></div> }
