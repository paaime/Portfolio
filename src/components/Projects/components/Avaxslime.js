import ParallaxCard from './ParallaxCard';

export default function Avaxslime(props) {
  return (
    <div className="project avaxslime">
      <ParallaxCard />
      <div className="info">
        <p className="featured">Projet personnel</p>
        <h4>AvaxSlime</h4>
        <p>
          Une Web App pour acheter des NFT de la collection AvaxSlime via la
          blockchain.
        </p>
        <ul className="language">
          <li>React.js</li>
          <li>Ether.js</li>
          <li>Web3</li>
        </ul>
        <a href="https://avaxslime.com/" rel="noreferrer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link"
          >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}
