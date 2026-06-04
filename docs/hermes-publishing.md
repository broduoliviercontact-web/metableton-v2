# Hermès Publication Guide

Use the dedicated profile:

```bash
metaposter chat
```

Useful one-shot pattern:

```bash
metaposter -z "Publie ce brief approved sur METABLETON V2 ..."
```

The profile is configured with:

- cwd: `/Users/jeanclaude/Documents/METABLETON V2`
- repo: `broduoliviercontact-web/metableton-v2`
- role: publication only
- Telegram topic: `https://t.me/c/3847128759/8632`

Forge should route approved `blog-first` content to MetaPoster:

```text
Sun -> Forge -> Quill -> Lens -> MetaPoster
```

Signal remains the handoff for social distribution, scheduling, and reporting after the blog post exists.

Before publishing, Hermès must run:

```bash
npm run build
```

The build must pass before any push to `main`.
