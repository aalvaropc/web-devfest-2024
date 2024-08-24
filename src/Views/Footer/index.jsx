import Logo from "../../components/Footer/Logo";
import Redes from "../../components/Footer/Redes";
import Resumen from "../../components/Footer/Resumen";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="mensajeprefooter">
        <h1 className="mensajeprefooter__titulo">¡Los esperamos!</h1>
      </div>
      <footer className="footer">
        <Logo></Logo>
        <Resumen></Resumen>
        <Redes></Redes>
      </footer>
    </>
  );
};

export default Footer;
