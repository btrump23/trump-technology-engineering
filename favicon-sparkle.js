/*! TTE favicon sparkle — subtle pink glitter on black TT tab icon.
   Respects prefers-reduced-motion. Pauses when the tab is hidden. */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var SIZE = 64;
  var canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var link = document.querySelector('link[rel="icon"][type="image/svg+xml"]') ||
             document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    document.head.appendChild(link);
  }

  var sparks = [
    { x: 18, y: 14 }, { x: 46, y: 16 }, { x: 28, y: 40 }, { x: 40, y: 12 },
    { x: 14, y: 36 }, { x: 50, y: 42 }, { x: 22, y: 50 }, { x: 48, y: 30 }
  ];

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  function drawTT(c) {
    c.fillStyle = '#FF1493';
    // Left T
    c.fillRect(12, 18, 18, 8);
    c.fillRect(17, 26, 8, 22);
    // Right T
    c.fillRect(33, 18, 18, 8);
    c.fillRect(38, 26, 8, 22);
  }

  var start = performance.now();
  var last = 0;

  function frame(now) {
    if (document.hidden) {
      requestAnimationFrame(frame);
      return;
    }
    if (now - last < 80) {
      requestAnimationFrame(frame);
      return;
    }
    last = now;
    var t = ((now - start) / 1000) % 1;

    ctx.clearRect(0, 0, SIZE, SIZE);
    roundRect(ctx, 0, 0, SIZE, SIZE, 12);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.save();
    roundRect(ctx, 0, 0, SIZE, SIZE, 12);
    ctx.clip();
    drawTT(ctx);

    var pulse = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(t * Math.PI * 2));
    for (var i = 0; i < sparks.length; i++) {
      var s = sparks[i];
      var phase = (t + i / sparks.length) % 1;
      var sy = ((s.y + phase * 28) % (SIZE + 8)) - 4;
      var sx = s.x + 2 * Math.sin((t + i) * Math.PI * 2);
      var g = ctx.createRadialGradient(sx, sy, 0, sx, sy, 5);
      g.addColorStop(0, 'rgba(255,255,255,' + (0.95 * pulse) + ')');
      g.addColorStop(0.35, 'rgba(255,180,220,' + (0.7 * pulse) + ')');
      g.addColorStop(1, 'rgba(255,20,147,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(sx, sy, 5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    try {
      link.href = canvas.toDataURL('image/png');
      link.type = 'image/png';
    } catch (e) { /* ignore */ }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
