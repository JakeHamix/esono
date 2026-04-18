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
2. **No unnecessary complexity.** Pure HTML + CSS. No JS unless absolutely required. No frameworks, no build tools.
3. **Follow the design system.** Use the colours, typography, and layout patterns defined in `docs/DESIGN.md`. Do not introduce new visual patterns without updating the design doc.
4. **Both languages.** When changing content or structure, apply the change to both `/cs/` and `/en/` versions.
5. **Shared assets only.** CSS and images go in `/assets/`. Do not duplicate stylesheets per language.
6. **Mobile-first.** Write CSS mobile-first, then add breakpoints for larger screens.
7. **Keep docs in Czech.** `docs/PRD.md`, `docs/DESIGN.md`, and `docs/ASSETS.md` are written in Czech. Keep them in Czech when updating.
8. **Test visually.** After changes, verify the site looks correct at mobile (~375px), tablet (~768px), and desktop (~1024px+) widths.
