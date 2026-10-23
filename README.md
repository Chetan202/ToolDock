# ToolDock Website

A responsive, dark-themed marketing site and privacy policy for the ToolDock Chrome extension.

## Pages

- `index.html` — responsive landing page with product imagery, feature cards, workflow steps, privacy notes, and FAQ.
- `privacy.html` — privacy policy using the same design system.
- `assets/` — compressed WebP product screenshots and a local SVG favicon.

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, framework, or runtime dependency is required. Product images are bundled locally and the layout is responsive across mobile, tablet, and desktop.

## Run locally

Open `index.html` in a browser, or run a simple local server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Push the contents of this folder to a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main`, and select `/ (root)`.
4. Use `privacy.html` as the privacy-policy URL in the Chrome Web Store listing.

## Before publishing

Replace the placeholder Chrome Web Store URLs (`https://chrome.google.com/webstore`) in `index.html` and `privacy.html` with ToolDock's exact listing URL when available. Review the privacy policy against the released extension build before publishing.

## Contact

chetanjha222@gmail.com
