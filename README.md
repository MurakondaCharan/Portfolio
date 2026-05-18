Murakonda Charan Tej — Portfolio

This repository contains a premium dark themed portfolio built with React, Tailwind CSS and Framer Motion.

Quick local

1. Install dependencies

```
npm install
```

2. Run dev server

```
npm run dev
```

Build

```
npm run build
```

Deploy options

- Vercel (recommended):
  - Install CLI: `npm i -g vercel`
  - From project root run:

```
vercel --prod
```

- Netlify (CLI):
  - Install CLI: `npm i -g netlify-cli`
  - Deploy the `dist` folder:

```
netlify deploy --dir=dist --prod
```

- GitHub Pages via GitHub Actions:
  1. Push this repo to GitHub (branch `main`).
  2. The included GitHub Actions workflow will build and deploy to the `gh-pages` branch automatically.

Notes

- The repository already includes `vercel.json`, `netlify.toml`, and a GitHub Actions workflow under `.github/workflows/deploy.yml` so CI/CD works once pushed.
- If you want me to run a live deploy from this environment, tell me which provider (Vercel / Netlify) and provide CLI login (or authorize) — or push to a GitHub repo and I can trigger the GitHub Actions.

Deployment (Live)

- Production (Vercel): https://charan-hz2dg3uwt-murakondacharans-projects.vercel.app
- Alias: https://charan-gamma.vercel.app

Automatic deploys are enabled: pushing to `main` triggers Vercel builds.
