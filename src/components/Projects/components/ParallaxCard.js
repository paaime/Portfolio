import { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function ParallaxCard({ image, rightImage }) {
  const cardRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const [rX, setRX] = useState(0);
  const [rY, setRY] = useState(0);

  const [tX, setTX] = useState(0);
  const [tY, setTY] = useState(0);

  useEffect(() => {
    setRX(mousePX() * 30);
    setRY(mousePY() * -30);
    setTX(mousePX() * -40);
    setTY(mousePY() * -40);
  }, [mouseX, mouseY]);

  let width = cardRef.current ? cardRef.current.offsetWidth : 0;
  let height = cardRef.current ? cardRef.current.offsetHeight : 0;

  function mousePX() {
    return mouseX / width;
  }
  function mousePY() {
    return mouseY / height;
  }

  function cardBgTransform() {
    const tX = mousePX * -40;
    const tY = mousePY * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  }

  function handleMouseMove(e) {
    setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
    setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
  }
  function handleMouseEnter() {
    clearTimeout(mouseLeaveDelay);
  }
  function handleMouseLeave() {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  }
  return (
    <div
      ref={cardRef}
      className="thumbnail-wrapper"
      style={{ order: rightImage ? 1 : 'inherit' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="thumbnail"
        style={{ transform: `rotateY(${rX}deg) rotateX(${rY}deg)` }}
      >
        <div
          className="thumbnail-bg"
          style={{
            transform: `translateX(${tX}px) translateY(${tY}px)`,
            backgroundImage: `url('/img/${image}')`,
          }}
        ></div>
      </div>
    </div>
  );
}
