# Redpill

Matrix-themed profile site for **Vandana Premkumar** — Technology Architect at NYSE.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit **http://localhost:8080** (or the port shown).

## Stack

- HTML5 (semantic, accessible)
- CSS (custom properties, logical properties, `prefers-reduced-motion`, `:focus-visible`)
- Vanilla JS (matrix rain canvas, deferred script)

## Practices

- **Accessibility:** Skip link, ARIA labels, section landmarks, keyboard focus styles, reduced motion support
- **Performance:** Preconnect for fonts, preload critical CSS, defer script, pause canvas when tab hidden
- **SEO:** Meta description, Open Graph, Twitter Card, canonical URL
- **Security:** `rel="noopener noreferrer"` on external links

## License

Content and design © Vandana Premkumar.
