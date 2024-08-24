import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src="./img/imageem.png" alt="" className="logo__imagen" />
      <p className="logo__texto">
        GDG Ica es el capítulo oficial de Google Developers Group en la región
        de Ica. Es una comunidad de desarrolladores y entusiastas de la
        tecnología que se reúnen para explorar nuevas tecnologías y aprender
        juntos.
      </p>
    </div>
  );
};

export default Logo;
