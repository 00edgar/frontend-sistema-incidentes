# Flujo de trabajo con Git

- Ramas: `main` (estable), `develop` (integracion) y ramas de trabajo.
- Nombres de rama: `feature/<historia>-<descripcion>`, `fix/<descripcion>`, `integracion/<descripcion>`.
  Ejemplo: `feature/1-9-api-incidentes`.
- Commits pequenos y claros, varios por dia por persona (Dev1, Dev2 y Dev3).
- Todo cambio entra por Pull Request con la plantilla de `.github/pull_request_template.md`.
- Revision cruzada diaria: Dev1 revisa a Dev3, Dev2 revisa a Dev1, Dev3 revisa a Dev2.
- Cierre de cada dia: merge a `develop`/`main`, actualizar `AI_USAGE.md` y demo corta.
- Dia 3: merge final a `main` y etiqueta de release.
