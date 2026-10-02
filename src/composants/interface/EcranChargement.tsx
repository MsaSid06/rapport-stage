import { Activity } from "lucide-react";
export default function EcranChargement() {
  return (
    <div
      className="grid min-h-screen place-items-center"
      style={{ background: "var(--fond)" }}
    >
      <div className="text-center">
        <div className="brand-mark mx-auto mb-5">
          <Activity size={26} />
        </div>
        <h1 className="text-2xl font-bold">Rapport</h1>
        <p className="mt-2 text-sm muted">Préparation de votre espace…</p>
        <div
          className="mx-auto mt-6 h-1 w-40 overflow-hidden rounded-full"
          style={{ background: "var(--surface-2)" }}
        >
          <div className="h-full w-1/2 animate-pulse rounded-full bg-indigo-400" />
        </div>
      </div>
    </div>
  );
}
