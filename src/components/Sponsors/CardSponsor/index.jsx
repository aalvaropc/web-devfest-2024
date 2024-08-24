import "./CardSponsor.css";
import PropTypes from 'prop-types';

const CardSponsor = ({name, link, imagen}) => {

CardSponsor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

return (
  <div className="cardsponsor">
    <a
      href={link}
      className="cardsponsor__click"
      target="_blank"
      rel="noreferrer"
    >
    <img src={imagen} alt="" className="cardsponsor__imagen" />
    </a>
    <div className="cardsponsor__type">{name}</div>
  </div>
);
};

export default CardSponsor;
