import Mapa from '../../components/Ubicanos/Mapa'
import Texto from '../../components/Ubicanos/Texto'
import "./Ubicanos.css"
const Ubicanos = () => {
  return (
        <div className="ubicacion">
          <div className="ubicacion__titulo"><Texto /></div>
          <div className="ubicacion__container container"><Mapa /></div>
        </div>
  );
};

export default Ubicanos;