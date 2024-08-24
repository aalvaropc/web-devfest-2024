import React from "react";
import "./Horario.css";
const Horario = ({ inicio, final }) => {
  return (
    <div className="horario">
      <h1 className="horario__inicio">{inicio}</h1>
      <h2 className="horario__final">{final}</h2>
    </div>
  );
};

export default Horario;
