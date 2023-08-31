import ParallaxCard from './ParallaxCard';

export default function Luffyswap(props) {
  return (
    <div className="project luffyswap">
      <ParallaxCard />
      <div className="info">
        <p className="featured">Projet personnel</p>
        <h4>Luffy Swap</h4>
        <p>
          Une application Web3 permettant de stacker des cryptomonnaies pour
          obtenir un rendement.
        </p>
        <ul className="language">
          <li>React.js</li>
          <li>Ether.js</li>
          <li>Typescript</li>
          <li>Avalanche Blockchain</li>
        </ul>
        <a
          href="https://luffy-swap-pm1duq6o5-luffyswapprod.vercel.app/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-external-link"
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
