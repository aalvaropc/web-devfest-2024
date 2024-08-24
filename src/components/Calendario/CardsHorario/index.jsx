import React from "react";
import "./CardsHorario.css";
const CardsHorario = ({ titulo, imagen, nombre, oficio, track }) => {
  const claseEstilo = track === "free-time" ? "cardsHorariobreak" : "cardsHorario";
  const claseEstilo2 = track === "free-time" ? "cardsHorario__tarjeta__contenedor__speaker__free" : "cardsHorario__tarjeta__contenedor__speaker";
  return (
    <div className={claseEstilo}>
      <h1 className="cardsHorario__titulo">{titulo}</h1>
      <div className="cardsHorario__tarjeta">
        <img src={imagen} alt="" className="cardsHorario__tarjeta__imagen" />
        <div className="cardsHorario__tarjeta__contenedor">
          <h2 className={claseEstilo2}>
            {nombre}
          </h2>
          <p className="cardsHorario__tarjeta__contenedor__oficio">{oficio}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsHorario;
