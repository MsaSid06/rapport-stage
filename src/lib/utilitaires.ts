export function classes(...valeurs: Array<string | false | null | undefined>): string {
  return valeurs.filter(Boolean).join(' ')
}
