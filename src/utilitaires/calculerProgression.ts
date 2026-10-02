export function calculerProgression(jourActuel: number, objectifJours = 30): number {
  if (objectifJours <= 0) return 0
  return Math.min(100, Math.round((jourActuel / objectifJours) * 100))
}
