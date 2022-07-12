import "./styles.css";
import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Data from "./Data";
import Pie from "./components/Pie";
import Prod from "./Prod";

export default function App() {
  const [producto, setProducto] = React.useState(0);

  const infoTarjeta = Data.map((item) => {
    return (
      <Card
        onClick={() => setProducto(item.id)}
        id={item.id}
        nombre={item.nombre}
        precio={item.precio}
        condicion={item.condicion}
        img={item.img}
      />
    );
  });

  return (
    <div className="App">
      <Nav />
      {producto !== 0 ? (
        <Prod onClick={() => setProducto(0)} id={producto} />
      ) : (
        <section className="tarjetas">{infoTarjeta}</section>
      )}
      <Pie />
    </div>
  );
}
