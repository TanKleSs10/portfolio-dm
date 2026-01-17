# Content map and current rendering

## Where content lives today

- Core content and localization: `src/content/index.ts`, `src/content/types.ts`
- Sections content:
  - Hero: `src/content/sections/hero.ts`
  - Value + qualification: `src/content/sections/value.ts`
  - Services: `src/content/sections/services.ts`
  - Offers: `src/content/sections/offers.ts`
  - Mini-cases: `src/content/sections/cases.ts`
  - Process: `src/content/sections/process.ts`
  - Final CTA: `src/content/sections/finalCta.ts`
- Section order: `src/content/sections/sectionOrder.ts`
- Contact form labels: `src/content/contactForm.ts`
- SEO metadata: `src/content/seo.ts`

## How it renders

- `src/app/[locale]/page.tsx` iterates `sectionOrder` and renders each section.
- Components used per section live in `src/components/landing/*`.
- Sidebar hero copy is read from `getLandingContent(locale)` in `src/content/index.ts`.

## Notes

- All copy is centralized under `src/content`.
- No CMS/Strapi dependency in the render path.
