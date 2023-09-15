import Luffyswap from './components/Luffyswap';
import Avaxslime from './components/Avaxslime';
import './styles/projects.scss';
import { projectsData } from './data';
import Project from './components/Project';

export default function Projects() {
  return (
    <div data-aos="fade-in" id="projects" className="projects">
      <h3>
        <span>02.</span>Quelques projets
      </h3>
      {projectsData.map((item, index) => (
        <Project key={index} data={item} />
      ))}
    </div>
  );
}
