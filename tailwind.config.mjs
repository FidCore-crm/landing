/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /**
         * PALETA DE MARCA REAL, tomada del login del CRM y del logo.
         * No inventar valores nuevos acá.
         *
         * Los tres azules son los del gradiente del login:
         *   linear-gradient(135deg, #0A1628 0%, #1E3A5F 60%, #2A4A7A 100%)
         * El 900 es el azul principal de la marca.
         */
        navy: {
          950: '#060E1B', // derivado, para fondos más profundos que el base
          900: '#0A1628', // MARCA, azul principal. Fondo base de la página
          850: '#0E1B30', // derivado
          800: '#122341', // derivado, superficie de tarjetas
          700: '#1E3A5F', // MARCA, segundo azul. Bordes y superficies fuertes
          600: '#2A4A7A', // MARCA, tercer azul. Gradiente y detalles
        },
        /**
         * Naranja de marca, tomado del logo (#ff6a00 exacto).
         * Es EL acento y el único: el contraste contra el navy es fundamental
         * para la identidad, así que va a full saturación, sin atenuar.
         * Se usa igual en todas las secciones (Color Consistency Lock).
         */
        naranja: {
          300: '#FFA766',
          400: '#FF8B33',
          500: '#FF6A00', // MARCA, el del logo
          600: '#E85F00',
          700: '#C24E00',
        },
      },
      fontFamily: {
        // Display: Archivo, con eje de ancho variable (75% a 125%).
        display: ['Archivo', 'system-ui', 'sans-serif'],
        // Texto: la misma del CRM.
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        // Datos: patentes, pólizas, CUIT, fechas. El idioma real del producto.
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.45' }],
        xs: ['12.5px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.55' }],
        base: ['15.5px', { lineHeight: '1.65' }],
        lg: ['17px', { lineHeight: '1.6' }],
        xl: ['19px', { lineHeight: '1.55' }],
        /**
         * Escala de display con saltos grandes y tracking negativo creciente.
         * Pocos tamaños y bien separados: la jerarquía se lee de un golpe.
         */
        'd-sm': ['36px', { lineHeight: '1.06', letterSpacing: '-0.026em' }],
        'd-md': ['50px', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'd-lg': ['66px', { lineHeight: '0.95', letterSpacing: '-0.034em' }],
        'd-xl': ['82px', { lineHeight: '0.92', letterSpacing: '-0.038em' }],
      },
      borderRadius: {
        /**
         * Sistema de radios único y documentado (Shape Consistency Lock):
         *   control -> botones, inputs, selects, badges chicos
         *   panel   -> tarjetas y contenedores
         *   pill    -> solo chips y etiquetas redondeadas
         */
        control: '10px',
        panel: '14px',
        pill: '999px',
      },
      maxWidth: {
        contenido: '1200px',
        lectura: '65ch',
      },
      keyframes: {
        aparecer: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        aparecer: 'aparecer .7s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [],
}
