/**
 * Baja los woff2 de Google Fonts y genera un CSS con @font-face locales.
 * Motivo: la skill prohíbe linkear Google Fonts en producción (privacidad,
 * performance, dependencia de un tercero). Y self-hostear es además la única
 * forma de declarar el rango de font-stretch, que es lo que habilita el eje
 * de ancho variable de Archivo.
 *
 * Solo conserva los subsets latin y latin-ext: es lo que necesita el español.
 */
import { writeFile, mkdir } from 'node:fs/promises'

const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,400..900' +
  '&family=IBM+Plex+Mono:wght@400;500;600' +
  '&family=IBM+Plex+Sans:wght@400;500;600;700' +
  '&display=swap'

const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const DEST = '/home/nahuel/fidcore-landing/public/fonts'
const SUBSETS_OK = new Set(['latin', 'latin-ext'])

const css = await fetch(CSS_URL, { headers: { 'User-Agent': UA } }).then(r => r.text())

// Cada bloque viene precedido por un comentario con el nombre del subset.
const bloques = css.split('/*').slice(1)
const salida = []
let bajados = 0

for (const bruto of bloques) {
  const subset = bruto.slice(0, bruto.indexOf('*/')).trim()
  if (!SUBSETS_OK.has(subset)) continue

  const cuerpo = bruto.slice(bruto.indexOf('*/') + 2)
  const familia = /font-family:\s*'([^']+)'/.exec(cuerpo)?.[1]
  const url = /src:\s*url\(([^)]+)\)/.exec(cuerpo)?.[1]
  if (!familia || !url) continue

  const peso = /font-weight:\s*([^;]+)/.exec(cuerpo)?.[1].trim()
  const stretch = /font-stretch:\s*([^;]+)/.exec(cuerpo)?.[1].trim()
  const rango = /unicode-range:\s*([^;]+)/.exec(cuerpo)?.[1].trim()

  const slug = `${familia.toLowerCase().replace(/\s+/g, '-')}-${peso.replace(/\s+/g, '_')}-${subset}`
  const archivo = `${slug}.woff2`

  const bin = Buffer.from(await fetch(url, { headers: { 'User-Agent': UA } }).then(r => r.arrayBuffer()))
  await mkdir(DEST, { recursive: true })
  await writeFile(`${DEST}/${archivo}`, bin)
  bajados++
  console.log(`  ${(bin.length / 1024).toFixed(0).padStart(4)} KB  ${archivo}`)

  salida.push(
    [
      `@font-face {`,
      `  font-family: '${familia}';`,
      `  font-style: normal;`,
      `  font-weight: ${peso};`,
      stretch ? `  font-stretch: ${stretch};` : null,
      `  font-display: swap;`,
      `  src: url('/fonts/${archivo}') format('woff2');`,
      rango ? `  unicode-range: ${rango};` : null,
      `}`,
    ]
      .filter(Boolean)
      .join('\n'),
  )
}

const encabezado = `/* Fuentes self-hosteadas. Generado, no editar a mano.
   Regenerar con scripts/bajar-fuentes.mjs si cambian los pesos o familias. */\n\n`

await writeFile('/home/nahuel/fidcore-landing/src/styles/fuentes.css', encabezado + salida.join('\n\n') + '\n')
console.log(`\n${bajados} archivos, ${salida.length} bloques @font-face`)
