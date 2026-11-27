# Convenciones de nombres

- Archivos JavaScript en camelCase y autodescriptivos, siguiendo el ejemplo `ejemploProyecto.js`.
- Prefijos por tipo de archivo:
  | Tipo | Prefijo | Ejemplo |
  |---|---|---|
  | Caso de uso | `casoDeUso` | `casoDeUsoRegistrarIncidente.js` |
  | Puerto de salida | `puerto` | `puertoRepositorioIncidentes.js` |
  | Repositorio Prisma | `repositorio...Prisma` | `repositorioIncidentesPrisma.js` |
  | Cliente n8n | `clienteN8n` | `clienteN8nAsistenteRag.js` |
  | Controlador | `controlador` | `controladorIncidentes.js` |
  | Rutas | `rutas` | `rutasIncidentes.js` |
  | Esquema de validacion | `esquema` | `esquemaCrearIncidente.js` |
  | Regla de negocio | `regla` | `reglaPuntuacionCalificacion.js` |
  | Servicio del frontend | `servicio` | `servicioIncidentes.js` |
  | Pagina del frontend | `pagina` | `paginaGestionIncidentes.js` |
- Clases en PascalCase, funciones y variables en camelCase, constantes en MAYUSCULAS_CON_GUION_BAJO.
- Excepciones por exigencia de herramientas: `package.json`, `schema.prisma`, `README.md`, `.env.example`.
