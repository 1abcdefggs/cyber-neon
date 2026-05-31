# Codebase structure for newcomers

This repository is a small static web project for creating and publishing neon-themed SVG artwork. There is no build step, package manager, or application server checked in: the app can be opened directly from `docs/index.html`, and the files in `docs/` are suitable for static hosting such as GitHub Pages.

## Top-level layout

```text
.
├── README.md
├── LICENSE
└── docs/
    ├── index.html
    ├── cyber-pinks-organization.svg
    └── neon-smil.svg
```

## What each area does

| Path | Purpose |
| --- | --- |
| `README.md` | Project landing page. It displays the published CYBER PINKS SVG banner and links contributors to this structure guide. |
| `LICENSE` | Repository license terms. Review this before reusing the artwork or code. |
| `docs/` | Static site root. GitHub Pages can publish this directory as the live project site. |
| `docs/index.html` | The neon SVG generator. It contains the HTML, Alpine.js state, CSS styling, live SVG preview, and SVG download logic in one file. |
| `docs/cyber-pinks-organization.svg` | The main animated organization banner referenced by the README. |
| `docs/neon-smil.svg` | A smaller sample SVG that demonstrates neon glow and SMIL opacity animation. |

## How the generator is organized

`docs/index.html` is intentionally self-contained:

1. The `<head>` loads Google Fonts and Alpine.js from CDNs.
2. The `downloadSVG(selectedFont)` function clones the preview SVG, attempts to embed the selected Google Font as base64, serializes the result, and downloads it as `cyber-readme.svg`.
3. The `<style>` block defines the dark neon theme, layout utilities, form controls, and preview styling.
4. The `<body>` creates an Alpine.js component with the editable generator state: text, font size, colors, glow strength, animation mode, and font options.
5. The preview SVG binds its text, colors, font, glow filter, and animation style to that Alpine.js state.

Because everything is in one HTML file, most UI changes happen in `docs/index.html`. Artwork-only changes usually happen in one of the SVG files.

## Common newcomer tasks

### Preview the site locally

Open `docs/index.html` in a browser, or serve the repository with any static server. For example:

```sh
python3 -m http.server 8000 --directory docs
```

Then visit `http://localhost:8000`.

### Change the generator UI

Edit `docs/index.html`:

- Add or remove fonts in the `fonts` array inside the `x-data` object.
- Adjust controls in the `.layout-grid` form.
- Update animation behavior in the SVG `<style>` block.
- Update page-wide styling in the main `<style>` block.

### Update README artwork

The README currently embeds the hosted `cyber-pinks-organization.svg`. To change that banner, edit `docs/cyber-pinks-organization.svg`. To use a newly downloaded generator output instead, place the new SVG in `docs/` and update the README image URL.

## Validation checklist

Before opening a pull request, do a quick manual check:

1. Open or serve `docs/index.html`.
2. Try changing the text, font, colors, glow, and animation controls.
3. Click **DOWNLOAD FOR README** and confirm the downloaded SVG opens correctly.
4. If you changed README artwork, confirm the image path still resolves after GitHub Pages publishes `docs/`.
