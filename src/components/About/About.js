import './styles/about.scss';

export default function About() {
  return (
    <div data-aos="fade-up" id="about" className="about">
      <h3>
        <span>01.</span> À propos de moi<span></span>
      </h3>
      <div className="about-wrapper">
        <div className="about-me">
          <p>
            Bonjour ! Je m'appelle <span>Paul-Arthur</span>, j'ai{' '}
            <span>20 ans</span> et j'ai commencé à m'intéresser au{' '}
            <span>développement web</span> il y a <span>5-6 ans</span> grâce à
            <span> OpenClassRooms et Youtube</span>. J'ai donc commencé à faire
            des petits projets pour m'entrainer et pour{' '}
            <span>apprendre les bases du web (HTML, CSS, JS).</span>
            <br /> J'ai toujours adoré apprendre par moi-même en{' '}
            <span>m'exerçant directement.</span>
            <br /> Aujourd'hui je suis étudiant à <span>42 Lyon</span>, je
            réalise des projets personnels avec des languages tels que{' '}
            <span>React, Node, Mongo Db, Python (scrapping) et d'autres.</span>
            <br />
            J'aime également beaucoup le monde des <span>Blockchain</span> et ai
            donc réaliser des projets <span>mêlant ces deux passions.</span>
            <br /> Je suis actuellement
            <span> développeur web freelance. </span>
          </p>
        </div>
        <div className="image-wrapper">
          <img src="/img/profile.png" />
        </div>
      </div>
    </div>
  );
}
