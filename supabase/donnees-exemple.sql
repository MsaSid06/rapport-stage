-- Exemple facultatif : exécutez ce bloc après schema.sql si vous souhaitez une donnée de démonstration.
insert into public.rapports (date, jour_stage, objectif, activites, difficultes, solutions, apprentissages, bilan, demain)
values (
  current_date, 1,
  'Découverte de l’environnement de travail',
  'Prise en main du projet, découverte de l’architecture et installation des outils nécessaires.',
  'Compréhension initiale de l’organisation du code.',
  'Lecture de la documentation et exploration progressive des dossiers.',
  'Compréhension des principales technologies et de la structure du projet.',
  'Environnement de travail préparé et premières notions assimilées.',
  'Poursuivre l’exploration du projet et commencer une première tâche.'
);
