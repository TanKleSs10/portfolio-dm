# Plan de desarrollo y refactor

## Objetivo
Mantener una landing freelance clara y optimizada para conversion, con contenido centralizado en `src/content` y sin dependencia de CMS.

## Principios de arquitectura
- Contenido en `src/content` y UI en `src/components`.
- KISS y tipado claro, sin capas innecesarias.
- Facil de actualizar copy en un solo lugar.

## Capas actuales
- `src/content/`:
  - Contenido ES/EN y orden de secciones.
  - SEO y labels de formulario.
- `src/components/landing/`:
  - UI de las secciones de la landing.

## Roadmap corto
- Ajustes de UX y conversion segun feedback.
- Validar agenda de Google Calendar en movil.
- Mantener rate limit en memoria mientras el trafico sea bajo.
