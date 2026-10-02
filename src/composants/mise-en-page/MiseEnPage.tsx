import { NavLink, Outlet } from 'react-router-dom'
import { Activity, BarChart3, FileJson, FileText, LayoutDashboard } from 'lucide-react'
import { NOM_APPLICATION } from '../../constantes/application'
import '../../styles/mise-en-page.css'

const icones = { dashboard: LayoutDashboard, reports: FileText, stats: BarChart3, export: FileJson }
const liens = [
  { titre: 'Tableau de bord', chemin: '/', icone: icones.dashboard },
  { titre: 'Rapports', chemin: '/rapports', icone: icones.reports },
  { titre: 'Statistiques', chemin: '/statistiques', icone: icones.stats },
  { titre: 'Export JSON', chemin: '/export', icone: icones.export },
]

export default function MiseEnPage() {
  return <div className="app-shell"><aside className="sidebar"><div className="brand"><span className="brand-mark"><Activity size={21} /></span><span>{NOM_APPLICATION}<span className="block text-xs font-normal tracking-normal muted">Suivi de stage</span></span></div><nav className="nav-list">{liens.map(({ titre, chemin, icone: Icone }) => <NavLink key={chemin} to={chemin} end={chemin === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Icone size={18} />{titre}</NavLink>)}</nav><div className="mt-auto px-3 text-xs muted">Équipe dev · Abk S</div></aside><div className="app-main"><header className="topbar"><div><div className="text-sm muted">Espace de suivi</div><div className="font-semibold">Rapport de stage professionnel</div></div><div className="rounded-full border px-3 py-2 text-xs" style={{ borderColor: 'var(--bordure)', color: 'var(--texte-secondaire)' }}>Sans authentification</div></header><main className="page-content"><Outlet /></main></div></div>
}
