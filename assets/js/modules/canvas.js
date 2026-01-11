/**
 * Ambient wave animation on canvas
 */
export function initWaveAnimation() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    // AI-themed color palette
    const colors = [
        'rgba(30, 64, 175, 0.3)',
        'rgba(6, 182, 212, 0.25)',
        'rgba(139, 92, 246, 0.2)'
    ];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Wave {
        constructor(color, amplitude, frequency, speed, phase, yOffset) {
            this.color = color;
            this.amplitude = amplitude;
            this.frequency = frequency;
            this.speed = speed;
            this.phase = phase;
            this.yOffset = yOffset || 0.5;
            this.offset = Math.random() * 1000;
        }

        draw(time) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, height * this.yOffset);

            for (let x = 0; x <= width; x += 3) {
                const y = height * this.yOffset +
                    Math.sin((x / width * this.frequency * Math.PI * 2) +
                    (time * this.speed) + this.offset + this.phase) * this.amplitude;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    const waves = [
        new Wave(colors[0], 50, 1.5, 0.0005, 0, 0.5),
        new Wave(colors[1], 70, 1.2, 0.0004, 1.5, 0.55),
        new Wave(colors[2], 90, 1.0, 0.0003, 3, 0.6)
    ];

    let lastTime = 0;

    function animate(currentTime) {
        // Throttle to ~30fps for performance
        if (currentTime - lastTime < 33) {
            requestAnimationFrame(animate);
            return;
        }
        lastTime = currentTime;

        ctx.clearRect(0, 0, width, height);
        waves.forEach(wave => wave.draw(currentTime));
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}
