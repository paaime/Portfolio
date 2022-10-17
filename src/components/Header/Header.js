import "./styles/header.scss";

export default function Header(props) {
  const { burgerMenu, setBurgerMenu } = props.burgerMenu;

  const handleBurgerMenu = () => {
    console.log("test");
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  };
  return (
    <header>
      <img src="/img/profile.png" />
      <div className="navbar">
        <nav>
          <a href="#about">
            <span>01.</span>À propos
          </a>
        </nav>
        <nav>
          <a href="#projects"><span>02.</span>Projets</a>
        </nav>
        <nav>
          <a href="#github"><span>03.</span>Github</a>
        </nav>
        <nav>
          <a href="#contact"><span>04.</span>Contact</a>
        </nav>
        <button>CV</button>
      </div>
      <img
        className="menu-logo"
        onClick={handleBurgerMenu}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
      />
    </header>
  );
}
