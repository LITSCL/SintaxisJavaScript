import React, { useEffect, useState } from 'react';
import { Empleados } from './Empleados';

export const Jefe = () => {
  var [nombreState, setNombreState] = useState();
  var [paginaState, setPaginaState] = useState();

  console.log("Componente 'Jefe' se ha renderizado");

  const asignarJefeHandler = (e) => {
    var input = e.target;
    setNombreState(input.value);
  }

  return (
    <>
      <input type="text" onChange={(e) => asignarJefeHandler(e)} placeholder="Introduce el nombre..."/> {/*Cuando un estado sufre un cambio, se vuelve a cargar el componente (Incluyendo todos los sub-componentes).*/}
      <h1>Nombre del jefe: <strong>{nombreState}</strong></h1>
      <h2>Listado de empleados:</h2>
      <p>Los usuarios son administrados por <strong>{nombreState}</strong></p>
      <button onClick={(e) => setPaginaState(1)}>Pagina 1</button>
      <button onClick={(e) => setPaginaState(2)}>Pagina 2</button>
      <Empleados pagina={paginaState}></Empleados> {/*Este es un sub-componente.*/}
    </>
  );
}
