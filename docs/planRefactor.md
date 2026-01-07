# Plan de desarrollo y refactor

## Objetivo
Refactorizar el proyecto para convertirlo en una landing enfocada en conseguir proyectos freelance, manteniendo una arquitectura agnostica al CMS (Strapi u otro) y con reglas claras de codigo, estilo y convenciones.

## Flujo de trabajo y ramas
- Rama principal estable: `main`.
- Rama de trabajo: `develop` (todas las tareas de refactor se hacen aqui).
- Estrategia sugerida:
  - Crear `develop` desde `main`.
  - Trabajar por features con ramas cortas: `feature/<tema>`.
  - Hacer PRs hacia `develop` con revisiones cortas y checks basicos.

## Principios de arquitectura
- CMS agnostico: el UI no debe depender de Strapi directamente.
- Separar datos de presentacion: contenido en una capa de datos y UI en componentes.
- Mantener KISS: rutas claras, minima magia, convenciones explicitas.
- Facil de migrar: poder cambiar Strapi por otro CMS sin reescribir componentes.

## Capas propuestas
- `src/lib/cms/`:
  - Adaptadores para CMS (ej. `strapi.adapter.ts`).
  - Cliente HTTP (fetch/axios) sin acoplarse al UI.
- `src/lib/content/`:
  - Modelos y mapeos de contenido al dominio UI.
- `src/content/`:
  - Fallback local (JSON/TS) para desarrollo sin CMS.
- `src/components/`:
  - UI pura, recibe props tipadas, sin fetch directo.

## Reglas de nombres y estilo
- Archivos:
  - Componentes en PascalCase (ej. `ProjectCard.tsx`).
  - Utilidades y adaptadores en camelCase (ej. `strapiAdapter.ts`).
  - Evitar typos en nombres y mantener coherencia (ej. `Notification`, `Contact`).
- Variables:
  - Prefijos claros: `isLoading`, `hasError`, `shouldRender`.
  - Evitar abreviaturas ambiguas.
- Estilo de codigo:
  - Mantener TypeScript estricto.
  - Tipos en `src/types/` o en el modulo si son locales.
  - Comentarios solo cuando el contexto no es evidente.
- CSS/Tailwind:
  - Usar tokens definidos en `globals.css`.
  - Evitar clases no definidas en el tema.

## Plan por fases

### 1. Estabilizacion tecnica
- Corregir layouts duplicados en App Router.
- Unificar libreria de animaciones y dependencias.
- Revisar clases CSS inexistentes.
- Alinear README con estructura real.

### 2. Desacoplar contenido del UI
- Mover copy de `src/lang/sections.tsx` a una capa de contenido.
- Mover proyectos de `src/components/projects/projects.ts` a `src/content/`.
- Tipar modelos de contenido para About, Skills, Projects y Contact.

### 3. Capa CMS agnostica
- Definir interfaces de datos (`IProject`, `ISection`, etc.).
- Crear adaptador para Strapi sin tocar componentes.
- Implementar un selector de fuente de datos (CMS vs fallback local).

### 4. Integracion de Strapi
- Documentar endpoints necesarios.
- Mapear responses de Strapi al dominio interno.
- Probar localmente con data mock si Strapi no esta disponible.

### 5. Ajustes de UX y conversion
- Optimizar copy y CTA para captar clientes.
- Revisar SEO y metadata.
- Validar formularios y mensajes.

## Entregables
- Refactor en `develop` con PRs por fase.
- `docs/DIAGNOSTICO.md` actualizado si surgen nuevos hallazgos.
- `docs/planRefactor.md` mantenido como guia viva.

## Criterios de finalizacion
- UI consume contenido desde una capa agnostica.
- Cambiar de CMS no requiere cambios en componentes.
- Build limpio y lint sin errores.
- Copy orientado a conversion freelance.
