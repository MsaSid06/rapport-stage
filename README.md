# Rapport — Gestion des rapports de stage

Application React + TypeScript + Vite, Tailwind CSS v4 et Supabase. L'interface ne comporte pas d'authentification.

## 1. Installation

```bash
npm install
npm install tailwindcss @tailwindcss/vite
```

Copiez `.env.example` vers `.env` et renseignez l'URL du projet Supabase et la clé publique `anon`.

## 2. Préparer Supabase

Dans Supabase, ouvrez **SQL Editor**, puis exécutez `supabase/schema.sql`. Le fichier `supabase/donnees-exemple.sql` ajoute un exemple facultatif.

**Sécurité :** sans authentification, toute personne ayant accès à l'application peut consulter, créer, modifier et supprimer les rapports. Les politiques SQL ci-dessus ouvrent volontairement ces opérations au rôle `anon`. N'y stockez pas d'informations confidentielles. Pour une application exposée publiquement, il est recommandé d'ajouter une authentification et des politiques plus restrictives.

## 3. Démarrer

```bash
npm run dev
```

## 4. Construire pour Netlify

```bash
npm run build
```

Netlify utilise `netlify.toml` : commande `npm run build`, dossier de publication `dist`.

## Fonctionnalités

- Tableau de bord et rapports récents
- Création, consultation, modification et suppression de rapports
- Recherche et filtre par date
- Statistiques générales et évolution mensuelle
- Export JSON, avec `equipe: "équipe dev"` et `encadrant: "Abk S"`
- Équipe et encadrant fixes, non éditables dans le formulaire
