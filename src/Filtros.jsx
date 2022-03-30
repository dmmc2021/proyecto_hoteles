import React from "react";
import "./styles.css";




function Filtros({
  pais,
  precio,
  tamaño,
  desde,
  hasta,
  actualizarPais,
  actualizarPrecio,
  actualizarTamaño,
  setDesde,
  setHasta
}) 
{
  const manejarCambioPais = (evento) => {
    actualizarPais(evento.target.value);
  };

  const manejarCambioTamaño = (evento) => {
    actualizarTamaño(evento.target.value);
  };
  const manejarCambioPrecio = (evento) => {
    actualizarPrecio(evento.target.value);
  };

  const manejarCambioDesde = (evento) => {
    setDesde(evento.target.value);
  };
  const manejarCambioHasta = (evento) => {
    setHasta(evento.target.value);
  };

  const manejarClick = () => {
    // resetear los filtros a su estado inicial
    actualizarPais("todos");
    actualizarPrecio("todos");
    actualizarTamaño("todos");
    setDesde();
    setHasta();
  };


  return (
    <div className="filtros">
      <h1>Filtros</h1>

      <div className="filtros-lista">
        <div className="fecha desde">
          <span>desde</span>
          <input onChange={manejarCambioDesde} type="date" />
        </div>
        <div className="fecha hasta">
          <span>hasta</span>
          <input onChange={manejarCambioHasta} type="date" />
        </div>
        {/* filtro pais */}
        <div className="pais">
          <span>Pais</span>
        <select value={pais} onChange={manejarCambioPais}>
          <option value="todos">Todos</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>
        </div>
        {/* filtro precio */}
        <div className="precio">
          <span>Precio</span>
        <select value={precio} onChange={manejarCambioPrecio}>
          <option value="todos">Todos</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        </div>
        {/* filtro tamaño */}
        <div className="tamano">
          <span>Tamaño</span>
        <select value={tamaño} onChange={manejarCambioTamaño}>
          <option value="todos">Todos</option>
          <option value="pequeño">pequeño</option>
          <option value="mediano">mediano</option>
          <option value="grande">grande</option>
        </select>
        </div>
        <button onClick={manejarClick}>Reset filtros</button>
      </div>
    </div>
  );
}

export default Filtros;
