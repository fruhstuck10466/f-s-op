# Faholo Chemicals Website — Code Audit

Scope: full `src/` tree, Gatsby config, and `package.json`, as of the current `main` branch. No files were changed to produce this document. Every item below is a **suggestion**, not a required fix — the existing file-per-component styled-components structure and the framer-motion `hidden`/`show` variant pattern are treated as the standard to build on, per `CLAUDE.md`.

Each finding carries **Impact** (how much it matters if left alone) and **Effort** (how big the change is) so you can pick off the high-impact/low-effort ones first without committing to a rewrite.

---

## 1. Architecture map

```
gatsby-config.js            site metadata, plugin list (GA, manifest, sharp, styled-components, react-helmet)
gatsby-browser/ssr.js       empty stubs — no custom Node APIs, no programmatic pages
gatsby-node.js              onPostBuild step generates image-sitemap.xml from the built /products HTML

src/pages/*.js            file-system routed: index, products, about, contact, stockists, 404
  → every page = <Layout><Seo/>{content}<Footer/></Layout>, wrapped a second time in its own <AnimatePresence>

src/components/layout.js  Header + slide-out Menu + createGlobalStyle (fonts, resets, h1–h6/p/a rules) + framer-motion fade wrapper
src/components/header.js  top bar + logo + inline nav links (hidden below 992px) + WhatsApp CTA + hamburger
src/components/menu.js    full-screen slide-out nav, staggered framer-motion list
src/components/footer.js  sitemap links, socials, disclaimer, copyright
src/components/seo.js     react-helmet wrapper, one useStaticQuery against siteMetadata

src/components/homePage/  hero, faq (accordion), homeProducts (react-slick carousel, the ONE place using
                           gatsby-image + GraphQL childImageSharp.fluid), homeAbout, homeSteps, reviews
                           — composed together in src/pages/index.js

src/pages/products.js     the entire catalogue: 49 product objects (id/title/image/items) hardcoded in one
                           array, 49 raw `import Img from "/src/assets/images/products/*.jpg"` statements,
                           rendered as an accordion (open state = index.js-style useState, not per-item)

src/styles/*.js            one styled-components file per component/page; globalStyles.js holds the
                            colorPalette/breakpoints tokens consumed everywhere via max-width media queries
src/fonts/                 index.js exports Figtree + Mulish .ttf for use in layout.js's createGlobalStyle;
                          
```

Everything is static — no CMS, no server data, single environment variable (`GA_ID`). The only GraphQL-driven, Gatsby-image-pipeline content in the whole site is the 7-slide category carousel on the homepage; all other imagery (hero, about, footer, all 49 product photos) is a plain webpack static import rendered through `<img>`. That one asymmetry is the root cause behind most of the performance findings in §3.

---

## 2. Divergence from current React/Gatsby best practice

**2.1 — `gatsby-image` (pre-v3 API) instead of `gatsby-plugin-image`**
`src/components/homePage/homeProducts.js:2,46-100,188-234` uses the deprecated `gatsby-image` package with `childImageSharp.fluid` GraphQL fields. Gatsby has recommended `gatsby-plugin-image` (`GatsbyImage`/`getImage`, `gatsbyImageData`) since Gatsby 3; `gatsby-image` still runs on Gatsby 5 but receives no updates and isn't how any current Gatsby doc or starter does it.
*Impact: Medium (only affects 7 homepage images) · Effort: Medium (swap dependency, rewrite one query + one component).*

**2.2 — `SEO.defaultProps` on a function component** — ✅ **Done** (`seo.js` now uses default parameter values on the destructured props instead; `defaultProps` block removed)
`src/components/seo.js:93-98` sets `defaultProps` on a function component. React deprecated this pattern for function components (warns as of 18.3, unsupported in React 19) in favor of default parameter values. Not urgent on React 18.2, but it'll block a clean upgrade later.
*Impact: Low today, blocks future React upgrade · Effort: Low (default params on the destructured props).*

