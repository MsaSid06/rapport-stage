import type { Rapport } from '../types/rapport'
import { calculerStatistiques } from '../utilitaires/calculerStatistiques'
export function utiliserStatistiques(rapports: Rapport[]) { return calculerStatistiques(rapports) }
