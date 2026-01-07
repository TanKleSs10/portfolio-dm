# Diagnostico del proyecto

## Configuracion general
El proyecto usa Next 15 + TypeScript + Tailwind v4. La base es buena, pero hay inconsistencias que pueden impedir un build limpio o un refactor seguro.

## Hallazgos criticos y altos
- Layout duplicado (corregido en fase 1): `src/app/layout.tsx` y `src/app/[locale]/layout.tsx` renderizan `<html>/<body>`. En App Router solo el layout raiz debe hacerlo.
- Animaciones con dependencias inconsistentes (corregido en fase 1): `src/components/projects/ProjectCard.tsx` usa `framer-motion` pero no esta en `package.json`. `src/components/projects/ProjectsBody.tsx` usa `motion/react`.

## Deuda tecnica relevante
- Clases inexistentes (corregido en fase 1): `text-on-surface-light` y `text-on-surface-light-variant` se usan en `src/components/projects/ProjectCard.tsx` y `src/components/projects/ProjectTag.tsx`, pero no existen en `src/app/globals.css`.
- Documentacion desalineada (corregido en fase 1): `README.md` menciona `/pages`, `/styles`, `/data`, pero el proyecto real usa App Router.
- Prisma y Docker sin uso visible en la UI: `prisma/schema.prisma` y `docker-compose.yml` existen pero no se consumen desde la app.
- Typos de nombres afectan mantenibilidad (corregidos en fase 1): `src/lib/adapters/nodemiler.adapter.ts`, `src/actions/sendToEmailContac.action.ts`, `src/components/shared/ToastNotication.tsx`.
- Contenido hardcoded: `src/lang/sections.tsx` y `src/components/projects/projects.ts` mezclan contenido y UI, lo que dificulta migrar a CMS.
- SEO no integrado: `src/components/layout/seo.ts` no parece usado y tiene branding distinto (Quantum MD).

## Preparacion para Strapi
- Estado actual: no hay capa de datos ni modelos de contenido desacoplados; el contenido esta embebido en componentes.
- Listo para avanzar al refactor: si, pero solo despues de corregir los hallazgos criticos/altos para evitar romper el build y crear una base estable.
- Bloqueadores minimos antes de migrar:
  - Unificar libreria de animaciones y dependencias.
  - Ajustar el layout para que solo exista un `<html>/<body>`.
  - Definir capa de datos para contenidos (ej. `src/lib/cms` + types) y mover el copy a un modelo consumible.
