import './styles/burger-menu.scss';

export default function BurgerMenu(props) {
  const { burgerMenu, setBurgerMenu } = props.burgerMenu;

  const handleBurgerMenu = () => {
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  };
  const handleNav = () => {};

  return (
    <div className="burger-menu">
      <img
        onClick={handleBurgerMenu}
        src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
        alt="close"
      />
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
      <a className="cv" href="/cv.pdf" target="_blank">
        CV
      </a>
    </div>
  );
}
