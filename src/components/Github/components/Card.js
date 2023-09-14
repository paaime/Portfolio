import '../styles/card.scss';

export default function Card({ data }) {
  return (
    <div className="card">
      <div
        className="card-content"
        style={{
          backgroundImage: `url(img/icons/${data.icon})`,
        }}
      >
        <img alt={data.title} src={`img/icons/${data.icon}`} />
        <div className="wrapper">
          <p className="title">{data.title}</p>
          <p className="info">{data.description}</p>
          {/* <ul>
            {data.techno.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
