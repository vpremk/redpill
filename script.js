/**
 * REDPILL — Matrix rain background + footer year
 * Respects prefers-reduced-motion; no animation when user requests reduced motion.
 */

(function () {
  'use strict';

  const canvas = document.getElementById('matrix-canvas');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const matrixChars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>{}[]|/\\=+*';
  const fontSize = 14;
  let columns = 0;
  let drops = [];
  let animationId = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
  }

  function draw() {
    if (!ctx || !canvas.width || !canvas.height) return;

    ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px "JetBrains Mono", "Share Tech Mono", monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = 'rgba(0, 255, 65, 0.9)';
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i]++;
      }
    }
  }

  function animate() {
    draw();
    animationId = requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize);
  animate();

  window.addEventListener('visibilitychange', () => {
    if (document.hidden && animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    } else if (!document.hidden && !prefersReducedMotion) {
      animate();
    }
  });
})();
