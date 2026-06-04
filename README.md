# METABLETON V2

Nouvelle base du site/blog METABLETON.

Objectif : rendre la publication simple pour les humains et pour les agents.

## Stack

- Astro
- MDX
- Contenu versionne dans Git
- Decap CMS optionnel dans `/admin`
- Deploiement Vercel

## Lancer en local

```bash
npm install
npm run dev
```

## Publier un article

Creer un fichier `.mdx` dans `src/content/articles/`.

```md
---
title: "Titre de l'article"
description: "Resume court."
date: "2026-06-04"
author: "Hermes"
section: "blog-news"
tags: ["ableton", "agents"]
featured: false
draft: false
---

Corps de l'article.
```

## Sections disponibles

- `blog-news`
- `guides-ableton-live`
- `max-for-live`
- `freebies`
- `ableton-timeline`

## Workflow agent

1. Ajouter ou modifier un fichier MDX.
2. Ajouter les images dans `public/images/` ou `public/articles/`.
3. Lancer `npm run build`.
4. Commit + push + PR.

Le site n'a pas besoin de backend pour publier.
