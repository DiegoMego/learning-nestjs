import { useEffect, useRef } from 'react';
import { setCanvasDimensions, useCircle, useText } from '../../assets/js/loader.js';
// import { Col, Row } from 'react-bootstrap';

export default function LoginLoader() {
  const canvasRef = useRef(null);
  const draw = (ctx, drawCircle, drawText) => {
    drawCircle(ctx);
    drawText(ctx);
  }

  useEffect(_ => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { w, h, s} = setCanvasDimensions(canvas);
    const drawCircle = useCircle(w, h, s);
    const drawText = useText('QIMI', w, h);
    const render = _ => {
      ctx.clearRect(0, 0, w, h);
      draw(ctx, drawCircle, drawText);
      setTimeout(render, 20);
    }
    render();
  }, [draw]);

  return (
    <canvas ref={canvasRef} className='qimi-loader'></canvas>
    // <Row className="g-0 position-absolute d-flex align-items-center w-100 h-100">
    //   <Col xs={12} sm={4}></Col>
    //   <Col xs={12} sm={4}>
    //     <img src="/public/images/auth-loading.svg" alt="Cargando..." />
    //   </Col>
    //   <Col xs={12} sm={4}></Col>
    // </Row>
  );
}