**2.3 — Module-scope side effect for smooth-scroll**
`src/components/layout.js:153-156` calls `require("smooth-scroll")('a[href*="#"]')` directly at module load, guarded only by `typeof window`. It scans the DOM once at first import and won't rebind for anchors that appear after Gatsby's client-side navigation. Its only in-repo target, `hero.js:125` (`<Link to="/#prod-div">`), is currently commented out — so today this runs and does nothing.
*Impact: Low · Effort: Low — move into a `useEffect` if/when the anchor-scroll CTA comes back, otherwise drop the call.*

**2.4 — Repeated animation-variant boilerplate**
Near-identical `headParentAnime` / `headSingleAnime` / `transition` objects are redefined inline in `products.js`, `about.js`, `contact.js`, `stockists.js`, `faq.js`, `homeProducts.js`, `homeSteps.js`, `hero.js` (8 copies of essentially the same three objects). Pulling them into one shared module (e.g. `src/styles/motionVariants.js`) keeps the exact same `hidden`/`show` pattern the codebase already uses — this is a move, not a redesign.
*Impact: Low (maintainability only) · Effort: Low.*

**2.5 — `key={index}` instead of the stable id already on hand** — ✅ **Done** (`products.js`'s `categoriesAndList.map` and `faq.js`'s `faqList.map` now key by `details.id`; `reviews.js` and `products.js`'s inner `details.items.map` correctly left on index since neither has a stable id)
`products.js:659` (`categoriesAndList.map`) and `faq.js:158` (`faqList.map`) key by array index even though each item already has a unique `id` field. Reviews (`reviews.js:20`) has no id at all so index is reasonable there. Since these arrays are static and never reorder, there's no live bug — it's just inconsistent with the id fields that already exist.
*Impact: Low (no correctness issue today) · Effort: Trivial.*

---

## 3. Performance concerns

**3.1 — Unoptimized 1.5MB hero image is the page's LCP element** — ✅ **Done** (hero PNG recompressed)
`src/components/homePage/hero.js:14,108` statically imports `src/assets/images/nding.png` (1.5MB) and renders it with a plain `<motion.img>` — no resizing, no compression, no responsive `srcset`. This is above-the-fold on the homepage, i.e. it's very likely the page's Largest Contentful Paint element.
*Impact: High · Effort: Low–Medium — re-export a compressed/resized PNG or JPG as a quick win; routing it through the sharp pipeline (§2.1 style) is the fuller fix.*

**3.2 — All 49 product photos bypass Gatsby's image pipeline** — ✅ **Partially done** (added `loading="lazy"` to the accordion's `<img>`; the fuller `gatsby-plugin-image` migration below is still open)
`products.js:6-54` statically imports every catalogue photo and renders it raw (`products.js:703`) — full original resolution, no responsive sizes, no modern format, only whatever lazy-loading the bare `<img>` gets by default. Only one image is visible at a time (the open accordion row), so the page ships a lot of image weight relative to what's shown per view.
*Impact: High for mobile users · Effort: Medium — `loading="lazy"` on the `<img>` (`products.js:703`) is a one-line, zero-risk start; moving to `gatsby-plugin-image` is the bigger, optional follow-up.*

**3.3 — Missing width/height on raster images → layout shift**
`products.js:703`, the hero `<motion.img>` (`hero.js:108`), `homeAbout.js:95`, and `reviews.js:23` have no explicit width/height or aspect-ratio, so the browser can't reserve space before the image loads. Each of these already sits inside a size-constrained styled wrapper, so adding intrinsic dimensions (or `aspect-ratio` in the existing style files) won't change how anything looks.
*Impact: Medium (CLS) · Effort: Low.*

**3.4 — `background-attachment: fixed` on the About page**
`src/styles/aboutStyles.js:106-108` (`IntroAboutImage`, backing `team-image.jpg`) uses fixed background attachment, a known scroll-jank source — it forces a repaint on every scroll frame and isn't reliably supported on iOS Safari.
*Impact: Medium (mobile scroll smoothness) · Effort: Low — switch to `scroll`, or replace with a transform-based parallax if the effect matters.*

