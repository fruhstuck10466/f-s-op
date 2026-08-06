# CLAUDE.md

Guidance for Claude Code working in this repo.

## Working style

Default to explaining your plan and waiting for approval before editing. Refactors must preserve existing behavior and rendered output. Run `npm run format` before completing changes; use `npm run build` to verify — there are no tests.

## What this is

Marketing/catalogue website for Faholo Chemicals (chemical manufacturer & distributor, Nairobi, Kenya). Gatsby 5, static, no CMS/backend — all content (including the product catalogue) is hardcoded in JS.

## Commands

```bash
npm run develop   # dev server → http://localhost:8000
npm run build     # production build; use this to verify changes (no test suite)
npm run serve     # serve the production build
npm run clean     # wipe .cache/public — fixes stale-build / GraphQL schema errors
npm run format    # prettier across js/jsx/ts/tsx/json/md
```

No test suite (`npm test` exits 1) and no lint script. Env vars live in `.env.development` / `.env.production` (gitignored, present locally), loaded in `gatsby-config.js`; only `GA_ID` is currently used.

## Architecture

Facts Claude can't guess — see the named files for the pattern to follow.

**Routing**: `src/pages/*.js` are file-system routed (`index.js` → `/`). `gatsby-node.js`, `gatsby-browser.js`, `gatsby-ssr.js` are empty default stubs — no custom node APIs or programmatic pages.

**Page shape**: every page = `<Layout>` (`src/components/layout.js`; renders `<Header>`, slide-out `<Menu>`, the global styled-components stylesheet, and a framer-motion fade) + its own `<Seo>` (`src/components/seo.js`) + content + `<Footer>`. New pages follow this shape.

**Styling**: styled-components only, never inline styles. One style file per component in `src/styles/` (e.g. `headerStyles.js` ↔ `components/header.js`). Tokens (`colorPalette`, `breakpoints`) live in `src/styles/globalStyles.js`. Media queries are `max-width` against `breakpoints.{xs,s,m,l,xl}` (320/576/768/992/1200) — use max-width, not min-width.

**Fonts**: registered via `@font-face` in the `GlobalStyle` block in `layout.js`. To add one: drop the file in `src/fonts/font/`, export it from `src/fonts/index.js`, add a `@font-face` block in `layout.js`.

**Product catalogue**: the entire catalogue is one hardcoded `categoriesAndList` array in `src/pages/products.js` (per product: `id`, `title`, `image`, `items`), rendered as an accordion. Edit that array to add/edit/remove products. Keep `id` unique and sequential — it drives accordion expand/collapse state. No data file / CMS / GraphQL.

**Homepage**: `src/pages/index.js` composes section components from `src/components/homePage/` (`hero`, `faq`, `homeAbout`, `homeProducts`, `homeSteps`, `reviews`). Add/reorder sections here, not in the section components.

**Animation**: framer-motion site-wide. Follow the existing `hidden` / `show` variants pattern (see `products.js`), not inline animate-only props.

**Gotcha**: the WhatsApp `wa.me` deep link is duplicated in `header.js` and other CTAs — update all of them if the number or message changes.
