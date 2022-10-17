import "./styles/contact.scss";

export default function Contact() {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="500"
      id="contact"
      className="contact"
    >
      <h3>
        <span>04.</span>Contact
      </h3>
      <p>
        Vous pouvez me contacter par Linkedin ou bien par mail à
        <span> aimepaularthur@gmail.com</span> ou bien en appuyant sur le bouton
        !
      </p>
      <button>
        <a href="mailto: aimepaularthur@gmail.com">Bonjour !</a>
      </button>
    </div>
  );
}
