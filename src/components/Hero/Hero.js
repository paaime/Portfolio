import './styles/hero.scss';

export default function Hero() {
  return (
    <div data-aos="fade-in" data-aos-delay="500" className="hero">
      <p>Bonjour,</p>
      <h2>Paul-Arthur Aimé.</h2>
      <h2>Étudiant à 42, freelance en dévelopement web.</h2>
      <p>
        Passionné depuis jeune par l'informatique puis le{' '}
        <span>développement web.</span>
        J'étudie à <span>l'école 42</span> de Lyon et passe mon temps à
        apprendre les <span>nouveautés du milieu du Dev web.</span>
      </p>
      <a href="/cv.pdf" target="_blank" className="cv-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Malt"
          role="img"
          viewBox="0 0 512 512"
          className="malt-icon"
        >
          <rect width="512" height="512" rx="15%" fill="#ffffff" />
          <path
            fill="#FC5656"
            d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
          />
        </svg>
        Me contacter
      </a>
    </div>
  );
}
