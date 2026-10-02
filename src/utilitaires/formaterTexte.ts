export function tronquerTexte(texte: string | null | undefined, longueur = 140): string {
  if (!texte) return '—'
  return texte.length > longueur ? `${texte.slice(0, longueur).trim()}…` : texte
}

export function compterMots(texte: string | null | undefined): number {
  return texte?.trim() ? texte.trim().split(/\s+/).length : 0
}
