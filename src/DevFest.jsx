import Footer from "./Views/Footer";
import Principal from "./Views/Principal";
import Speakers from "./Views/Speakers";
import Sponsors from "./Views/Sponsors";
import Acerca from "./Views/Acerca";
import Ubicanos from "./Views/Ubicanos";
import Calendario from "./Views/Calendario";
import Schedule from "./Views/Schedule";
import Mobile from "./Views/Mobile";
import Contador from "./Views/Contador"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Collage from "./Views/Collage";
function App() {

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500, 
    });
  }, []);


  const componentes = [
    { id: "acerca", componente: <Acerca /> },
    { id: "speakers", componente: <Speakers /> },
    // { id: "calendario", componente: <Calendario /> },
    { id: "calendario", componente: <Schedule /> },
    { id: "sponsors", componente: <Sponsors /> },
    { id: "mobile", componente: <Mobile /> },
    { id: "contador", componente: <Contador /> },
    { id: "lugar", componente: <Ubicanos /> },
    { id: "collage", componente: <Collage /> },
  ];

  return (
    <>
      <Principal />
      {componentes.map((item) => {
        return (
          <div
            data-aos="fade-right"
            key={item.id}
            id={item.id}
            className="contenedor__efecto"
          >
            {item.componente}
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default App;
