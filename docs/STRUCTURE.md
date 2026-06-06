# Codebase structure for contributors

This repository is a modular static web project for creating high-fidelity, cyberpunk-themed neon SVG typography. It uses a **Data-Driven Architecture** with Alpine.js to handle complex SVG filter chains and typographic scaling.

## Updated Layout

```text
.
├── README.md
├── LICENSE
├── .github/
│   └── workflows/
│       └── docs-check.yml
└── docs/
    ├── index.html        # Core UI & SVG Template
    ├── style.css        # Cyberpunk HUD Styling
    ├── main.js           # Logic Engine (Alpine.js)
    ├── fonts.js          # Library of 59 Google Fonts
    ├── presets.js        # 18 Advanced FX Recipes
    ├── STRUCTURE.md      # This guide
    └── assets/           # Organization banners & samples
```

## Modular Responsibility

| File | Responsibility |
| --- | --- |
| `index.html` | Defines the UI layout (3-column) and the complex SVG Filter pipeline (`#neonFX`). |
| `style.css` | Handles the visual "Cyberpunk HUD" look, including the double-border input and flat-bar palettes. |
| `main.js` | The central brain. Manages state (Glow, Noise, Perspective), height calculation, and SVG sanitization. |
| `fonts.js` | A dedicated data module containing 59 curated font categories to keep the main logic clean. |
| `presets.js` | Encapsulates the "18 tools" logic into ready-to-use recipes for the Quick FX panel. |

## Key Architectural Concepts

### 1. The SVG Filter Engine (`#neonFX`)
Unlike simple CSS shadows, this generator uses a multi-stage SVG Filter inside `index.html`. It chains `feGaussianBlur`, `feTurbulence`, and `feDisplacementMap` to simulate physical neon phenomena like gas leakage and inner-tube glow.

### 2. Relative Typography Scale
The generator uses a **Base-Scale System**. Users set a `Base Size` (1.0rem), and the typography buttons (`H1`–`H6`) apply relative multipliers. This ensures design consistency across different font families.

### 3. Reactive Zoom Preview
The preview area supports a "Zoom" mode via double-click.
- **Normal**: View the full canvas.
- **Expanded**: The outer container grows, and the SVG uses `preserveAspectRatio="xMidYMid slice"` to zoom in on the text without losing resolution.

## Common Contributor Tasks

### Adding a New Preset
Don't edit `main.js`. Simply add a new object to `ADVANCED_PRESETS` in `presets.js`:
```javascript
{ id: 'new_fx', name: 'My Effect', icon: '✨', params: { glow: 20, noiseFreq: 0.05 } }
```
The UI will automatically generate a new button with a live preview.

### Adding a New Font
Add the font name to the `FONT_CATEGORIES` array in `fonts.js` and ensure the corresponding link is updated in the `index.html` header.

### Previewing Locally
Since this project uses ES Modules (`import/export`), you **must** use a local server to avoid CORS errors.
```sh
# Using Python
python3 -m http.server 8000 --directory docs

# Using Node.js (npx)
npx serve docs
```

## Validation Checklist
Before submitting a Pull Request:
1. **FX Verification**: Ensure the "Gas Leak" and "3D Perspective" sliders move the SVG elements correctly.
2. **Theme Toggle**: Check that both Pink and Cyan themes apply to all borders and button glows.
3. **SVG Sanitization**: Verify that entering HTML tags in the textarea displays them as literal text (escaped) rather than executing them.
4. **Mobile Responsiveness**: Check that the 3-column layout collapses gracefully into a single column.
