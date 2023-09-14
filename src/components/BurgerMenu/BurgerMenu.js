import './styles/burger-menu.scss';
import { useEffect, useRef } from 'react';

export default function BurgerMenu() {
  const burgerRef = useRef(null);
  const handleClose = () => {
    document
      .getElementById('burger-menu')
      .classList.remove('burger-menu-expand');
  };

  const handleOutsideClick = (e) => {
    if (burgerRef.current && !burgerRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div id="burger-menu" className="burger-menu" ref={burgerRef}>
      <img
        onClick={handleClose}
        src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
        alt="close"
      />
      <nav>
        <a href="#about" onClick={handleClose}>
          <span>01.</span>À propos
        </a>
      </nav>
      <nav>
        <a href="#projects" onClick={handleClose}>
          <span>02.</span>Projets
        </a>
      </nav>
      <nav>
        <a href="#github" onClick={handleClose}>
          <span>03.</span>Compétences
        </a>
      </nav>
      <nav>
        <a href="#language-gallery" onClick={handleClose}>
          <span>04.</span>Langages et Frameworks
        </a>
      </nav>
      <nav>
        <a href="#contact" onClick={handleClose}>
          <span>05.</span>Contact
        </a>
      </nav>
    </div>
  );
}
