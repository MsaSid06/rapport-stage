import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiseEnPage from "./composants/mise-en-page/MiseEnPage";
import EcranChargement from "./composants/interface/EcranChargement";
import TableauDeBord from "./pages/tableau-de-bord/TableauDeBord";
import ListeRapports from "./pages/rapports/ListeRapports";
import NouveauRapport from "./pages/rapports/NouveauRapport";
import DetailsRapport from "./pages/rapports/DetailsRapport";
import ModifierRapport from "./pages/rapports/ModifierRapport";
import Statistiques from "./pages/statistiques/Statistiques";
import ExportRapports from "./pages/export/ExportRapports";

export default function App() {
  const [pret, setPret] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setPret(true), 450);
    return () => window.clearTimeout(id);
  }, []);
  if (!pret) return <EcranChargement />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MiseEnPage />}>
          <Route index element={<TableauDeBord />} />
          <Route path="rapports" element={<ListeRapports />} />
          <Route path="rapports/nouveau" element={<NouveauRapport />} />
          <Route path="rapports/:id" element={<DetailsRapport />} />
          <Route path="rapports/:id/modifier" element={<ModifierRapport />} />
          <Route path="statistiques" element={<Statistiques />} />
          <Route path="export" element={<ExportRapports />} />
          <Route path="*" element={<TableauDeBord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
