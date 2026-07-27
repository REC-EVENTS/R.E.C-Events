(function () {
    const eventDate = new Date('2026-08-21T18:45:00+02:00');

    const labels = {
        fr: { days: 'JOURS', hours: 'HEURES', min: 'MIN', sec: 'SEC' },
        en: { days: 'DAYS',  hours: 'HOURS',  min: 'MIN', sec: 'SEC' },
        es: { days: 'DÍAS',  hours: 'HORAS',  min: 'MIN', sec: 'SEG' },
    };

    function getLang() {
        return localStorage.getItem('lang') || 'fr';
    }

    function update() {
        const countdown = document.getElementById('countdown');
        if (!countdown) return;

        const lang = getLang();
        const l = labels[lang] || labels.fr;
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdown.innerHTML = '<span class="cd-live">LIVE</span>';
            return;
        }

        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <div class="cd-block"><span class="cd-num">${String(days).padStart(2,'0')}</span><span class="cd-label">${l.days}</span></div>
            <span class="cd-sep">:</span>
            <div class="cd-block"><span class="cd-num">${String(hours).padStart(2,'0')}</span><span class="cd-label">${l.hours}</span></div>
            <span class="cd-sep">:</span>
            <div class="cd-block"><span class="cd-num">${String(minutes).padStart(2,'0')}</span><span class="cd-label">${l.min}</span></div>
            <span class="cd-sep">:</span>
            <div class="cd-block"><span class="cd-num">${String(seconds).padStart(2,'0')}</span><span class="cd-label">${l.sec}</span></div>
        `;
    }

    document.addEventListener('DOMContentLoaded', function () {
        update();
        setInterval(update, 1000);
    });

    // Écoute les changements de langue
    window.addEventListener('langchange', update);
})();