This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy (Cloudflare Pages)

El sitio se exporta como estático (`output: 'export'` en `next.config.ts`) y se hostea en Cloudflare Pages con el dominio [redisen.ar](https://redisen.ar).

- **Build command:** `npm run build`
- **Output directory:** `out`
- `functions/api/substack.ts` es una [Pages Function](https://developers.cloudflare.com/pages/functions/) que sirve `/api/substack` (proxy del RSS de Substack, reemplaza la vieja ruta API de Next.js).

Cada push a `main` dispara un deploy automático si el repo está conectado en el dashboard de Cloudflare Pages. Para probar localmente el sitio completo (incluida la función):

```bash
npm run build
npx wrangler pages dev out
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
