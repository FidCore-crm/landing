# FidCore Landing

Landing pública de FidCore CRM. Astro + Tailwind, hospedado en GitHub Pages con dominio custom `fidcore.com.ar`.

## Desarrollo local

```bash
npm install
npm run dev   # http://localhost:4321
```

## Deploy

Automático vía GitHub Actions. Cada push a `main` builda y publica en GitHub Pages en ~1 min.

## Setup inicial en GitHub

1. Crear el repo `FidCore-crm/landing` (público).
2. En Settings → Pages:
   - Source: **GitHub Actions**.
   - Custom domain: `fidcore.com.ar`.
   - Enforce HTTPS: sí.
3. En Cloudflare (o el DNS del dominio):
   - Registro `CNAME` para `fidcore.com.ar` → `fidcore-crm.github.io`.
   - Registro `CNAME` para `www.fidcore.com.ar` → `fidcore-crm.github.io`.
   - Proxy: **DNS only** (nube gris) hasta que GitHub emita el SSL. Después podés activar proxy.

El archivo `public/CNAME` mantiene el dominio custom en cada deploy.

## Estructura

```
src/
├── layouts/Base.astro       # HTML base + SEO + fuentes
├── components/
│   ├── Nav.astro            # navbar sticky con CTA
│   ├── Hero.astro           # hero + mockup del CRM
│   ├── Features.astro       # grid de funcionalidades
│   ├── Precio.astro         # card de precio único
│   ├── FormContacto.astro   # form → panel + redirect MP
│   └── Footer.astro
└── pages/index.astro        # arma la landing con todo lo anterior
```

## Form → Panel

El form de `FormContacto.astro` hace `POST` a `https://panel.fidcore.com.ar/api/publico/solicitud`:

- Panel valida el payload + guarda el lead.
- Panel genera un preapproval Mercado Pago con `external_reference={lead_id}` y monto `$69.800/mes`.
- Panel devuelve `{ ok: true, data: { lead_id, mp_link } }`.
- La landing redirige a `mp_link` para que el cliente pague la primera cuota.

CORS habilitado en el panel para el origen `https://fidcore.com.ar`.

## Actualizar precio

El precio `$69.800/mes` está hardcodeado en 3 lugares:
- `src/components/Hero.astro` (botón principal)
- `src/components/Precio.astro` (card de precio)
- `src/components/FormContacto.astro` (label del botón submit)

Buscá y reemplazá los 3. El precio real que MP cobra vive en la config del panel (`configuracion.precio_actual_ars` o similar).
