export function setCanvasDimensions(canvas) {
  const dpi = window.devicePixelRatio;
  const w = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  const h = getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  canvas.setAttribute('width', w * dpi);
  canvas.setAttribute('height', h * dpi);
  const s = Math.min(w, h);
  return { w, h, s };
}

export function useCircle(w, h, s) {
  const pi = Math.PI;
  var startAngle = 0;
  function drawCircles(ctx, startAngle, endAngle) {
    const r = s * 0.2;
    const startRad = toRadians(startAngle);
    const endRad = toRadians(endAngle);
    const color = getGradientColor(ctx, r, startRad, endRad);
    drawCircle(ctx, w / 2, h / 2, r, startRad, endRad, color, 4);
    drawDottedCircle(ctx, w / 2, h / 2, r * 0.9, startRad, endRad, color, 4);
    drawCircle(ctx, w / 2, h / 2, r * 0.8, startRad, endRad, color, 4);
  }

  function drawCircle(ctx, x, y, r, start, end, color, width) {
    ctx.beginPath();
    ctx.moveTo(...findArcCoordinates(x, y, r, start));
    ctx.arc(x, y, r, start, end);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash([]);
    ctx.stroke();
  }
  
  function drawDottedCircle(ctx, x, y, r, start, end, color, width) {
    ctx.beginPath();
    ctx.moveTo(...findArcCoordinates(x, y, r, start));
    ctx.arc(x, y, r, start, end);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash([4, 10]);
    ctx.stroke();
  }

  function getGradientColor(ctx, r, startRad, endRad) {
    const linearGradient = ctx.createLinearGradient(...findArcCoordinates(w / 2, h / 2, r, startRad), ...findArcCoordinates(w / 2, h / 2, r, endRad - pi));
    linearGradient.addColorStop(0, '#bfbf4d');
    linearGradient.addColorStop(1, '#f45000');
    return linearGradient;
  }

  function toRadians(deg) {
    return deg / 180 * pi;
  }

  function findArcCoordinates(x, y, radius, angle) {
    const pointX = x + Math.cos(angle) * radius;
    const pointY = y + Math.sin(angle) * radius;
    return [pointX, pointY];
  }

  function rotateCircle(ctx) {
    startAngle++;
    if (startAngle == 360) startAngle = 0;
    drawCircles(ctx, startAngle, startAngle + 360);
  }

  return rotateCircle;
}

export function useText(text, w, h) {
  var dashlen = 0, incr = 1;

  function draw(ctx) {
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.setLineDash([dashlen, 1000]);
    ctx.lineWidth = 4;
    ctx.strokeText(text, w / 2, h / 2);
  }

  function dotted(ctx) {
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.setLineDash([1, 1]);
    ctx.lineWidth = 1;
    ctx.strokeText(text, w / 2, h / 2);
  }

  function loop(ctx) {
    dashlen += incr;
    draw(ctx, dashlen);
    dotted(ctx);
    if (dashlen == 0) incr = 1;
    if (dashlen == 310) incr = -1;
  }

  return loop;
}