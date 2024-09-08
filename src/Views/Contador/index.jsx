import CountdownTimer from "../../components/Contador";
import "./Contador.css";
const Contador = () => {
  return (
    <>
              <div className="mensajeprefooter">
        <h1 className="mensajeprefooter__titulo">Estaremos de regreso en ...</h1>
      </div>
        <h1 className="contador"> 
            <CountdownTimer targetDate="2024-12-31T23:59:59" />
        </h1>
    </>
  );
};

export default Contador;