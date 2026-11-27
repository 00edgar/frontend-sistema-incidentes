/**
 * Dibuja el menu superior en el elemento #contenedorNavegacion.
 *
 * Responsable: Dev1 | Historia ClickUp: 2.3.1 | RF01
 */

export function dibujarBarraNavegacion() {
  const contenedor = document.getElementById('contenedorNavegacion');
  if (!contenedor) return;
  const base = location.pathname.includes('/paginas/') ? '../' : '';
  contenedor.innerHTML = `
    <nav class="barraNavegacion">
      <a href="${base}index.html">Inicio</a>
      <a href="${base}paginas/gestionIncidentes.html">Incidentes</a>
      <a href="${base}paginas/asistenteRag.html">Asistente IA</a>
      <a href="${base}paginas/historialYCalificacion.html">Historial</a>
      <a href="${base}paginas/dashboardAnalitico.html">Dashboard</a>
    </nav>`;
}
