# CEJA Web Starter

A lightweight open-source starter for building fast, accessible and modern websites for small businesses, freelancers and local services.

> **Status:** early-stage open-source project. The goal is to keep the core simple, reusable and easy to deploy.

## Why this project exists

Small organizations often need a professional website without a heavy framework or a complicated setup. CEJA Web Starter provides a clean foundation that developers can clone, customize and deploy quickly.

## Features

- Responsive landing-page structure
- Accessible semantic HTML
- Reusable design tokens with CSS custom properties
- Mobile navigation
- Services, proof, process and contact sections
- Basic SEO/meta setup
- No runtime JavaScript dependencies
- Vite-based local development and production build
- Easy deployment to Cloudflare Pages, Netlify, Vercel or any static host

## Quick start

```bash
git clone https://github.com/julesbassonpro-boop/ceja-web-starter.git
cd ceja-web-starter
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The generated site is written to `dist/`.

## Project structure

```text
ceja-web-starter/
├── index.html
├── src/
│   ├── main.js
│   └── styles.css
├── docs/
│   └── CUSTOMIZATION.md
├── CONTRIBUTING.md
├── LICENSE
└── package.json
```

## Customize it

The starter intentionally avoids a large component library. Change the brand colors, typography and spacing in the `:root` variables inside `src/styles.css`, then replace the example content in `index.html`.

See [`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md) for a short guide.

## Accessibility

The project aims to provide sensible defaults: semantic landmarks, visible focus states, keyboard-friendly navigation, reduced-motion support and adequate contrast. Accessibility improvements and testing are welcome contributions.

## Roadmap

- Add optional contact-form integrations
- Add automated accessibility checks
- Add reusable industry presets
- Improve documentation and deployment examples
- Add more accessible UI patterns without increasing framework complexity

## Contributing

Contributions are welcome. Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request.

## License

MIT — free to use, modify and redistribute. See [`LICENSE`](LICENSE).

## Maintainer

Maintained by [Jules Basson](https://github.com/julesbassonpro-boop).
