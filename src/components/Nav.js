import React from "react";
import Log from "./Cartel/Log";

export default function Nav() {
  const [show, setShow] = React.useState(false);

  function Menu() {
    const [mostrar, setMostrar] = React.useState(false);
    return (
      <nav className="Nav">
        <button className="MenuBoton" onClick={() => setShow(!show)}>
          Menu
        </button>
        <ul className="Menu">
          <li className="ItemMenu" onClick={() => setMostrar(true)}>
            {" "}
            Iniciar Sesion
          </li>
          <li className="ItemMenu">Categorias</li>
          <li className="ItemMenu">Ofertas</li>
          <li className="ItemMenu">Configuracion</li>
        </ul>
        <Log trigger={mostrar} setTrigger={setMostrar}>
          {" "}
          <div className="logInputs">
            <h3>Login</h3>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="contraseña" />
            <seccion className="botonesRegistro">
              <button className="entrar" onClick={() => setMostrar(false)}>
                Entrar
              </button>
              <button className="registro">Registrate</button>
            </seccion>
          </div>{" "}
        </Log>
      </nav>
    );
  }

  function Nav() {
    return (
      <nav className="Nav">
        <button className="MenuBoton" onClick={() => setShow(!show)}>
          Menu
        </button>
        <h3>Amazen</h3>
      </nav>
    );
  }

  return <header className="Nav">{show ? <Menu /> : <Nav />}</header>;
}
