/**
 * Llamadas a la API de incidentes.
 *
 * Responsable: Dev1 | Historia ClickUp: 2.3.2 | RF01
 */

import { solicitar } from '../clienteApi.js';

export async function registrarIncidente(datos) {
  // TODO: POST /incidentes
  throw new Error('Pendiente de implementar: registrarIncidente');
}

export async function listarIncidentes(filtros) {
  // TODO: GET /incidentes
  throw new Error('Pendiente de implementar: listarIncidentes');
}

export async function obtenerIncidente(idIncidente) {
  // TODO: GET /incidentes/:id
  throw new Error('Pendiente de implementar: obtenerIncidente');
}

export async function actualizarEstadoIncidente(idIncidente, estado) {
  // TODO: PATCH /incidentes/:id/estado
  throw new Error('Pendiente de implementar: actualizarEstadoIncidente');
}
