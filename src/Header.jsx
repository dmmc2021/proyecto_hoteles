import React from "react";
import "./styles.css";

function Header({ pais, tamaño, precio, desde, hasta }) {
  return (
    <div className="header">
      <h1>Header</h1>
      <h3>el pais seleccionado es: {pais}</h3>
      <h3>el tamaño seleccionado es: {tamaño}</h3>
      <h3>el precio seleccionado es: {precio}</h3>
      <h3>desde: {desde}</h3>
      <h3>hasta: {hasta}</h3>
    </div>
  );
}

export default Header;
