import React from "react";
import "./log.css";

export default function Log(props) {
  return props.trigger ? (
    <div className="cartel">
      <div className="infoCartel">
        <button className="botonCerrar" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
