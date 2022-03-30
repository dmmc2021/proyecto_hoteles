import React, { useState } from "react";
import "./styles.css";
import Hotel from "./Hotel";



function Hoteles(props) {


console.log("recibiendo pais: ", props.pais)


   return (

    <div className="hoteles">
      {props.listaHoteles.map((hotel) => {
        return (
            <Hotel
              nombre={hotel.name}
              pais={hotel.country}
              imagen={hotel.photo}
            />
          );
        }
      )}
    </div>
  );
}

export default Hoteles;
