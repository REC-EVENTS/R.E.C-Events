(function () {
    const langs = ['fr', 'en', 'es'];
    const flags = {
        fr: 'https://flagcdn.com/w40/fr.png',
        en: 'https://flagcdn.com/w40/gb.png',
        es: 'https://flagcdn.com/w40/es.png'
    };
    let lang = localStorage.getItem('lang') || 'fr';

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang] && translations[lang][key];
            if (text) el.innerHTML = text;
        });
        document.title = translations[lang]['page.title'] || document.title;
        document.documentElement.lang = lang;

        langs.forEach(function (l) {
            const btn = document.getElementById('lang-btn-' + l);
            if (btn) {
                btn.style.opacity = l === lang ? '1' : '0.4';
                btn.style.border = l === lang ? '2px solid #c8692a' : '2px solid transparent';
            }
        });
    }

    function createToggle() {
        const isMobile = window.innerWidth <= 768;
        const container = document.createElement('div');
        container.id = 'lang-buttons-container';
        container.style.position = 'fixed';
        container.style.top = '8px';
        container.style.right = '8px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = isMobile ? 'column' : 'row';
        container.style.gap = '4px';

        langs.forEach(function (l) {
            const btn = document.createElement('button');
            btn.id = 'lang-btn-' + l;
            btn.style.padding = '3px';
            btn.style.borderRadius = '6px';
            btn.style.border = '2px solid transparent';
            btn.style.background = '#111';
            btn.style.cursor = 'pointer';
            btn.style.opacity = '0.4';
            btn.style.display = 'flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';

            const img = document.createElement('img');
            img.src = flags[l];
            img.alt = l;
            img.style.width = isMobile ? '12px' : '28px';
            img.style.height = 'auto';
            img.style.display = 'block';
            btn.appendChild(img);

            btn.addEventListener('click', function () {
                lang = l;
                localStorage.setItem('lang', lang);
                applyTranslations();
                window.dispatchEvent(new Event('langchange'));
            });
            container.appendChild(btn);
        });

        document.body.appendChild(container);
    }

    window.addEventListener('resize', function () {
        const container = document.getElementById('lang-buttons-container');
        if (!container) return;
        const isMobile = window.innerWidth <= 768;
        container.style.flexDirection = isMobile ? 'column' : 'row';
        container.querySelectorAll('img').forEach(function (img) {
            img.style.width = isMobile ? '18px' : '28px';
        });
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            createToggle();
            applyTranslations();
        });
    } else {
        createToggle();
        applyTranslations();
    }
})();