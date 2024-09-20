import "./Mapa.css";

const Mapa = () => {
  return (
    <div className="mapa__component md:md__margin lg:lg__width md:md__height lg:lg__height">
    
      
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15481.834389268504!2d-75.7504131!3d-14.0500755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2d222156cc9%3A0x4cba745cedd6457f!2sUniversidad%20Continental%2C%20campus%20Ica!5e0!3m2!1sen!2spe!4v1726858305390!5m2!1sen!2spe"
        >
          <a href="https://www.gps.ie/car-satnav-gps/">Devfest</a>
        </iframe>
      </div>
    
  );
};

export default Mapa;
