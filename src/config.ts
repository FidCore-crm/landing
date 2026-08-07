/**
 * Constantes de la landing. Fuente única de verdad.
 *
 * IMPORTANTE, el precio: el panel cobra lo que dice
 * `configuracion_finanzas.precio_saas_publico_ars`. Si lo cambiás en
 * /dashboard/finanzas → Configuración, hay que actualizar PRECIO_ARS acá y
 * volver a publicar la landing, sino la página anuncia un precio distinto al
 * que le va a llegar al cliente en Mercado Pago.
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
