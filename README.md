# Daniel Grita — Portfolio

Personal portfolio site for Daniel Grita, visual artist and graphic designer based in Barcelona.

Built with **Astro 6**, deployed to **Vercel**.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |

## Stack

- Astro 6 with strict TypeScript
- Plain CSS with design tokens (no Tailwind, no UI framework)
- Fonts: Nippo (display) + Quantico (body)
- Deployed via `@astrojs/vercel`

## Key files

| File | What it is |
|------|------------|
| `src/data/work.ts` | All portfolio entries (work history + projects) |
| `src/styles/global.css` | Design tokens, typography, layout, animations |
| `src/layouts/Layout.astro` | Shared page layout, dark mode bootstrap |
| `src/pages/index.astro` | Main portfolio page |
| `src/pages/work/[slug].astro` | Individual project pages |
| `src/pages/design-system.astro` | Living design system reference (`/design-system`) |
| `CLAUDE.md` | AI assistant context — read this to understand the codebase |
| `FIGMA-CONTEXT.md` | Design system reference for Figma work |

## Design system

All tokens, typography, and components are documented at `/design-system` when running locally.
For Figma and brand work, read `FIGMA-CONTEXT.md` first.
