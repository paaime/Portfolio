import ParallaxCard from './ParallaxCard';

export default function Project({ data }) {
  return (
    <div className="project">
      <ParallaxCard image={data.image} rightImage={data.rightImage} />
      <a
        href={data.link}
        target="_blank"
        rel="noreferrer"
        className="info"
        style={{
          alignItems: data.rightImage ? 'flex-start' : 'flex-end',
          textAlign: data.rightImage ? 'left' : 'right',
        }}
      >
        <p className="featured">{data.type}</p>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <ul className="language">
          {data.techno.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a href={data.link} target="_blank" rel="noreferrer">
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
      </a>
    </div>
  );
}
