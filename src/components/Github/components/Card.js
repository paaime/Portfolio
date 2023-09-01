import '../styles/card.scss';

export default function Card({ data }) {
  return (
    <a rel="noreferrer" href={data.link} target="_blank" className="card">
      <div className="card-content">
        <p className="title">{data.repoName}</p>
        <p className="info">{data.description}</p>
        <ul>
          {data.techno.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
