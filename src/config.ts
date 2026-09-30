/**
 * Constantes de la landing.
 *
 * EL PRECIO YA NO SE MANTIENE ACÁ. La página lo pide al arrancar a
 * `GET /api/publico/precio` del panel, que devuelve
 * `configuracion_finanzas.precio_saas_publico_ars` — el mismo número con el
 * que se arma el preapproval de Mercado Pago. Lo que se anuncia y lo que se
 * cobra salen de la misma fila.
 *
 * Antes vivía sólo acá, y el comentario de este bloque avisaba de que había
 * que actualizarlo a mano y volver a publicar. Eso funciona hasta la primera
 * vez que uno se olvida: el PAS lee un importe y le llega otro.
 *
 * PRECIO_ARS queda como **respaldo**, para cuando el panel no conteste: es una
 * página estática y tiene que mostrar un precio igual. Conviene dejarlo cerca
 * del real, pero ya no es el que manda.
 */

export const PRECIO_ARS = 69800

/** Formateado para mostrar. Derivado, no lo escribas a mano en los componentes. */
export const PRECIO_TEXTO = `$${PRECIO_ARS.toLocaleString('es-AR')}`

/** Panel FidCore. Recibe el form de solicitud y devuelve el link de pago. */
export const PANEL_URL = 'https://panel.fidcore.com.ar'

/**
 * WhatsApp de contacto, solo dígitos con código de país (ej: '5491155555555').
 * Vacío = la landing cae a email en todos los fallbacks, sin links rotos.
 */
export const WHATSAPP_NUMERO = ''

export const EMAIL_CONTACTO = 'contacto@fidcore.com.ar'

const WHATSAPP_MENSAJE = encodeURIComponent(
  'Hola, vi FidCore CRM y quiero más información.',
)

/** Link de WhatsApp, o null si todavía no hay número configurado. */
export const WHATSAPP_LINK = WHATSAPP_NUMERO
  ? `https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`
  : null

/** Canal de contacto disponible: WhatsApp si hay número, email si no. */
export const CONTACTO_FALLBACK = WHATSAPP_LINK
  ? { href: WHATSAPP_LINK, label: 'Escribinos por WhatsApp' }
  : { href: `mailto:${EMAIL_CONTACTO}`, label: `Escribinos a ${EMAIL_CONTACTO}` }
