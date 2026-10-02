export function formaterDate(date: string, options?: Intl.DateTimeFormatOptions): string {
  if (!date) return '—'
  return new Intl.DateTimeFormat('fr-FR', options ?? { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${date.slice(0, 10)}T12:00:00`))
}

export function obtenirMois(date: string): string {
  return new Intl.DateTimeFormat('fr-FR', { month: 'short', year: '2-digit' }).format(new Date(`${date.slice(0, 10)}T12:00:00`))
}
