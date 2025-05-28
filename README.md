
---

# 🕷️ Spider.css

**Spider.css** is a lightweight, modular, and utility-first CSS framework designed for modern web development. It offers rapid styling, responsive design, custom effects, dark mode, and advanced component support—all in a single file. Use it standalone or integrate it with your favorite JavaScript frameworks. CDN-ready and beginner-friendly.

![Spider.css Banner](https://pjdeveloper896.github.io/Spider.css/Spider.png)

---

## 🚀 Features

- 🎨 **Design Tokens** — Built-in color, spacing, and typography variables.
- ⚡ **Utility-First Classes** — Apply styling with simple class names.
- 🌗 **Dark Mode Support** — Native dark mode via `data-theme="dark"`.
- 🎞️ **Built-in Animations** — Fade, bounce, pulse, and more.
- 🧩 **Component Utilities** — Cards, buttons, layout helpers.
- 🧠 **Custom Attributes (Upcoming)** — Attributes like `spy`, `shop`.
- 🌐 **CDN-Ready** — Easy integration via GitHub or jsDelivr.
- 🧪 **Effects Module (v1.5.0+)** — 3D cards, gradient text, morphing blobs, glass blur, holographic effects, etc.
- 🧠 **Button.js Module** — JS-powered dynamic buttons with custom colors and animations.

---

## 📦 Installation

### ✅ CDN (jsDelivr)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/pjdeveloper896/Spider.css/dist/Spider.css">
````

### ✅ GitHub Pages CDN

```html
<link rel="stylesheet" href="https://pjdeveloper896.github.io/Spider.css/dist/Spider.css">
```

### ✅ JavaScript Module (Optional)

```html
<script src="https://pjdeveloper896.github.io/Spider.css/dist/Spider.js"></script>
```

---

## 🧪 Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spider.css Demo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/pjdeveloper896/Spider.css/dist/Spider.css">
</head>
<body class="p-2">
  <h1 class="text-center text-primary">Welcome to Spider.css</h1>

  <div class="card shadow m-2 p-2">
    <p>This is a styled card using Spider.css utilities.</p>
    <button class="bg-primary text-white rounded p-1">Click Me</button>
  </div>
</body>
</html>
```

📺 [Live Demo](https://pjdeveloper896.github.io/Spider.css/docs/Example2.html)

---

## 🧰 Utility Classes Overview

### Spacing

* `.m-1`, `.m-2`, `.p-1`, `.p-2`, ...

### Colors

* `.bg-primary`, `.bg-secondary`, `.text-primary`, ...

### Layout

* `.d-flex`, `.d-grid`, `.flex-row`, `.grid-cols-2`, ...

### Text & Alignment

* `.text-center`, `.text-left`, `.text-right`, ...

### Effects (v1.5.0+)

* `.fade`, `.bounce`, `.glass-blur`, `.animated-grid`, ...

---

## 🌗 Dark Mode

Set dark mode globally:

```html
<html data-theme="dark">
```

Or toggle dynamically:

```js
document.documentElement.setAttribute("data-theme", "dark");
```

---

## ✨ Effects Module (v1.5.0)

Advanced visual styles and animations:

* `bgtext-ocean`, `bgtext-tomato` — Text clip backgrounds
* `holographic-text`, `morph-blob`, `glass-blur`
* `card-3d`, `pulse-shadow`, `animated-gradient-btn`

---

## 🔘 Button.js (v1.5.0)

JavaScript module to dynamically create styled buttons:

```js
SpiderButton.create({
  text: "Buy Now",
  color: "success",
  effect: "pulse-shadow"
});
```

Supports:

* Custom themes
* Hover/animated effects
* Icon injection

---

## 📁 Folder Structure

```
Spider.css/
├── dist/               # Compiled CSS and JS
├── src/                # SCSS source files
├── docs/               # Demo and documentation
└── README.md           # This file
```

---

## 🧑‍💻 Author

Made with ❤️ by [PJ Developer](https://github.com/pjdeveloper896)

---

## 📃 License

**ISC License** — Free to use, customize, and contribute.

---

# 🛍️ shopisticate-css

> ⚡ Instant starter setup for Spider.css

`shopisticate-css` is a companion package to scaffold a complete development environment with Spider.css already configured.

## 📦 Installation

```bash
npm install shopisticate-css
```

## 📁 What You Get

* 📄 `doc/` folder with HTML usage examples
* 🎨 Ready-to-use `spider.css`
* ✅ Pre-configured `package.json` and structure

## 🧑‍🏫 Usage Steps

1. Create an HTML file.
2. Add this in `<head>`:

```html
<link rel="stylesheet" href="/node_modules/shopisticate-css/spider.css">
```

3. Start using Spider.css classes and effects.

---

## ✅ Ideal For

* Beginners looking for structured CSS
* Frontend devs wanting quick prototypes
* Pure HTML + CSS workflows

---

© [pjdeveloper896](https://github.com/pjdeveloper896) — Built with 🕷️ and ❤️
official site https://spidercss.netlify.app/

