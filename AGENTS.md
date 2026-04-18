# Agent Guidelines — e-Sono

## Context
You are working on a static website for e-Sono, a Czech healthcare company (ultrasound equipment). Always read the relevant docs before making changes.

## Documentation

| Document | Purpose |
|----------|---------|
| [`docs/PRD.md`](docs/PRD.md) | Product requirements — company info, site structure, content, localisation (in Czech) |
| [`docs/DESIGN.md`](docs/DESIGN.md) | Visual identity — colours, typography, logo usage, layout, responsivity (in Czech) |
| [`docs/ASSETS.md`](docs/ASSETS.md) | Asset inventory — logo files, source materials, Canva tasks (in Czech) |

## Rules
1. **Read before you write.** Always check `docs/PRD.md` and `docs/DESIGN.md` before implementing or modifying anything.
2. **No unnecessary complexity.** HTML + Tailwind CSS (CDN). CDN-only libraries are allowed (Tailwind CSS, Lucide Icons, i18next, Google Fonts). No build tools, bundlers, or npm.
3. **Follow the design system.** Use the colours, typography, and layout patterns defined in `docs/DESIGN.md`. Do not introduce new visual patterns without updating the design doc.
4. **Both languages.** Single HTML source with Czech as static default. English loaded at runtime via i18next. Translation strings live in `assets/i18n/`. Only `cs/index.html` exists in the repo — `en/index.html` is generated at deploy time by GitHub Actions (`.github/workflows/deploy.yml`). When changing structure, edit `cs/index.html`. When changing text, update the Czech in the HTML and the English in `assets/i18n/en.json`.
5. **Shared assets only.** CSS and images go in `/assets/`. Do not duplicate stylesheets per language.
6. **Mobile-first.** Write CSS mobile-first, then add breakpoints for larger screens.
7. **Keep docs in Czech.** `docs/PRD.md`, `docs/DESIGN.md`, and `docs/ASSETS.md` are written in Czech. Keep them in Czech when updating.
8. **Test visually.** After changes, verify the site looks correct at mobile (~375px), tablet (~768px), and desktop (~1024px+) widths.