**3.5 — Doubled `AnimatePresence` per route**
`layout.js:181-182` already wraps every page in `<AnimatePresence><GlobalStyle/><motion.div>…`. Every page component additionally wraps its own `<Layout>` in a second `<AnimatePresence>` (e.g. `products.js:616-617`, `about.js:47-48`, `contact.js:42-43`). Nesting two `AnimatePresence` boundaries around the same tree does no useful work and can make exit animations behave inconsistently.
*Impact: Low–Medium · Effort: Low — drop the per-page `<AnimatePresence>` since `Layout` already supplies one; visual output is unchanged since nothing currently exits/unmounts a page-level child that needs the extra boundary.*

**3.6 — Dead weight bytes shipped to `gatsby-source-filesystem`** - ✅ **Done** 
`product-group.png` (1.5MB), `oll.jpg` (280KB) and `hcc.jpg` (2.6MB) — 4.4MB combined — sit in `src/assets/images` unreferenced anywhere in `src/` (see §5.3) but are still picked up by the image source plugin.
*Impact: Low (repo/build hygiene, not a shipped-bytes problem since nothing imports them) · Effort: Trivial.*

---

## 4. Accessibility & SEO gaps

**4.1 — Accordions and the hamburger menu are unreachable by keyboard** — ✅ **Done** (added `role="button"`, `tabIndex`, `onKeyDown` Enter/Space handling, `aria-expanded`/`aria-controls`/`aria-label`, and a `:focus-visible` outline to `CategoriesHeader`, `FaqHeader`, `HamburgerMenu`, and `CloseMenu`)
- `products.js:680-683` (`CategoriesHeader`) — the entire product catalogue's expand/collapse
- `faq.js:177-178` (`FaqHeader`) — the FAQ accordion
- `header.js:48-49` (`HamburgerMenu`) — the only way to open site navigation on screens under 992px
- `menu.js:46` (`CloseMenu`) — the only way to close it

All four are `styled.div`s with `onClick` only: no `tabIndex`, no `role="button"`, no `onKeyDown`, no `aria-expanded` reflecting open/closed state. A keyboard or screen-reader user cannot open the mobile nav menu, browse the catalogue, or use the FAQ at all.
*Impact: High — this blocks core navigation and the entire product catalogue for keyboard/AT users · Effort: Low — add `role="button" tabIndex={0]` + an `onKeyDown` (Enter/Space) handler + `aria-expanded`; purely additive, no visual change.*

**4.2 — Multiple simultaneous `<h1>` elements**
`menu.js:98,109,120` renders `<h1>Our Products</h1>`, `<h1>About us</h1>`, `<h1>Contact us</h1>` — chosen for the existing 3vw `h1` styling in `layout.js`'s global stylesheet, not for semantic meaning. When the menu is opened on any page, that page now has its own content `<h1>` plus these three simultaneously. `about.js:139` similarly reuses `<h1>` for a mid-page "Company strategy" heading that isn't the page's main heading.
*Impact: Medium for accessibility (confusing heading-navigation for screen-reader users who open the menu), Low for SEO (crawlers see the closed-menu DOM) · Effort: Low — swap to a non-heading tag (`<p>`/`<span>`) and let the existing per-component style file keep the same visual size, matching the "styled-components, no inline styles" rule.*

**4.3 — `<h3>` used for body copy, not headings**
FAQ answers (`faq.js:195`) and every product's usage bullet points (`products.js:706-710`, ×49 entries × several bullets each) wrap plain paragraph/list text in `<h3>`, apparently to reuse the 16px `h3` styling from the global stylesheet (`layout.js:84-92`) rather than for semantic level. This flattens the page's heading outline for screen readers and dilutes the actual heading signal search engines use.
*Impact: Medium · Effort: Medium — needs a non-heading element carrying the same visual style (e.g. a `<p>` inside the existing `ProductUsage`/`FaqAnswer` styled wrapper); contained to those two render loops, not a sitewide change.*

