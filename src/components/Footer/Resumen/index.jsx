import "./Resumen.css";
const Resumen = () => {
  return (
    <div className="resumen">
      <h1 className="resumen__titulo">Resumen del evento</h1>
      <ol className="resumen__lista">
        <li className="resumen__lista__item">Lugar: Calle Bolivar N° 232, Ica, Perú (Local Central)</li>
        <li className="resumen__lista__item">Fecha: 02 de Diciembre 2024 </li>
        <li className="resumen__lista__item">Hora: 09:30 am - 6:30pm</li>
      </ol>
    </div>
  );
};

export default Resumen;
