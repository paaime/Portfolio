import "./styles/hero.scss";

export default function Hero() {
  return (
    <div data-aos="fade-in" data-aos-delay="500" className="hero">
      <p>Bonjour,</p>
      <h2>Paul-Arthur Aimé.</h2>
      <h2>Étudiant à 42, passioné de dévelopement web.</h2>
      <p>
        Passionné depuis jeune par l'informatique puis le{" "}
        <span>développement web.</span>
        J'étudie à <span>l'école 42</span> de Lyon et passe mon temps à
        apprendre les <span>nouveautés du milieu du Dev web.</span>
      </p>
      <a href="/cv.pdf" target="_blank" className="cv-button">
        Voir mon CV
      </a>
    </div>
  );
}
