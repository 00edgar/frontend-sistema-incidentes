/**
 * Cliente HTTP unico del frontend: envuelve fetch, convierte errores del backend en mensajes legibles.
 *
 * Responsable: Dev1 | Historia ClickUp: 2.3.1 | RF01
 *
 * TODO: Implementar solicitar(metodo, ruta, cuerpo) con manejo de errores JSON { error: { mensaje } }.
 */

import { URL_BASE_API } from './configuracionApi.js';

export async function solicitar(metodo, ruta, cuerpo) {
  throw new Error('Pendiente de implementar: clienteApi.solicitar');
}
