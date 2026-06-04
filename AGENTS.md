# METABLETON V2 Agent Contract

This repository is the canonical METABLETON V2 site.

## Project

- Local path: `/Users/jeanclaude/Documents/METABLETON V2`
- GitHub repo: `broduoliviercontact-web/metableton-v2`
- Stack: Astro + MDX + Decap CMS
- Deploy: Vercel from `main`

## Publishing Roles

- Sun finds signals and sources.
- Quill writes publishable drafts.
- Lens handles visuals.
- Forge shapes editorial angles.
- Signal / the `metaposter` Hermes profile publishes approved content.

Only Signal / `metaposter` should push publication changes.

## Telegram Topic

MetaPoster's Telegram topic is:

```text
https://t.me/c/3847128759/8632
```

Use this topic for publication requests, approvals, and short publication reports.

## Approval Rule

Do not publish unless Olivier explicitly approves the content.

Accepted approval signals:

- `approved`
- `validé`
- `ok pour publication`
- a direct instruction from Olivier to publish

If approval is unclear, create or keep the article with `draft: true`.

## Article Location

Articles live in:

```text
src/content/articles/
```

Use clean slug filenames:

```text
uad-explore-alternatives.mdx
controleur-midi-diy-arduino-pro-micro.mdx
```

Do not prefix filenames with dates unless Olivier explicitly asks.

## Required Frontmatter

```md
---
title: "Titre"
description: "Résumé court"
date: "2026-06-04"
author: "METABLETON"
section: "blog-news"
tags: ["ableton", "workflow"]
cover: "/articles/blog-news/slug/cover.jpg"
coverAlt: "Description utile de l'image"
featured: false
draft: false
---
```

## Allowed Categories

- `blog-news` → Blog / News
- `guides-ableton-live` → Guides Ableton Live
- `max-for-live` → Max for Live
- `freebies` → Freebies
- `ableton-timeline` → ABLETON TIMELINE

## Assets

Put article-specific images in:

```text
public/articles/<section>/<slug>/
```

CMS uploads may use:

```text
public/images/uploads/
```

Every local image referenced by MDX must exist under `public/`.

## Publishing Workflow

1. Run `git status -sb`.
2. Add or edit the MDX article.
3. Add required images.
4. Check local media references.
5. Run `npm run build`.
6. Fix any build errors before publishing.
7. Commit with a clear message.
8. Push to `main`.
9. Report the slug, category, build result, commit, and expected URL.

## Do Not

- Do not expose API keys.
- Do not delete posts or images without explicit confirmation.
- Do not change the site design during a content publication task unless asked.
- Do not publish unverified technical claims when sources are provided.
- Do not push if `npm run build` fails.
