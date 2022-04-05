import styles from '../../assets/scss/error/unauthorized.module.scss';
import { useRef, useState } from "react";

const Unauthorized = _ => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({x: 0, y: 0});
  const [eye, setEye] = useState({cx: 130, cy: 65});

  const handleMouseMove = e => {
    let x = e.clientX / containerRef.current.offsetWidth;
    let y = e.clientY / containerRef.current.offsetHeight;
    let cx = 115 + 30 * x;
    let cy = 50 + 30 * y;
    setPos({x, y});
    setEye({cx, cy});
  }

  return (
    <div className={styles.container} ref={containerRef} onMouseMove={e => handleMouseMove(e)} style={{'--mouse-x': pos.x, '--mouse-y': pos.y}}>
      <svg id="robot-error" viewBox="0 0 260 118.9">
        <defs>
          <clipPath id="white-clip">
            <circle id="white-eye" fill="#cacaca" cx="130" cy="65" r="20" />
          </clipPath>
          <text id="text-s" class={styles.errortext} y="106">403</text>
        </defs>
        <path class={styles.alarm} fill="#e62326" d="M120.9 19.6V9.1c0-5 4.1-9.1 9.1-9.1h0c5 0 9.1 4.1 9.1 9.1v10.6" />
        <use href="#text-s" x="-0.5px" y="-1px" fill="black" />
        <use href="#text-s" fill="#2b2b2b" />
        <g id="robot">
          <g className={styles.eyewrap}>
            <use href="#white-eye" />
            <circle id="eyef" class={styles.eye} clip-path="url(#white-clip)" fill="#000" stroke="#2aa7cc" stroke-width="2" stroke-miterlimit="10" cx={eye.cx} cy={eye.cy} r="11" />
            <ellipse id="white-eye" fill="#2b2b2b" cx="130" cy="40" rx="18" ry="12" />
          </g>
          <circle class={styles.lightblue} cx="105" cy="32" r="2.5" id="tornillo" />
          <use href="#tornillo" x="50"></use>
          <use href="#tornillo" x="50" y="60"></use>
          <use href="#tornillo" y="60"></use>
        </g>
      </svg>
      <h1>You are not allowed to enter here</h1>
      <h2>Go <a target="_blank" href="https://www.youtube.com/watch?v=JccW-mLdNe0">Home!</a></h2>
    </div>
  );
}

export default Unauthorized;