**4.4 — No absolute URL for `og:image`/`twitter:image`** — ✅ **Done** (`seo.js` now imports the social image directly, like `footer.js` already does, so it resolves through webpack to the real hashed public path, then prefixes it with `siteUrl`; the stale `siteMetadata.image` source-path string in `gatsby-config.js` — which pointed at neither a real relative nor absolute URL — was removed)
`gatsby-config.js:12` sets `siteMetadata.image` to the relative path `src/assets/images/faholo-team-social.jpg`. `seo.js:65-67,73-75` passes that straight into `og:image`/`twitter:image`. Social platforms (including WhatsApp, which this business leans on heavily for its CTAs) require an absolute URL to render a link preview card — a relative path here means shared links likely show no preview image at all.
*Impact: Medium (broken share-preview cards on the channel this business actually uses) · Effort: Low — prefix with `siteUrl` in `seo.js`, or store the absolute URL directly in `siteMetadata`.*

**4.5 — No sitemap or robots.txt plugin** — ✅ **Done** (added `gatsby-plugin-sitemap` and `gatsby-plugin-robots-txt`; verified `public/sitemap-index.xml` and `public/robots.txt` are generated and linked)
`gatsby-config.js`'s plugin list has no `gatsby-plugin-sitemap` or `gatsby-plugin-robots-txt`. For a marketing/catalogue site whose only distribution channel is organic search, a sitemap is close to table-stakes.
*Impact: Medium–High for SEO · Effort: Low — both are drop-in config-only plugins, no content changes required.*

**4.6 — No LocalBusiness structured data** — ✅ **Done** (added a `LocalBusiness` JSON-LD block to `index.js` via the existing `jsonLd` prop on `Seo` — name, address, geo, opening hours, phone/email, `sameAs` socials, logo/image; values sourced from `contact.js`/`footer.js`/`gatsby-config.js` and confirmed before implementation)
The site already has everything a `LocalBusiness`/`Organization` JSON-LD block needs — address, phone numbers, socials, map (`contact.js`, `footer.js`) — but none is emitted. This is a well-understood, high-value local-SEO lever (map-pack ranking, rich results) that's currently left on the table.
*Impact: Medium–High for local SEO · Effort: Medium — one JSON-LD `<script>` block (in `seo.js` or `layout.js`) built from data that already exists in the codebase; not a content or design change.*

**4.7 — Minor content/link bugs found along the way**
- `header.js:42` — the WhatsApp CTA's prefilled message has a stray, invalid percent-escape: `...Chemicals%Ltd.` (missing `%20` before `Ltd`), which can render or truncate oddly when the link opens. — ✅ **Done** (fixed the encoding)
- `products.js:48-49` — `DeionizedWaterImage` and `DenaturedEthanolImage` both import the same file (`denatured-ethanol-faholo-chemicals.jpg`), so the "Deionized Water" catalogue entry (`id: 42`) shows the wrong product photo. — ✅ **Done** (fixed separately by user — Deionized Water now has its own dedicated photo)

**4.8 — Product catalogue images/content invisible to crawlers (accordion unmounted collapsed items)** — ✅ **Done** *(found and fixed outside the original audit, during a Google Images investigation)*
`products.js`'s `CategoriesAccordion` gated the entire `<ProductDetailsContainer>` (image + usage bullets) behind `{isOpen && (...)}`, so only the one open item (`id: 0` by default) ever existed in the static/SSR HTML — confirmed via `public/products/index.html`: all 49 titles present, but only 1 `<img>`. This is why only the first product ever showed up in Google Images. Fixed in three parts: (1) always render `<ProductDetailsContainer>` for all 49 items, paired with `aria-hidden={!isOpen}` on `CategoriesList` so the accessible/visual accordion behavior is unchanged (the existing `overflow:hidden` + animated `height:0` already fully hid collapsed content visually) — plus brand-prefixed alt text; (2) a `Product` `ItemList` JSON-LD block on `/products/` via a new optional `jsonLd` prop on `Seo`, with absolute image URLs; (3) an `onPostBuild` hook in `gatsby-node.js` (previously an empty stub) that generates `public/image-sitemap.xml` from that JSON-LD and appends it to `public/robots.txt`.
*Impact: High · Effort: was Low–Medium once diagnosed — see conversation history for the full diagnosis and three-batch plan.*

