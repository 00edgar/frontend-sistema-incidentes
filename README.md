# frontend-sistema-incidentes

Interfaz web (HTML, CSS y JavaScript) del sistema inteligente de analisis de incidentes. Consume unicamente la API del repositorio `backend-sistema-incidentes`; **nunca** llama a n8n, Qdrant ni al proveedor de IA.

## Estructura
```
index.html           pagina de inicio
paginas/             gestionIncidentes, asistenteRag, historialYCalificacion, dashboardAnalitico
css/                 estilosGlobales.css, estilosDashboard.css
js/configuracionApi.js   direccion del backend
js/clienteApi.js         unico cliente HTTP
js/servicios/            una funcion por endpoint
js/componentes/          tabla, respuesta IA, calificacion, graficos (Chart.js)
js/paginas/              logica de cada pagina
```

## Puesta en marcha
1. Arrancar el backend (http://localhost:3000).
2. En esta carpeta: `npm run iniciar` y abrir http://localhost:5500 (alternativa: la extension Live Server en el puerto 5500).
3. Si cambias el puerto del frontend, actualiza `ORIGEN_PERMITIDO_FRONTEND` en el `.env` del backend.

Cada archivo indica su responsable y su historia de ClickUp en la cabecera. Normas en `docs/convencionesNombres.md` y `docs/flujoGit.md`.
