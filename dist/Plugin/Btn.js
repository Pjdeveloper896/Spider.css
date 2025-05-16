(function () {
  const colors = [
    "gray", "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue",
    "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"
  ];

  const colorMap = {
    "gray": "#6b7280", "red": "#ef4444", "pink": "#ec4899", "purple": "#8b5cf6",
    "deep-purple": "#7c3aed", "indigo": "#6366f1", "blue": "#3b82f6", "light-blue": "#0ea5e9",
    "cyan": "#06b6d4", "teal": "#14b8a6", "green": "#10b981", "light-green": "#22c55e",
    "lime": "#84cc16", "yellow": "#eab308", "amber": "#f59e0b", "orange": "#f97316",
    "deep-orange": "#ea580c"
  };

  const style = document.createElement("style");
  let css = `
    .btn {
      font-family: inherit;
      font-weight: 600;
      display: inline-block;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-align: center;
      text-decoration: none;
      line-height: 1.2;
    }

    /* Sizes */
    .btn-xs { font-size: 0.7rem; padding: 0.25rem 0.5rem; }
    .btn-sm { font-size: 0.85rem; padding: 0.4rem 0.75rem; }
    .btn-md { font-size: 1rem; padding: 0.5rem 1rem; }
    .btn-lg { font-size: 1.125rem; padding: 0.75rem 1.25rem; }
    .btn-xl { font-size: 1.25rem; padding: 1rem 1.5rem; }

    /* Shapes */
    .btn-rounded { border-radius: 0.375rem; }
    .btn-pill { border-radius: 9999px; }
    .btn-square { border-radius: 0; }

    /* Effects */
    .btn-shadow { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
    .btn-glow { box-shadow: 0 0 8px rgba(255, 255, 255, 0.3); }
    .btn-ripple { position: relative; overflow: hidden; }
    .btn:disabled, .btn.disabled { opacity: 0.5; cursor: not-allowed; }
  `;

  for (const color in colorMap) {
    const hex = colorMap[color];

    css += `
      /* Solid */
      .btn-${color} { background-color: ${hex}; color: white; }
      .btn-${color}:hover { filter: brightness(1.1); }

      /* Outline */
      .btn-outline-${color} {
        background: transparent;
        border: 2px solid ${hex};
        color: ${hex};
      }
      .btn-outline-${color}:hover {
        background-color: ${hex};
        color: white;
      }

      /* Ghost */
      .btn-ghost-${color} {
        background: rgba(0,0,0,0);
        color: ${hex};
        border: none;
      }
      .btn-ghost-${color}:hover {
        background-color: ${hex}22;
      }

      /* Flat */
      .btn-flat-${color} {
        background-color: ${hex}33;
        color: ${hex};
        border: none;
      }
      .btn-flat-${color}:hover {
        background-color: ${hex}55;
      }

      /* Link */
      .btn-link-${color} {
        background: none;
        border: none;
        color: ${hex};
        text-decoration: underline;
      }
      .btn-link-${color}:hover {
        text-decoration: none;
      }
    `;
  }

  style.innerHTML = css;
  document.head.appendChild(style);
})();
