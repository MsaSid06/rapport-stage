import { supabase } from "../supabase/client";
import type { Rapport, RapportSaisie } from "../../types/rapport";

const TABLE = "rapports";

// function verifierConfiguration() {
//   if (!supabaseEstConfigure)
//     throw new Error(
//       "Supabase n’est pas configuré. Renseignez les variables VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans le fichier .env.",
//     );
// }

export async function obtenirRapports(): Promise<Rapport[]> {
  // verifierConfiguration();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("date", { ascending: false })
    .order("jour_stage", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Rapport[];
}

export async function obtenirRapport(id: number): Promise<Rapport> {
  // verifierConfiguration();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Rapport;
}

export async function creerRapport(rapport: RapportSaisie): Promise<Rapport> {
  // verifierConfiguration();
  const { data, error } = await supabase
    .from(TABLE)
    .insert(rapport)
    .select()
    .single();
  if (error) throw error;
  return data as Rapport;
}

export async function modifierRapport(
  id: number,
  rapport: RapportSaisie,
): Promise<Rapport> {
  // verifierConfiguration();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ ...rapport, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as Rapport;
}

export async function supprimerRapport(id: number): Promise<void> {
  // verifierConfiguration();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}
