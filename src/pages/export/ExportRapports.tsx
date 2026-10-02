import { useState } from "react";
import { Download, FileJson } from "lucide-react";
import { utiliserRapports } from "../../hooks/utiliserRapports";
import {
  preparerExport,
  telechargerJson,
} from "../../utilitaires/exporterJson";
import IndicateurChargement from "../../composants/interface/IndicateurChargement";
import EtatErreur from "../../composants/interface/EtatErreur";
import { EQUIPE, ENCADRANT } from "../../constantes/application";
export default function ExportRapports() {
  const { rapports, chargement, erreur, actualiser } = utiliserRapports();
  const [message, setMessage] = useState("");
  if (chargement) return <IndicateurChargement />;
  if (erreur)
    return <EtatErreur message={erreur} reessayer={() => void actualiser()} />;
  function exporterTout() {
    telechargerJson(
      preparerExport(rapports),
      `rapports-stage-${new Date().toISOString().slice(0, 10)}.json`,
    );
    setMessage(`${rapports.length} rapport(s) exporté(s).`);
  }
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Export des données
        </h1>
        <p className="mt-2 text-sm muted">
          Téléchargez une copie de vos rapports au format JSON.
        </p>
      </div>
      <section className="panel p-7">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
          <FileJson size={24} />
        </div>
        <h2 className="text-xl font-semibold">Exporter tous les rapports</h2>
        <p className="mt-2 text-sm leading-6 muted">
          Le fichier contient les {rapports.length} rapports enregistrés ainsi
          que les champs fixes de l’équipe et de l’encadrant.
        </p>
        <div className="my-5 grid gap-3 sm:grid-cols-2">
          <div
            className="rounded-xl p-4"
            style={{ background: "var(--surface-2)" }}
          >
            <p className="text-xs muted">Équipe</p>
            <p className="mt-1 font-medium">{EQUIPE}</p>
          </div>
          <div
            className="rounded-xl p-4"
            style={{ background: "var(--surface-2)" }}
          >
            <p className="text-xs muted">Encadrant</p>
            <p className="mt-1 font-medium">{ENCADRANT}</p>
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={exporterTout}
          disabled={!rapports.length}
        >
          <Download size={17} />
          Télécharger le JSON
        </button>
        {message && <p className="mt-3 text-sm text-emerald-300">{message}</p>}
      </section>
      <p className="text-xs muted">
        Aucun import de fichier n’est proposé. Conservez le fichier exporté dans
        un emplacement sûr.
      </p>
    </div>
  );
}
