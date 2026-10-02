import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import FormulaireRapport from '../../composants/rapports/FormulaireRapport'
export default function NouveauRapport() { return <div className="mx-auto max-w-3xl space-y-6"><Link to="/rapports" className="inline-flex items-center gap-2 text-sm muted hover:text-white"><ArrowLeft size={16}/>Retour aux rapports</Link><div><h1 className="text-3xl font-bold tracking-tight">Nouveau rapport</h1><p className="mt-2 text-sm muted">Renseignez les activités de votre journée de stage.</p></div><div className="panel p-6 sm:p-8"><FormulaireRapport/></div></div> }
