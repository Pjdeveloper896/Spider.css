
# 🕷️ Spider.css v2.2.0 (Sass Version)

> Modular Utility-First CSS Framework – Built with `.sass` indented syntax

**Spider.css v2.2.0** is a fully refactored version of Spider.css, now powered by Sass. This version introduces powerful improvements in scalability, customization, and responsive design using clean and readable Sass maps, mixins, and logic.

---

## 🚀 What’s New in v2.2.0

✅ Rewritten entirely in `.sass` syntax  
✅ Utility generators using Sass maps and loops  
✅ Mobile-first responsive utilities  
✅ Modular structure: Grid, Flex, Card, Navbar  
✅ Custom breakpoints, gap sizes, and grid columns  
✅ Easier to extend and maintain  
✅ Fully backward-compatible with Spider.css v2.0.1

---

## 📦 Installation

### 1. Clone or Download

```bash
git clone https://github.com/pjdeveloper896/spider.css.git
cd spider.css
````

### 2. Compile Sass

Make sure you have Dart Sass installed:

```bash
npm install -g sass
```

Then compile:

```bash
sass spider.sass spider.css
```

Or use a watcher:

```bash
sass --watch spider.sass:spider.css
```

---

## ⚙️ Configuration

You can configure design tokens easily at the top of the `spider.sass` file:

```sass
$gap-values: (0: 0, 1: 0.25rem, 2: 0.5rem, 3: 0.75rem, 4: 1rem, 5: 1.25rem, 6: 1.5rem)
$grid-cols: 12
$breakpoints: (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
```

Update these maps to add new breakpoints or utility values.

---

## 🧰 Included Modules

### 🔳 Grid System

* `.grid`, `.grid-cols-{1-12}`, `.col-span-{1-12}`
* Responsive: `sm:grid-cols-3`, `md:col-span-6`
* Gap utilities: `.gap-0` to `.gap-6`

### ➡️ Flexbox

* `.flex`, `.inline-flex`
* `.flex-row`, `.flex-col`, `.flex-wrap`, etc.
* Responsive directions: `md:flex-col`, `xl:justify-between`
* Grow/shrink utilities: `.flex-grow`, `.flex-shrink-0`
* Self and content alignment: `.items-center`, `.content-around`, `.self-end`

### 🃏 Cards

```html
<div class="card card-dark">
  <img class="card-img" />
  <div class="card-body">
    <h3 class="card-title">Title</h3>
    <p class="card-text">Some description</p>
  </div>
  <div class="card-footer">
    <button class="btn">Click</button>
  </div>
</div>
```

* Hover elevation
* Dark theme support
* Custom button `.btn`

### 🧭 Navbar

* `.navbar`, `.navbar-brand`, `.navbar-links`
* Responsive toggle `.navbar-toggle`
* Sticky, fixed, transparent, and blur variants
* Alignment: `.navbar-center`, `.navbar-left`, `.navbar-right`
* Dropdowns and sidenav included

---

## 📱 Responsive Utilities

Use mobile-first utility classes with these prefixes:

* `sm:` for ≥640px
* `md:` for ≥768px
* `lg:` for ≥1024px
* `xl:` for ≥1280px

```html
<div class="flex sm:flex-col md:flex-row lg:justify-around xl:items-baseline">...</div>
```

---

## 📁 File Overview

```
📦 spider.css/
├── spider.sass      # Main SASS file (v2.2.0)
├── spider.css       # Compiled CSS
├── README.md        # Documentation
```

---

## 🧠 Differences from v2.0.1

| Feature              | v2.0.1 (CSS) | v2.2.0 (Sass)        |
| -------------------- | ------------ | -------------------- |
| Syntax               | Pure CSS     | Sass (.sass)         |
| Customization        | Manual       | Sass Maps            |
| Responsive Utilities | Hardcoded    | Auto-generated       |
| File Size            | Larger       | Smaller / Modular    |
| Maintainability      | Lower        | High (DRY principle) |

---



## 👨‍💻 Author

**Developer Prasoon**
🔗 GitHub: [@Pjdeveloper896](https://github.com/Pjdeveloper896)

---

> Designed with 🧠 logic and 🧡 heart to be developer-friendly, fast, and flexible.

```
npm i shopisticate-css
