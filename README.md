# Portafolio — Mario Aguilar Real

Personal portfolio site. Bilingual (ES/EN), light/dark theme, built as a
single-page React app.

**Stack:** React 18 · TypeScript · Vite · SCSS

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc) + production build → dist/
npm run preview    # serve the built dist/ locally
```

## Project structure

```
├── index.html                # Vite entry (fonts, meta, favicon)
├── public/
│   ├── favicon.svg
│   └── assets/mario.jpg       # portrait (served at /assets/mario.jpg)
├── src/
│   ├── main.tsx               # React root
│   ├── App.tsx                # page composition
│   ├── AppContext.tsx         # language + theme state (persisted to localStorage)
│   ├── i18n.ts                # all copy (ES/EN) + project/skill data
│   ├── components/            # Nav, Hero, Projects, Experience, About, Skills, Contact, Footer
│   │   ├── Reveal.tsx         # scroll-in animation wrapper
│   │   └── ImageSlot.tsx      # fillable project-screenshot slot
│   └── styles/                # SCSS: _tokens, _base, _components, main
└── vite.config.ts
```

### Editing content

All text and data live in [`src/i18n.ts`](src/i18n.ts) — translations for both
languages, the three projects, work history, and skill groups. No JSX changes
needed to update copy.

### Adding permanent project screenshots

The project cards use `<ImageSlot>`, which currently shows a placeholder you can
click/drag an image onto (preview only, per session). To ship a real screenshot:

1. Drop the image in `public/assets/` (e.g. `public/assets/pos.png`).
2. In [`src/components/Projects.tsx`](src/components/Projects.tsx), pass it to the
   slot: `<ImageSlot ... src="/assets/pos.png" />`.

## Push to GitHub

This folder is already a git repo with an initial commit. Create an empty repo on
GitHub (no README/license), then:

```bash
git remote add origin git@github.com:MarioAguilarReal/<repo-name>.git
git branch -M main
git push -u origin main
```

## Deploying to Cloudflare Pages (Git integration)

1. Push this repo to GitHub (above).
2. In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository. Set the build configuration:
   | Setting | Value |
   | --- | --- |
   | **Framework preset** | `Vite` (or `None`) |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | **Node version** | 18 or higher (set env var `NODE_VERSION=20` if needed) |
4. **Save and Deploy.** Every push to the production branch redeploys automatically.

### Custom domain

Cloudflare Pages → your project → **Custom domains → Set up a domain** → enter
your domain. If the domain's DNS is already on Cloudflare, the records are added
for you; otherwise follow the prompted CNAME/A records. HTTPS is automatic.

## Notes

- The contact form opens the visitor's email client via `mailto:`. To collect
  submissions server-side instead, wire the form to a service like Formspree or a
  Cloudflare Pages Function.
- Theme and language preferences persist in `localStorage`; the first visit
  follows the browser language and defaults to dark.
