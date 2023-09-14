import './styles/language-gallery.scss';

export default function LanguageGallery() {
  return (
    <div className="language-gallery" id="language-gallery">
      <h3>
        <span>04.</span>Langages et Frameworks
      </h3>
      <div className="gallery">
        <div className="item">
          <img alt="Html" src="img/icons/html.png" />
          <p>HTML</p>
        </div>
        <div className="item">
          <img alt="Css" src="img/icons/css.png" />
          <p>CSS</p>
        </div>
        <div className="item">
          <img alt="React" src="img/icons/react.png" />
          <p>React.JS</p>
        </div>
        <div className="item">
          <img alt="Node" src="img/icons/node-js.png" />
          <p>Node.JS</p>
        </div>
        <div className="item">
          <img alt="Javascript" src="img/icons/javascript.png" />
          <p>Javascript</p>
        </div>
        <div className="item">
          <img alt="Wordpress" src="img/icons/wordpress.png" />
          <p>Wordpress</p>
        </div>
        <div className="item">
          <img alt="Figma" src="img/icons/figma.png" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}
