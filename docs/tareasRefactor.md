# Tareas por fase del refactor

## Fase 1 - Estabilizacion tecnica

Breve: corrige inconsistencias que pueden romper el build y deja una base estable para refactor.

- [x] Unificar el layout de App Router para evitar duplicidad de `<html>/<body>`.
- [x] Unificar libreria de animaciones y dependencias.
- [x] Corregir clases CSS inexistentes en componentes.
- [x] Alinear `README.md` con la estructura real del proyecto.
- [x] Corregir typos en nombres de archivos clave.

## Fase 2 - Desacoplar contenido del UI

Breve: separa contenido de presentacion para facilitar migracion a CMS.

- [x] Definir modelos de contenido para About, Skills, Projects y Contact.
- [x] Crear `src/content/` con data local de fallback.
- [x] Migrar el copy de `src/lang/sections.tsx` a la capa de contenido.
- [x] Migrar los proyectos de `src/components/projects/projects.ts` a `src/content/`.
- [x] Ajustar componentes para consumir props tipadas desde la capa de contenido.

## Fase 3 - Capa CMS agnostica

Breve: habilita el consumo de datos desde CMS sin acoplar la UI.

- [x] Crear interfaces de dominio (tipos centrales) para contenido.
- [x] Implementar `src/lib/cms/strapiAdapter.ts`.
- [x] Implementar selector de fuente (CMS vs fallback local).
- [ ] Agregar validaciones basicas para respuestas del CMS.

## Fase 4 - Integracion Strapi

Breve: conecta Strapi con mapeos y manejo de estados.

- [ ] Documentar endpoints necesarios y contratos de datos.
- [ ] Mapear responses de Strapi al dominio interno.
- [ ] Probar consumo con data mock si Strapi no esta disponible.
- [ ] Ajustar errores y estados de carga en UI.

## Fase 5 - UX y conversion

Breve: optimiza la landing para captar leads freelance.

- [ ] Revisar copy y CTA para foco en conversion freelance.
- [ ] Ajustar SEO y metadata.
- [ ] Revisar formularios y mensajes para claridad y accion.
- [ ] Auditar performance basica en landing.
