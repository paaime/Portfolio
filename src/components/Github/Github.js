import Card from "./components/Card";
import "./styles/github.scss";
import { cardData } from "./data";

export default function Github() {
  return (
    <div data-aos="fade-in" data-aos-delay="500" id="github" className="github">
      <h3>
        <span>03.</span>Github
      </h3>
      <p className="subtitle">en cours...</p>
      <div className="card-list">
        {cardData.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}
