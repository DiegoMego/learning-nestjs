import React, { useRef, useState } from 'react';
import styles from '../../assets/scss/error/unauthorized.module.scss';

function Unauthorized() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [eye, setEye] = useState({ cx: 130, cy: 65 });
  const inlineDivStyle = { '--mouse-x': pos.x, '--mouse-y': pos.y } as React.CSSProperties;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (containerRef.current !== null) {
      const x = e.clientX / containerRef.current.offsetWidth;
      const y = e.clientY / containerRef.current.offsetHeight;
      const cx = 115 + 30 * x;
      const cy = 50 + 30 * y;
      setPos({ x, y });
      setEye({ cx, cy });
    }
    return undefined;
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={inlineDivStyle}
    >
      <svg id="robot-error" viewBox="0 0 260 118.9">
        <defs>
          <clipPath id="white-clip">
            <circle id="white-eye" fill="#cacaca" cx="130" cy="65" r="20" />
          </clipPath>
          <text id="text-s" className={styles.errortext} y="106">403</text>
        </defs>
        <path className={styles.alarm} fill="#e62326" d="M120.9 19.6V9.1c0-5 4.1-9.1 9.1-9.1h0c5 0 9.1 4.1 9.1 9.1v10.6" />
        <use href="#text-s" x="-0.5px" y="-1px" fill="black" />
        <use href="#text-s" fill="#2b2b2b" />
        <g id="robot">
          <g className={styles.eyewrap}>
            <use href="#white-eye" />
            <circle id="eyef" className={styles.eye} clipPath="url(#white-clip)" fill="#000" stroke="#2aa7cc" strokeWidth="2" strokeMiterlimit="10" cx={eye.cx} cy={eye.cy} r="11" />
            <ellipse id="white-eye" fill="#2b2b2b" cx="130" cy="40" rx="18" ry="12" />
          </g>
          <circle className={styles.lightblue} cx="105" cy="32" r="2.5" id="tornillo" />
          <use href="#tornillo" x="50" />
          <use href="#tornillo" x="50" y="60" />
          <use href="#tornillo" y="60" />
        </g>
      </svg>
      <h1>You are not allowed to enter here</h1>
      <h2>
        Go
        <a target="_blank" href="https://www.youtube.com/watch?v=JccW-mLdNe0" rel="noreferrer">
          Home!
        </a>
      </h2>
    </div>
  );
}

export default Unauthorized;
