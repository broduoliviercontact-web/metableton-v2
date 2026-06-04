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

Before publishing, Hermès must run:

```bash
npm run build
```

The build must pass before any push to `main`.
