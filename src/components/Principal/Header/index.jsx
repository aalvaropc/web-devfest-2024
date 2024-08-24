import { useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import ModalForm from "../../ModalForm/ModalForm";

const Header = () => {
  const lista = [
    { nombre: "Acerca", direccion: "#acerca" },
    { nombre: "Speakers", direccion: "#speakers" },
    // { nombre: "Calendario", direccion: "#calendario" },
    { nombre: "Sponsors", direccion: "#sponsors" },
    { nombre: "App", direccion: "#mobile" },
    { nombre: "Lugar", direccion: "#lugar" },
  ];
  const [hamburguesa, setHamburguesa] = useState(window.innerWidth > 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const redirectToInicio = () => {
    window.location.href = "#inicio";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navegador  ${
          !isScrolled
            ? "navegador__efect--active"
            : "navegador__efect--desactive"
        }`}
      >
        <img
          src="./img/LogoDevBlancomm.png"
          alt=""
          className="navegador__logo"
          onClick={redirectToInicio}
        />
        <ul
          className={`navegador__lista ${
            window.innerWidth < 768
              ? hamburguesa
                ? ""
                : "navegador__lista--desactive"
              : ""
          }`}
        >
          {lista.map((dato, index) => {
            return (
              <li key={index} className="navegador__lista__item">
                <a href={dato.direccion} className="navegador__lista__item__a">
                  {dato.nombre}
                </a>
              </li>
            );
          })}

          <li className="navegador__lista__item--active">
            <a onClick={() => setShowModal(true)} className="navegador__lista__item--active__a">Registrate</a>
          </li>
        </ul>
        {window.innerWidth < 768 && (
          <span
            className="navegador__menu"
            onClick={() => setHamburguesa(!hamburguesa)}
          >
            <AiOutlineMenu></AiOutlineMenu>
          </span>
        )}
      </nav>
      {isScrolled ? (
        <div className="filtro__header--active"></div>
      ) : (
        <div className="filtro__header--desactive"></div>
      )}
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
