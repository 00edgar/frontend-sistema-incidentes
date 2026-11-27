/**
 * Historial de asistencias y calificaciones.
 *
 * Responsable: Dev3 | Historia ClickUp: 3.2.1 | RF08
 */

import { solicitar } from '../clienteApi.js';

export async function obtenerHistorial(idIncidente) {
  // TODO: GET /incidentes/:id/asistencias
  throw new Error('Pendiente de implementar: obtenerHistorial');
}

export async function calificarRespuesta(idRespuestaIA, puntuacion, comentario) {
  // TODO: POST /respuestas/:id/calificaciones
  throw new Error('Pendiente de implementar: calificarRespuesta');
}
