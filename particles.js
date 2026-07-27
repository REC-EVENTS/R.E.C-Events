(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';

    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const navHeight = navbar.offsetHeight;

        canvas.style.cssText = [
            'position: fixed',
            'top: 0',
            'left: 0',
            'width: 100%',
            'height: ' + navHeight + 'px',
            'z-index: 1',
            'pointer-events: none'
        ].join(';');

        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = navHeight;

        // Particules orangées
        const particles = [];
        const count = 40;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.3,
                opacity: Math.random() * 0.5 + 0.1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.2,
            });
        }

        // Étincelles
        const sparks = [];
        let lastSparkTime = 0;

        function getLogo() {
            const logo = document.querySelector('.logo img');
            if (!logo) return null;
            return logo.getBoundingClientRect();
        }

        function spawnSpark() {
            const logo = getLogo();
            if (!logo) return;
            sparks.push({
                x: logo.left + Math.random() * logo.width,
                y: logo.top + Math.random() * logo.height,
                r: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 1.5,
                speedY: -Math.random() * 1.5 - 0.5,
                life: 1
            });
        }

        function drawSmoke(s) {
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(s.rotation);

            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, s.r);
            gradient.addColorStop(0,   `rgba(160, 160, 160, ${s.opacity})`);
            gradient.addColorStop(0.4, `rgba(140, 140, 140, ${s.opacity * 0.6})`);
            gradient.addColorStop(1,   `rgba(120, 120, 120, 0)`);

            ctx.beginPath();
            const points = s.points;
            ctx.moveTo(points[0].x * s.r, points[0].y * s.r);
            for (let i = 0; i < points.length; i++) {
                const curr = points[i];
                const next = points[(i + 1) % points.length];
                const mx = ((curr.x + next.x) / 2) * s.r;
                const my = ((curr.y + next.y) / 2) * s.r;
                ctx.quadraticCurveTo(curr.x * s.r, curr.y * s.r, mx, my);
            }

            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }

        function draw(timestamp) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Particules orangées
            particles.forEach(function (p) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 105, 42, ${p.opacity})`;
                ctx.fill();
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });

            // Étincelles
            if (timestamp - lastSparkTime > 6000 + Math.random() * 4000) {
                spawnSpark();
                lastSparkTime = timestamp;
            }

            for (let i = sparks.length - 1; i >= 0; i--) {
                const s = sparks[i];
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 200, 100, ${s.life})`;
                ctx.shadowColor = 'rgba(245, 200, 100, 0.8)';
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;
                s.x += s.speedX;
                s.y += s.speedY;
                s.life -= 0.02;
                if (s.life <= 0) sparks.splice(i, 1);
            }

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = navbar.offsetHeight;
        });
    });
})();