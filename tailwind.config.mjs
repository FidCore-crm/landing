/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Alineado con panel/CRM.
        navy: {
          DEFAULT: '#0A1628',
          50: '#f4f6fa',
          100: '#e6eaf1',
          200: '#c7d0dd',
          300: '#9daac0',
          400: '#6b7d9e',
          500: '#4a5f83',
          600: '#3a4d6e',
          700: '#2e3d5a',
          800: '#1a2a45',
          900: '#0A1628',
        },
        fidcore: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2ff',
          300: '#8cb0ff',
          400: '#5985fc',
          500: '#3560f2',
          600: '#1f3fe8',
          700: '#1a30d6',
          800: '#1c2aad',
          900: '#1c2a89',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
}
