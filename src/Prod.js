import React from "react";
import Data from "./Data";

export default function Prod(props) {
  let nombre = "";
  let precio = 0;
  let condicion = "";
  let img = "";
  var infoProd = Data.filter(function (el) {
    if (el.id === props.id) {
      nombre = el.nombre;
      precio = el.precio;
      condicion = el.condicion;
      img = el.img;
      return infoProd;
    }
  });

  return (
    <div>
      <button
        className="atras"
        onClick={(event) => props.onClick(event.target.value)}
      >
        Atras
      </button>
      <seccion className="Prod">
        <h1 className="ProdNombre">{nombre}</h1>
        <img src={img} alt="foto" className="ProdFoto" />
        <seccion className="ProdDesc">
          <h2 className="ProdPrecio">${precio}</h2>
          <h3 className="ProdCondicion">/{condicion}</h3>
          <seccion className="botones">
            <button className="comprar">Comprar</button>
            <button className="contactar">Contactar</button>
          </seccion>
        </seccion>
      </seccion>
    </div>
  );
}
