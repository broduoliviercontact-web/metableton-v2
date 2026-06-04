# Hermès Publication Guide

Use the dedicated profile:

```bash
metableton chat
```

Useful one-shot pattern:

```bash
metableton -z "Publie ce brief approved sur METABLETON V2 ..."
```

The profile is configured with:

- cwd: `/Users/jeanclaude/Documents/METABLETON V2`
- repo: `broduoliviercontact-web/metableton-v2`
- role: publication only

Before publishing, Hermès must run:

```bash
npm run build
```

The build must pass before any push to `main`.
