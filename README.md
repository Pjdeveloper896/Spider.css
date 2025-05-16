

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
---
---
### 📃 Licence
ISC 
---
> Made with 🕷️ and ❤️ for clean CSS architecture.


---
# Spider.css and Shopisticate-css - version 1.5.0.


---

# Spider.css v1.5.0 — Documentation

## 1. Effects Module

The Effects Module provides advanced, visually appealing CSS effects and animations to enhance UI elements with minimal setup. Use these classes to quickly apply stylish backgrounds, animations, and interactive effects.

---

### 1.1 Background Text Clip Effects

These classes create a clipped background image effect on text, showing the image inside the text shape.

| Class            | Description                                | Usage Example                         |
| ---------------- | ------------------------------------------ | ------------------------------------- |
| `.img`           | Background clip with tomato image.         | `<div class="img">Tomato</div>`       |
| `.bgtext-tomato` | Text clipped with tomato image background. | `<h1 class="bgtext-tomato">Text</h1>` |
| `.bgtext-ocean`  | Text clipped with ocean image background.  | `<h1 class="bgtext-ocean">Text</h1>`  |
| `.bgtext-forest` | Text clipped with forest image background. | `<h1 class="bgtext-forest">Text</h1>` |

---

### 1.2 Icon Styles

Material Icons styled with multiple size and color options, plus custom SVG background icons.

| Class                                                     | Description                                          | Example Usage                                |
| --------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- |
| `.icon`                                                   | Base icon class for inline Material Icons.           | `<span class="icon icon-primary">...</span>` |
| `.icon-lg`                                                | Large icon size (2rem).                              |                                              |
| `.icon-xl`                                                | Extra-large icon size (3rem).                        |                                              |
| `.icon-sm`                                                | Small icon size (1rem).                              |                                              |
| `.icon-primary`                                           | Blue colored icon (#1976d2).                         |                                              |
| `.icon-success`                                           | Green colored icon (#2e7d32).                        |                                              |
| `.icon-danger`                                            | Red colored icon (#d32f2f).                          |                                              |
| `.icon-warning`                                           | Yellow colored icon (#fbc02d).                       |                                              |
| `.icon-white`                                             | White colored icon.                                  |                                              |
| `.icon-black`                                             | Black colored icon.                                  |                                              |
| `.icon-moon`, `.icon-sun`, `.icon-home`, `.icon-settings` | Custom SVG background icons with fixed size 24x24px. |                                              |

---

### 1.3 Effects and Animations

| Class                | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `.rainbow-border`    | Animated rainbow gradient border around elements.             |
| `.float-interactive` | Subtle upward float and shadow on hover for interactive feel. |
| `.glass-blur`        | Glassmorphism style with blur and translucent background.     |
| `.pulse-shadow`      | Pulsing shadow animation for glowing effects.                 |

---

### 1.4 Unique Advanced Effects

| Class                    | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `.holographic-text`      | Animated holographic linear gradient text effect.        |
| `.card-3d`               | Container enabling 3D card flip perspective.             |
| `.card-inner`            | Inner card that flips 180° on hover to reveal back side. |
| `.animated-gradient-btn` | Button with continuously animated gradient border.       |
| `.morph-blob`            | Morphing blob shape with animated border-radius.         |
| `.noise-bg`              | Background with subtle noise texture overlay.            |
| `.animated-grid`         | Moving grid background animation for dynamic effect.     |

---

## 2. Button.js Module in Spider.css v1.5.0

The Button.js module enhances buttons with dynamic styling, color customizations, effects, and animations through JavaScript. It integrates seamlessly with Spider.css styles to allow easy button creation and control.

### 2.1 Features

* Dynamically create buttons with specified text, colors, and styles.
* Support for multiple color themes (primary, success, danger, warning, etc.).
* Animations and hover effects configurable via JS.
* API to add/remove buttons and modify styles on the fly.
* Supports icon integration with Material Icons or custom SVG icons.
* Responsive and accessible buttons ready for any UI.

### 2.2 Usage

```js
// Create a new button
const myButton = new SpiderButton({
  text: 'Click Me',
  color: 'primary',        // Options: primary, success, danger, warning, white, black
  size: 'lg',              // Options: sm, md, lg, xl
  icon: 'icon-home',       // Optional icon class to display inside button
  animated: true           // Enable animated gradient border or pulse effect
});

// Add button to a container element
myButton.appendTo(document.getElementById('button-container'));

// Update button text dynamically
myButton.setText('Updated Text');

// Change color dynamically
myButton.setColor('danger');

// Remove button
myButton.remove();
```

### 2.3 Button Styles

* Uses CSS classes from Spider.css core for consistent look.
* Integrates `.animated-gradient-btn`, `.pulse-shadow` for animated effects.
* Supports `.float-interactive` for hover transform effects.

### 2.4 API Methods

| Method                      | Description                                                        |
| --------------------------- | ------------------------------------------------------------------ |
| `new SpiderButton(options)` | Creates a button with options (text, color, size, icon, animated). |
| `appendTo(element)`         | Appends the button to a DOM container.                             |
| `setText(text)`             | Updates the button's displayed text.                               |
| `setColor(colorName)`       | Changes button color theme dynamically.                            |
| `remove()`                  | Removes the button from DOM and cleans event listeners.            |

---

### Summary

Spider.css v1.5.0’s Effects Module and Button.js bring together modern CSS effects and dynamic button controls, making UI development fast and visually stunning.

Use the Effects Module to apply backgrounds, animations, and 3D effects with simple classes.

Use Button.js to create powerful, animated, customizable buttons controlled by JavaScript, fully compatible with Spider.css styles.

---



