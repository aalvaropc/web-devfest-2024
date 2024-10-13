import "./Redes.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Redes = () => {
  return (
    <div className="redes">
      <h1 className="redes__titulo">Nuestras redes sociales</h1>
      <div className="redes__container">
        <a
          href="https://www.instagram.com/gdgica/?hl=es"
          className="redes__container__item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram color="white"></AiFillInstagram>
        </a>
        <a
          href="https://www.facebook.com/gdgica/"
          className="redes__container__item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook color="white"></AiFillFacebook>
        </a>
        <a
          href="https://www.linkedin.com/company/gdg-ica/"
          className="redes__container__item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin color="white"></AiFillLinkedin>
        </a>
        <a
          href="https://twitter.com/GDGICA"
          className="redes__container__item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter color="white"></FaSquareXTwitter>
        </a>
      </div>
    </div>
  );
};

export default Redes;
