import type { Rapport } from '../../types/rapport'
import CarteRapport from '../rapports/CarteRapport'
import EtatVide from '../interface/EtatVide'
export default function RapportsRecents({ rapports }: { rapports: Rapport[] }) { return rapports.length ? <div className="grid gap-3">{rapports.slice(0, 3).map((r) => <CarteRapport key={r.id} rapport={r}/>)}</div> : <EtatVide/> }
