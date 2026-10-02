import { useNavigate } from 'react-router-dom'
import { FileText, CalendarDays, BookOpen, Plus } from 'lucide-react'
import { utiliserRapports } from '../../hooks/utiliserRapports'
import { utiliserStatistiques } from '../../hooks/utiliserStatistiques'
import IndicateurChargement from '../../composants/interface/IndicateurChargement'
import EtatErreur from '../../composants/interface/EtatErreur'
import CarteStatistique from '../../composants/tableau-de-bord/CarteStatistique'
import CarteProgression from '../../composants/tableau-de-bord/CarteProgression'
import GraphiqueRapports from '../../composants/tableau-de-bord/GraphiqueRapports'
import RapportsRecents from '../../composants/tableau-de-bord/RapportsRecents'
import ActiviteRecente from '../../composants/tableau-de-bord/ActiviteRecente'
import Bouton from '../../composants/interface/Bouton'

export default function TableauDeBord() {
  const { rapports, chargement, erreur, actualiser } = utiliserRapports()
  const stats = utiliserStatistiques(rapports)
  const naviguer = useNavigate()
  if (chargement) return <IndicateurChargement texte="Chargement du tableau de bord…" />
  if (erreur) return <EtatErreur message={erreur} reessayer={() => void actualiser()} />
  return <div className="space-y-8"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-medium text-indigo-300">Vue d’ensemble</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Tableau de bord</h1><p className="mt-2 text-sm muted">Suivez l’avancement de votre stage et vos comptes rendus.</p></div><Bouton onClick={() => naviguer('/rapports/nouveau')}><Plus size={17}/>Nouveau rapport</Bouton></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><CarteStatistique titre="Rapports enregistrés" valeur={stats.total} detail="Total des comptes rendus" icone={<FileText size={19}/>} /><CarteStatistique titre="Dernier jour renseigné" valeur={stats.dernierJour ?? '—'} detail="Jour de stage le plus élevé" icone={<CalendarDays size={19}/>} /><CarteStatistique titre="Jours couverts" valeur={stats.joursCouverts} detail="Jours distincts documentés" icone={<BookOpen size={19}/>} /><CarteStatistique titre="Moyenne d’activité" valeur={`${stats.moyenneMotsActivites} mots`} detail="Par rapport enregistré" icone={<FileText size={19}/>} /></div><div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]"><GraphiqueRapports donnees={stats.mensuel}/><CarteProgression jour={stats.dernierJour ?? 0}/></div><div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]"><section><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold">Rapports récents</h2><button className="text-sm text-indigo-300 hover:text-indigo-200" onClick={() => naviguer('/rapports')}>Tout voir →</button></div><RapportsRecents rapports={rapports}/></section><ActiviteRecente date={stats.derniereDate}/></div></div>
}
