import Card from './components/Card';
import './styles/github.scss';
import { cardData } from './data';
import { useEffect } from 'react';

export default function Github() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const wrapper = document.querySelector('.card-list');

    wrapper.addEventListener('mousemove', function ($event) {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = $event.clientX - rect.left;
        const y = $event.clientY - rect.top;

        card.style.setProperty('--xPos', `${x}px`);
        card.style.setProperty('--yPos', `${y}px`);
      });
    });
  }, []);
  return (
    <div data-aos="fade-in" id="github" className="github">
      <h3>
        <span>03.</span>Github
      </h3>
      <p className="subtitle">en cours...</p>
      <div className="card-list">
        {cardData.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
