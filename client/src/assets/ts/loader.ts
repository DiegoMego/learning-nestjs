export function setCanvasDimensions(canvas: HTMLCanvasElement) {
  const dpi = window.devicePixelRatio;
  const w = parseFloat(getComputedStyle(canvas).getPropertyValue('width').slice(0, -2));
  const h = parseFloat(getComputedStyle(canvas).getPropertyValue('height').slice(0, -2));
  canvas.setAttribute('width', `${w * dpi}`);
  canvas.setAttribute('height', `${h * dpi}`);
  const s = Math.min(w, h);
  return { w, h, s };
}

export function useCircle(w: number, h: number, s: number) {
  const pi = Math.PI;
  let startAngle = 0;

  function toRadians(deg: number): number {
    return (deg / 180) * pi;
  }

  function findArcCoordinates(x: number, y: number, radius: number, angle: number): Array<number> {
    const pointX = x + Math.cos(angle) * radius;
    const pointY = y + Math.sin(angle) * radius;
    return [pointX, pointY];
  }

  function getGradientColor(
    ctx: CanvasRenderingContext2D,
    r: number,
    startRad: number,
    endRad: number,
  ): CanvasGradient {
    const [x1, y1] = findArcCoordinates(w / 2, h / 2, r, startRad);
    const [x2, y2] = findArcCoordinates(w / 2, h / 2, r, endRad - pi);
    const linearGradient = ctx.createLinearGradient(
      x1,
      y1,
      x2,
      y2,
    );
    linearGradient.addColorStop(0, '#bfbf4d');
    linearGradient.addColorStop(1, '#f45000');
    return linearGradient;
  }

  function drawCircle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    start: number,
    end: number,
    color: CanvasGradient,
    width: number,
  ) {
    ctx.beginPath();
    const [coordX, coordY] = findArcCoordinates(x, y, r, start);
    ctx.moveTo(coordX, coordY);
    ctx.arc(x, y, r, start, end);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash([]);
    ctx.stroke();
  }

  function drawDottedCircle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    start: number,
    end: number,
    color: CanvasGradient,
    width: number,
  ) {
    ctx.beginPath();
    const [coordX, coordY] = findArcCoordinates(x, y, r, start);
    ctx.moveTo(coordX, coordY);
    ctx.arc(x, y, r, start, end);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash([4, 10]);
    ctx.stroke();
  }

  function drawCircles(
    ctx: CanvasRenderingContext2D,
    start: number,
    end: number,
  ) {
    const r = s * 0.2;
    const startRad = toRadians(start);
    const endRad = toRadians(end);
    const color = getGradientColor(ctx, r, startRad, endRad);
    drawCircle(ctx, w / 2, h / 2, r, startRad, endRad, color, 4);
    drawDottedCircle(ctx, w / 2, h / 2, r * 0.9, startRad, endRad, color, 4);
    drawCircle(ctx, w / 2, h / 2, r * 0.8, startRad, endRad, color, 4);
  }

  function rotateCircle(ctx: CanvasRenderingContext2D) {
    startAngle += 1;
    if (startAngle === 360) startAngle = 0;
    drawCircles(ctx, startAngle, startAngle + 360);
  }

  return rotateCircle;
}

export function useText(
  text: string,
  w: number,
  h: number,
) {
  let dashlen = 0;
  let incr = 1;

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.setLineDash([dashlen, 1000]);
    ctx.lineWidth = 4;
    ctx.strokeText(text, w / 2, h / 2);
  }

  function dotted(ctx: CanvasRenderingContext2D) {
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.setLineDash([1, 1]);
    ctx.lineWidth = 1;
    ctx.strokeText(text, w / 2, h / 2);
  }

  function loop(ctx: CanvasRenderingContext2D) {
    dashlen += incr;
    draw(ctx);
    dotted(ctx);
    if (dashlen === 0) incr = 1;
    if (dashlen === 310) incr = -1;
  }

  return loop;
}
