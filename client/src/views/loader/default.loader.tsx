import React, { useEffect, useRef } from 'react';
import {
  setCanvasDimensions,
  useCircle,
  useText,
} from '../../assets/ts/loader';

// eslint-disable-next-line no-unused-vars
type DrawCircleType = (ctx: CanvasRenderingContext2D) => void;

export default function DefaultLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw = (
    ctx: CanvasRenderingContext2D,
    drawCircle: DrawCircleType,
    drawText: DrawCircleType,
  ) => {
    drawCircle(ctx);
    drawText(ctx);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas !== null) {
      const ctx = canvas.getContext('2d');
      const { w, h, s } = setCanvasDimensions(canvas);
      const drawCircle = useCircle(w, h, s);
      const drawText = useText('QIMI', w, h);
      const render = () => {
        if (ctx !== null) {
          ctx.clearRect(0, 0, w, h);
          draw(ctx, drawCircle, drawText);
          setTimeout(render, 20);
        }
      };
      render();
    }
  }, [draw]);

  return <canvas ref={canvasRef} className="custom-loader" />;
}