---

## 5. Unused code & dependencies

**5.1 — `src/fonts/fonts.css` is dead and partly broken** — ✅ **Done** (deleted)
Never imported anywhere (`layout.js` declares its own `@font-face` rules via `createGlobalStyle` instead, duplicating two of the three fonts). Its third font-face references `./font/PPMonumentWide-Regular.otf`, which doesn't exist in `src/fonts/font/` at all.
*Effort: trivial — delete the file, or if the "PP" display font was actually intended for headings, that's a product decision to raise separately.*

**5.2 — Four unreferenced SVGs** — ✅ **Done** (deleted)
`arrow-down.svg`, `arrow-right-black.svg`, `WhatsAppButtonGreenLarge.svg`, `WhatsAppButtonGreenMedium.svg` are not imported anywhere (only `arrow-right.svg` and `WhatsAppButtonGreenSmall.svg` are used).
*Effort: trivial to remove, or keep if earmarked for near-term use.*

**5.3 — Three unreferenced raster images (4.4MB)** — ✅ **Done** (deleted)
`product-group.png` (1.5MB), `oll.jpg` (280KB), `hcc.jpg` (2.6MB) — not imported anywhere in `src/`.
*Effort: trivial.*

**5.4 — Commented-out dead code left in place** — ✅ **Done** (all four deleted)
- `homeAbout.js:2,16-26,97-109` — a full commented-out `useStaticQuery`/GraphQL block and `<Img fluid=...>` usage
- `hero.js:11,13,15,78-85` — unused `DnaImage`/`ArrowRight` imports and a commented-out alternate `<motion.h1>` block
- `header.js:9` — commented-out `JumiaIcon` import
- `footer.js:77-82` — commented-out "Site by THE 12" credit block

None of this affects behavior, but it adds noise when reading these files.
*Effort: trivial cleanup — safe to delete since it's already inert; flagging in case any of it represents unfinished work you want to keep as a to-do instead.*

**5.5 — `gatsby-image` sitting alongside `gatsby-plugin-sharp`/`gatsby-transformer-sharp`**
Same underlying issue as §2.1: `gatsby-image` (the pre-`gatsby-plugin-image` package) is a direct dependency used in exactly one component. Not unused, but worth knowing it's the legacy image package next to the current-generation sharp plugins already installed.
*Effort: N/A — informational, see §2.1 for the actual suggestion.*

**5.6 — `smooth-scroll` dependency is currently a no-op**
Its only in-repo target usage is commented out (`hero.js:125`), so right now it loads on every page and does nothing (see §2.3).
*Effort: trivial either way — keep if the anchor-scroll CTA is coming back soon, otherwise it's ~5KB of dead runtime code per page load.*

---

## Suggested first pass

If picking a small, safe batch to start with, the best impact-for-effort ratio is:
1. ✅ Keyboard/`aria-expanded` support on the two accordions + hamburger + close button (§4.1) — highest impact, additive only.
2. ✅ Recompress the hero PNG (§3.1) and add `loading="lazy"` to the product image (§3.2).
3. ✅ Absolute `og:image` URL (§4.4) + add `gatsby-plugin-sitemap`/`robots-txt` (§4.5).
4. ✅ Delete the confirmed-dead files (§5.1–5.3) and fix the two content bugs (§4.7).

All four items in the original "Suggested first pass" are now done. Everything else (image-pipeline migration, heading-semantics pass, structured data, remaining best-practice/performance items) is worth doing but bigger — good candidates for a dedicated pass, to be worked through the same way (one batch at a time, plan → approval → diff → build → confirm).
