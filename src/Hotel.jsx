import React from "react";
import "./styles.css";

function Hotel(props) {

  return (

    <div className="hotel">
      <h3>{props.nombre}</h3>
      <h5>{props.pais}</h5>
      <img width="100%" src={props.imagen} alt={props.nombre} />
    </div>
  );
}

export default Hotel;
