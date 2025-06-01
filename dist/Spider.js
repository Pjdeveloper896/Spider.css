(function () {
  // Helper function to apply spy animations
  function applySpyAttributes() {
    const elements = document.querySelectorAll('[spy]');
    elements.forEach((el) => {
      const attrValue = el.getAttribute('spy');
      if (!attrValue) return;

      const attributes = attrValue.trim().split(/\s+/);
      attributes.forEach((attr) => {
        switch (attr) {
          case 'fade':
          case 'bounce':
          case 'rounded':
          case 'shadow':
          case 'bg-primary':
          case 'text-center':
            el.classList.add(attr);
            break;
          case 'm1':
            el.classList.add('m-1');
            break;
          default:
            break; // Ignore unknown attributes
        }
      });
    });
  }

  // Helper function to apply shop grid styles
  function applyShopAttributes() {
    const elements = document.querySelectorAll('[shop]');
    elements.forEach((el) => {
      const attrValue = el.getAttribute('shop');
      if (!attrValue) return;

      const attributes = attrValue.trim().split(/\s+/);
      attributes.forEach((attr) => {
        if (attr === 'grid') {
          el.classList.add('d-grid', 'grid-cols-3');
        }
      });
    });
  }

  // Handle Dark Mode Toggle
  function toggleDarkMode() {
    const darkModeButton = document.querySelector('[data-toggle="dark-mode"]');
    if (!darkModeButton) return;

    darkModeButton.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Dynamic class toggling for responsive classes
  function toggleResponsiveClasses() {
    const elements = document.querySelectorAll('.d-flex');
    elements.forEach((el) => {
      el.classList.add('flex-column');
    });
  }

  // Initialize the framework
  document.addEventListener('DOMContentLoaded', () => {
    applySpyAttributes();
    applyShopAttributes();
    toggleDarkMode();
    toggleResponsiveClasses();
  });
})();
