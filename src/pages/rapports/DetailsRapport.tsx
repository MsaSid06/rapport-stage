import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";
import { utiliserRapport } from "../../hooks/utiliserRapport";
import IndicateurChargement from "../../composants/interface/IndicateurChargement";
import EtatErreur from "../../composants/interface/EtatErreur";
import Details from "../../composants/rapports/DetailsRapport";
import SuppressionRapport from "../../composants/rapports/SuppressionRapport";
export default function DetailsRapportPage() {
  const { id } = useParams();
  const { rapport, chargement, erreur } = utiliserRapport(Number(id));
  if (chargement) return <IndicateurChargement />;
  if (erreur || !rapport)
    return <EtatErreur message={erreur || "Rapport introuvable."} />;
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/rapports"
          className="inline-flex items-center gap-2 text-sm muted"
        >
          <ArrowLeft size={16} />
          Tous les rapports
        </Link>
        <div className="flex gap-2">
          <Link
            className="btn btn-secondary"
            to={`/rapports/${rapport.id}/modifier`}
          >
            <Pencil size={16} />
            Modifier
          </Link>
          <SuppressionRapport id={rapport.id} />
        </div>
      </div>
      <Details rapport={rapport} />
    </div>
  );
}
