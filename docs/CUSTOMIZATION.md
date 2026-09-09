# Customization guide

CEJA Web Starter is intentionally simple so it can be adapted quickly.

## Branding

Edit the CSS custom properties at the top of `src/styles.css`:

```css
:root {
  --surface: #f6f6f7;
  --border: #dfdfe3;
  --text-muted: #61616b;
  --accent: #5b3fd1;
  --accent-dark: #432db0;
  --radius: 18px;
}
```

## Content

Replace the example copy in `index.html` with the real business content. Keep headings descriptive and avoid skipping heading levels.

## Navigation

Add or remove links in the `#main-nav` element. If you add new sections, give them matching `id` attributes.

## Contact forms

The starter does not force a backend. You can connect a form provider, a serverless function or your own API depending on the project.

## Deployment

Run:

```bash
npm run build
```

Then deploy the generated `dist/` directory to any static host.

## Keep it lightweight

Before adding a dependency, consider whether the same feature can be implemented with semantic HTML, CSS and a few lines of JavaScript. The goal of the starter is to stay understandable and portable.
