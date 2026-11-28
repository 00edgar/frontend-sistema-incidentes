# Uso de IA en el proyecto

> Documento vivo de todo el equipo. Version inicial redactada en la historia 1.3 (Dev1); se actualiza en el cierre de cada dia.

## Principio de tutoria tecnica
Politica del equipo: la IA **orienta, da ejemplos parciales y revisa codigo**. No genera soluciones integrales ni reemplaza la autoria del equipo. Toda propuesta de la IA se lee, se prueba y se ajusta por una persona antes de integrarse; quien hace el merge responde por el resultado.

## Herramientas de IA usadas
| Herramienta | Para que se uso | Quien |
|---|---|---|
| Claude (Anthropic), con Claude Code y el conector de ClickUp | Planeacion en ClickUp, esqueleto de la arquitectura, y codigo, pruebas y documentos de las historias 1.2, 1.4 y 2.2 | Dev1 (Edgar Manolo) |

## Participacion de la IA por componente
| Componente | Que hizo la IA | Que hizo el equipo |
|---|---|---|
| Plan en ClickUp (dias, historias, subtareas, dependencias) | Propuso la estructura, estimaciones y dependencias, y creo las tareas | Dev1 definio los dias de trabajo (27, 28 y 30 de noviembre), exigio no usar Docker y reviso el plan |
| Esqueleto de la arquitectura hexagonal en los tres repositorios | Genero carpetas, archivos base y su documentacion | Dev1 reviso la estructura, pidio separar frontend, backend y base de datos, y exigio Prisma |
| Historia 1.2: infraestructura local (PostgreSQL, Qdrant, n8n) | Escribio los scripts de instalacion, arranque y verificacion, y la guia | Pendiente: Dev1 y el resto del equipo deben reproducir la guia en sus equipos |
| Historia 1.4: 25 articulos tecnicos sinteticos | Redacto los articulos, el script SQL y la verificacion | Pendiente: Dev1 debe revisar el contenido tecnico antes de marcarlo como verificado en la rutina del equipo |
| Historia 2.2: busqueda semantica con umbral configurable | Construyo el flujo de n8n, el proveedor de embeddings local de pruebas, la calibracion y las pruebas | Pendiente: recalibrar el umbral con el modelo de embeddings real y revisar el flujo |

## Decisiones tecnicas apoyadas por IA
| Fecha | Decision | Alternativas | Quien decidio |
|---|---|---|---|
| 2026-11-27 | Arquitectura hexagonal (puertos y adaptadores) con Node.js, Express y Prisma | Capas MVC tradicionales, NestJS | Dev1, a partir de la propuesta de la IA |
| 2026-11-27 | Infraestructura local sin contenedores: PostgreSQL del sistema, Qdrant como ejecutable y n8n por npm | Docker Compose | Dev1 (exigencia del proyecto) |
| 2026-11-27 | El backend no habla con Qdrant; toda la busqueda vectorial vive en flujos de n8n | Cliente de Qdrant dentro del backend | Propuesta de la IA, pendiente de confirmar por el equipo |
| 2026-11-27 | Embeddings por una API compatible con OpenAI configurada por variables de entorno, con un proveedor local de pruebas para desarrollo | Proveedor fijo en el codigo | Propuesta de la IA, pendiente de confirmar por el equipo |
| 2026-11-27 | Umbral de similitud configurable por `UMBRAL_SIMILITUD`; valor medido solo con el proveedor local de pruebas | Umbral fijo en el flujo | Propuesta de la IA, pendiente de recalibrar con el modelo real |

## Registro diario
- Dia 1 (27/11): plan en ClickUp sin Docker, esqueleto de arquitectura y repositorios en GitHub, y primeras historias de Dev1 (1.2, 1.3, 1.4 y 2.2) con pruebas ejecutadas en un entorno de prueba.
- Dia 2 (28/11):
- Dia 3 (30/11):
