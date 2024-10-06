/* eslint-disable react/prop-types */
import './Collage.css'; // Importamos los estilos CSS

// eslint-disable-next-line react/prop-types
const CollageGallery = ({ photos }) => {
  return (
    <div className="collage-container">
      {photos.map((photo, index) => (
        <div key={index} className="photo-wrapper">
          <img src={photo} alt={`Memory ${index + 1}`} className="photo" />
        </div>
      ))}
    </div>
  );
};

export default CollageGallery;