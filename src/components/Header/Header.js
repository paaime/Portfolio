import './styles/header.scss';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0';
      } else {
        document.getElementById('header').style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  const handleBurgerMenu = () => {
    document
      .getElementById('burger-menu')
      .classList.toggle('burger-menu-expand');
  };
  return (
    <header id="header">
      <img src="/img/profile.png" alt="Paul-Arthur" />
      <div className="navbar">
        <nav>
          <a href="#about">
            <span>01.</span>À propos
          </a>
        </nav>
        <nav>
          <a href="#projects">
            <span>02.</span>Projets
          </a>
        </nav>
        <nav>
          <a href="#github">
            <span>03.</span>Github
          </a>
        </nav>
        <nav>
          <a href="#contact">
            <span>04.</span>Contact
          </a>
        </nav>
        <a className="cv" href="#contact">
          Contact
        </a>
      </div>
      <img
        className="menu-logo"
        onClick={handleBurgerMenu}
        alt="menu"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
      />
    </header>
  );
}
