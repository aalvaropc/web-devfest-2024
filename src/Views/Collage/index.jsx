
import CollageGallery from "../../components/Collage";
import "./Collage.css";
const Collage = () => {

    const photos = [
        './collage/c1.jpg',
        './collage/c2.jpg',
        './collage/c3.jpg',
        // './collage/c4.jpg',
        './collage/c5.jpg',
       './collage/c6.jpg',
        './collage/c7.jpg',
        './collage/c8.jpg',
        './collage/c9.jpg',
    
    ];
  return (
    <>
      <div className="calendario">
      <h1 className="collage__titulo">Recuerdos del Devfest 2023</h1>
        
        <CollageGallery photos={photos} />
      </div>
        

    </>
  );
};

export default Collage;
