import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">DevFest for Ica</h1>
      <p className="banner__text">
        ¡El festival de tecnología más grande de la región! Aprenderemos sobre
        desarrollo de aplicaciones móviles, desarrollo web, habilidades blandas,
        inteligencia artificial, startups y competencias presentado por expertos
        de todo el mundo.
      </p>
      <div className="banner__buttons">
        <span className="banner__buttons__item--first">Live</span>
        <span className="banner__buttons__item--second">Tecnología</span>
        <div className="banner__buttons__item__efect">
          <span className="banner__buttons__item__efect--third">
            <a
              href="https://www.eventbrite.com/e/entradas-devfest-ica-718100236137"
              target="_blank"
              rel="noreferrer"
            >
              Regístrate
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
