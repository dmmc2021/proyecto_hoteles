import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Filtros from "./Filtros";
import Hoteles from "./Hoteles";
import { hotelsData } from "./hotelsData.js";

export default function App() {
  const [pais, actualizarPais] = useState("todos");
  const [precio, actualizarPrecio] = useState("todos");
  const [tamaño, actualizarTamaño] = useState("todos");
  const [desde, setDesde] = useState();
  const [hasta, setHasta] = useState();

  return (
    <div className="App">
      <div className="cabecera">
        <h1>Proyecto  Hoteles</h1>
      </div>
     
      <Filtros
        pais={pais}
        tamaño={tamaño}
        precio={precio}
        desde={desde}
        hasta={hasta}
        actualizarPais={actualizarPais}
        actualizarPrecio={actualizarPrecio}
        actualizarTamaño={actualizarTamaño}
        setDesde={setDesde}
        setHasta={setHasta}
      />
       <Header
        pais={pais}
        tamaño={tamaño}
        precio={precio}
        desde={desde}
        hasta={hasta}
      />
      <Hoteles 
      listaHoteles={hotelsData}
      pais={pais}
      />
    </div>
  );
}
