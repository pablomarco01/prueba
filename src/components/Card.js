import React from "react";

export default function Card(props) {
  return (
    <button
      className="botonTarjeta"
      onClick={(event) => props.onClick(event.target.value)}
    >
      <div className="Card">
        <img src={props.img} alt="foto" />
        <div className="descripcion">
          <h4 className="nombre">{props.nombre}</h4>
          <p className="precio">${props.precio}</p>
        </div>
        <span className="condicion">{props.condicion}</span>
      </div>
    </button>
  );
}
