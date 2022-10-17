import "./styles/burger-menu.scss";

export default function BurgerMenu(props) {
  const { burgerMenu, setBurgerMenu } = props.burgerMenu;

  const handleBurgerMenu = () => {
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  };
  return (
    <div className="burger-menu">
      <img onClick={handleBurgerMenu} src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png" />
      <nav href="#about">
        <span>01.</span>À propos
      </nav>
      <nav>
        <span>02.</span>Expériences
      </nav>
      <nav>
        <span>03.</span>Travail
      </nav>
      <nav>
        <span>04.</span>Contact
      </nav>
      <button>CV</button>
    </div>
  );
}
