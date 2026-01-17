# Diagnostico del proyecto

## Configuracion general
El proyecto es una landing freelance en Next 15 + TypeScript + Tailwind v4, con contenido centralizado en `src/content`.

## Estado actual
- UI desacoplada del contenido y sin dependencia de CMS.
- CTA principales a WhatsApp y agenda embebida via Google Calendar.
- Formulario con rate limit en memoria (MVP).

## Riesgos o tareas pendientes
- Rate limit en memoria no persiste en serverless; aceptable para MVP con trafico bajo.
- Validar agenda de Google Calendar en movil y modo incognito.
- Confirmar entrega de correos en entorno de produccion (SMTP y `MAIL_USER`).
