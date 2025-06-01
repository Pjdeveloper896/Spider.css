
// Spider.css 2.0.0 JavaScript Modules (All-in-One)
// Author: YourName | https://github.com/YourGitHub

(function () {
  // Helper function to create elements
  function createElement(tag, className, innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.innerHTML = innerHTML;
    return el;
  }

  // ==========================
  // 1. spiderModal
  // ==========================
  window.spiderModal = function (content, options = {}) {
    const modal = createElement('div', 'spider-modal-overlay');
    const box = createElement('div', 'spider-modal-box');
    if (options.title) {
      const title = createElement('h2', 'spider-modal-title', options.title);
      box.appendChild(title);
    }
    const body = createElement('div', 'spider-modal-body', content);
    const closeBtn = createElement('button', 'spider-modal-close', '&times;');
    closeBtn.onclick = () => modal.remove();

    box.appendChild(body);
    box.appendChild(closeBtn);
    modal.appendChild(box);
    document.body.appendChild(modal);

    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };
    document.onkeydown = (e) => {
      if (e.key === 'Escape') modal.remove();
    };
  };

  // ==========================
  // 2. spiderToast
  // ==========================
  window.spiderToast = function (message, { type = 'info', duration = 3000 } = {}) {
    const toast = createElement('div', `spider-toast spider-toast-${type}`, message);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
  };

  // ==========================
  // 3. spiderDropdown
  // ==========================
  window.spiderDropdown = function () {
    document.querySelectorAll('[data-spider="dropdown"]').forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target);
      if (!target) return;
      trigger.onclick = () => target.classList.toggle('hidden');
    });
  };

  // ==========================
  // 4. spiderTabs
  // ==========================
  window.spiderTabs = function () {
    document.querySelectorAll('.spider-tabs').forEach(tabContainer => {
      const buttons = tabContainer.querySelectorAll('[data-tab]');
      buttons.forEach(btn => {
        btn.onclick = () => {
          const targetId = btn.dataset.tab;
          document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.add('hidden');
          });
          document.getElementById(targetId).classList.remove('hidden');
        };
      });
    });
  };

  // ==========================
  // 5. spiderAlert
  // ==========================
  window.spiderAlert = function (message, {
    type = 'warning',
    confirmText = 'OK',
    onConfirm = () => {}
  } = {}) {
    const modal = createElement('div', 'spider-modal-overlay');
    const box = createElement('div', 'spider-modal-box');
    const body = createElement('div', 'spider-modal-body', message);
    const confirm = createElement('button', 'spider-modal-confirm', confirmText);
    const cancel = createElement('button', 'spider-modal-cancel', 'Cancel');

    confirm.onclick = () => {
      onConfirm();
      modal.remove();
    };
    cancel.onclick = () => modal.remove();

    box.appendChild(body);
    box.appendChild(confirm);
    box.appendChild(cancel);
    modal.appendChild(box);
    document.body.appendChild(modal);
  };

  // ==========================
  // 6. spiderComponent.init
  // ==========================
  window.spiderComponent = {
    init: function () {
      spiderDropdown();
      spiderTabs();
    }
  };

  // ==========================
  // 7. spiderAutoBind
  // ==========================
  window.spiderAutoBind = function () {
    document.querySelectorAll('[data-spider]').forEach(el => {
      const type = el.dataset.spider;
      if (type === 'toast') {
        el.onclick = () => {
          spiderToast(el.dataset.message || '...', {
            type: el.dataset.type || 'info'
          });
        };
      }
    });
  };
})();
