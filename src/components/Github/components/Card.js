import "../styles/card.scss";

export default function Card(props) {
  const { data } = props;
  console.log(data);
  return (
    <a href={data.link} target="_blank" className="card">
      <p className="title">{data.repoName}</p>
      <p className="info">{data.description}</p>
      <ul>
        {data.techno.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </a>
  );
}
