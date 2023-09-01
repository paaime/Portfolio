import Luffyswap from './components/Luffyswap';
import Avaxslime from './components/Avaxslime';
import './styles/projects.scss';

export default function Projects() {
  return (
    <div data-aos="fade-in" id="projects" className="projects">
      <h3>
        <span>02.</span>Quelques projets
      </h3>
      <Luffyswap />
      <Avaxslime />
    </div>
  );
}
