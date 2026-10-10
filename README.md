# Casper Hildebrand's portfolio website

This is the repository for my portfolio website, deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Getting Started

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Runs the Vite dev server locally.

### Production Build

```bash
npm run build
```

Compiles TypeScript and bundles the static site into the `dist/` directory.

### Deployment

The project is configured for Cloudflare Pages:
- **Direct Git Integration**: In the Cloudflare Dashboard, connect this repository to Cloudflare Pages with build command `npm run build` and output directory `dist`.
- **Wrangler CLI**: Deploy locally using `npm run deploy` (or `npx wrangler pages deploy dist`).
- **GitHub Actions**: Configured via `.github/workflows/deploy-pages.yml` using `cloudflare/wrangler-action`.
