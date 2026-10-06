# varadzin.com

Personal website of František Varadzin, built with [Astro](https://astro.build) as a fully static site
(no PHP, no server) and hosted on GitHub Pages. Every push to `main` deploys automatically.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Homepage | `src/pages/index.astro` |
| App cards, subpage list, contact email | `src/data/site.ts` |
| Privacy policies and terms (HTML) | `src/content/legal/<slug>.html` |
| App landing pages (self-contained HTML) | `src/content/landing/<slug>.html` |
| Shared styles | `src/styles/site.css` |
| Images | `public/images/`, `public/wp-content/uploads/` (old WordPress paths kept) |

To add a policy page: drop the HTML into `src/content/legal/` and add an entry to `legalPages` in `src/data/site.ts`.

**Keep the slugs.** App Store Connect and Google Play link to the existing URLs
(e.g. `/privacy-policy-vitrio/`, `/vitrio/` as Vitrio's support URL). Renaming a slug breaks those listings.

The Vitrio landing page source of truth is `~/Developer/Vitrio/vitrio-landing.html`; copy it into
`src/content/landing/vitrio.html` after editing.
