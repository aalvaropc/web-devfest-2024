import './SalonColumn.css';

// eslint-disable-next-line react/prop-types
const SalonColumn = ({ salon }) => {
  // eslint-disable-next-line react/prop-types
  if (!salon.speaker) {
    return null;
  }

  return (
    // eslint-disable-next-line react/prop-types
    <div className={`salon-column ${salon.environment.toLowerCase()}-env`}>
      <div className="speaker-info">
        <img
          // eslint-disable-next-line react/prop-types
          src={`${salon.image}`}
          // eslint-disable-next-line react/prop-types
          alt={salon.speaker}
          className="speaker-image"
        />
        <div className="speaker-details">
          
          <p className="speaker-name">{salon.speaker}</p>
          
          <p className="speaker-topic">{salon.topic}</p>
          
          {salon.environment && <div className="environment-salon">{salon.environment} - {salon.name}</div>}
        </div>
      </div>
    </div>
  );
};

export default SalonColumn;
