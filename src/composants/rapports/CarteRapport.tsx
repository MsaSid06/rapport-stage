import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import type { Rapport } from '../../types/rapport'
import { formaterDate } from '../../utilitaires/formaterDate'
import { tronquerTexte } from '../../utilitaires/formaterTexte'
export default function CarteRapport({ rapport }: { rapport: Rapport }) { return <Link to={`/rapports/${rapport.id}`} className="panel block p-5 transition hover:-translate-y-0.5 hover:border-indigo-400/50"><div className="flex items-start justify-between gap-4"><div><div className="mb-2 flex items-center gap-2 text-xs muted"><CalendarDays size={14}/>{formaterDate(rapport.date)} · Jour {rapport.jour_stage}</div><h3 className="font-semibold">{rapport.objectif}</h3></div><ArrowUpRight size={17} className="shrink-0 muted"/></div><p className="mt-3 text-sm leading-6 muted">{tronquerTexte(rapport.activites, 180)}</p></Link> }
