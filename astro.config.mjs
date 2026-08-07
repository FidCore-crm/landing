import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://fidcore.com.ar',
  // La barra de desarrollo tapa el pie de la página en las capturas.
  devToolbar: { enabled: false },
  integrations: [
    tailwind({
      // Los estilos base se importan desde src/styles/global.css, que además
      // trae las @font-face self-hosteadas.
      applyBaseStyles: false,
    }),
    // Iconos de Phosphor, inlineados en el HTML como SVG.
    icon({ include: { ph: ['*'] } }),
  ],
})
