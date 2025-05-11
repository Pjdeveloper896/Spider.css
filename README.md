

---


# 🕷️ Spider.css — Lightweight, Powerful, Customizable CSS Framework

**Spider.css** is a minimal yet powerful utility-first CSS framework built for modern web developers who want rapid development, flexible utilities, animations, dark mode support, and extensible theming — all in one file. Use it standalone or combine with your favorite JS framework. CDN ready. Developer-friendly. Stylish by default.

![Spider.css Banner](https://pjdeveloper896.github.io/Spider.css/Spider.png)

---

## 🚀 Features

- 🎨 **Design Tokens** – Predefined variables for colors, spacing, fonts, radii, etc.
- ⚙️ **Utility-First Classes** – Margin, padding, text, grid, flexbox, shadow, and more.
- 🌗 **Dark Mode Support** – Easy dark mode switch using `[data-theme="dark"]`.
- 💥 **Built-in Animations** – `fade`, `fade-out`, `bounce`, and more.
- 🧩 **Component Classes** – Use cards, buttons, and layouts without JS.
- 🕶️ **Custom Attributes (Upcoming)** – `spy`, `shop`, and other experimental attributes.
- 🌐 **CDN-Ready** – Host on GitHub or use via jsDelivr.

---

## 📦 Installation

### ✅ CDN via jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/pjdeveloper896/Spider.css/dist/Spider.css">
````
### JS CDN FOR ADVANCE .
```html
https://pjdeveloper896.github.io/Spider.css/dist/Spider.js
```
### ✅ GitHub Pages Link

```html
<link rel="stylesheet" href="https://pjdeveloper896.github.io/Spider.css/dist/Spider.css">
```
---

## 🧪 Usage Example

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
    <p>This is a styled card with padding, margin, and shadow.</p>
    <button class="bg-primary text-white rounded p-1">Click Me</button>
  </div>

</body>
</html>
```

---

## 🧰 Utility Classes

### 📏 Spacing

* `.m-1`, `.m-2`, `.m-3`, `.m-4`
* `.p-1`, `.p-2`, `.p-3`, `.p-4`

### 📐 Text Alignment

* `.text-center`, `.text-left`, `.text-right`

### 🎨 Colors

* `.bg-primary`, `.bg-secondary`, `.bg-accent`
* `.text-primary`, `.text-secondary`, `.text-accent`

### 📦 Layout

* `.d-flex`, `.d-grid`
* `.flex-column`, `.flex-row`
* `.grid-cols-2`, `.grid-cols-3`

### 🧲 Flex Utilities

* `.justify-center`, `.justify-between`
* `.align-center`, `.align-items-start`

---

## 🌓 Dark Mode

Enable dark mode globally:

```html
<html data-theme="dark">
```

Or dynamically toggle via JavaScript:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## ✨ Animations

* `.fade` – Fade in
* `.fade-out` – Fade out
* `.bounce` – Bouncy entrance

Use like:

```html
<div class="fade">I fade in!</div>
```

---

## 🔮 Custom Attributes (Planned)

### `spy`

Interactive element observation via custom attribute (upcoming JS support).

### `shop`

Auto-bind styled commerce components (cart, buy button, etc).

---

## 📁 Folder Structure

```
Spider.css/
├── dist/
│   └── Spider.css         # Compiled CSS file
├── src/
│   └── framework.scss     # Source SCSS file
├── docs/
│   └── index.html         # Documentation and demo
└── README.md              # This file
```

---

# For coustmisation.
1. copy Spider.css from github.
2. create a config.css .
3. paste the Spider.css code in it .
4. coustmise it and use it 

---

## 🧑‍💻 Author

Made with ❤️ by [PJ Developer](https://github.com/pjdeveloper896)

---

## 🌍 Live Demo

[🌐 View Live Example](https://pjdeveloper896.github.io/Spider.css/docs/Example2.html)
---

[🌐 View Live Example](https://pjdeveloper896.github.io/Spider.css/docs/Index.html)
---


---

# Shopisticate-css 


---


# shopisticate-css

> ⚡ Instant starter setup for [Spider.css](https://github.com/Pjdeveloper896/Spider.css) — A clean and modular CSS framework

**`shopisticate-css`** helps you quickly scaffold a basic environment for using Spider.css, complete with dependencies, examples, and structure.

---

## 🚀 Quick Start

### 📦 Install with npm

```bash
npm i shopisticate-css
````

### 📁 What It Sets Up

When you install this package, it provides:

* ✅ A pre-configured `package.json` for working with Spider.css
* 🧩 All necessary dependencies in `node_modules/`
* 📄 A `doc/` folder inside the package with HTML usage examples
* 🎨 The `spider.css` file (logo/header and main stylesheet)

---

## 📚 Example Usage

You can find HTML examples demonstrating how to use Spider.css in:

```
node_modules/shopisticate-css/doc/
```

Open any of the `.html` files in your browser to see Spider.css in action.

---

## 🕸️ About Spider.css

[Spider.css](https://github.com/Pjdeveloper896/Spider.css) is a lightweight, modular CSS framework designed for clean, scalable, and maintainable styling. It encourages structure, separation, and reusable design patterns without JavaScript dependencies.

---

## ✅ Ideal For

* Beginners exploring structured CSS frameworks
* Rapid prototyping with modular styles
* Developers who prefer native HTML + CSS workflows

---
 © [Pjdeveloper896](https://github.com/Pjdeveloper896)

---
---
### After Download 
1. After Download create html file.
2. Add /node_modules/Spider.css/dist/Spider.css in link tag href attributes
3. And start using Spider.css .

> Made with 🕷️ and ❤️ for clean CSS architecture.


---
