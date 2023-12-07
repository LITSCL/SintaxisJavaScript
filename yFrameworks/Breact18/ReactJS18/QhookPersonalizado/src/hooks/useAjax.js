//NOTA: Un hook personalizado es similar a un Helper, la diferencia es que estos funcionan haciendo uso de hooks nativos de React.
import React, { useState } from 'react';

//1. Crear el hook.
export const useAjax = () => {
  //2. Crear los estados del hook.
  var [resultadoState, setResultadoState] = useState({
    datos: null
  });

  //3. Crear las funciones del hook.
  const getDatos = async (url) => {
    var peticion = await fetch(url);
    var respuestaJSON = await peticion.json();
    
    setResultadoState({
      datos: respuestaJSON.data
    });
  }

  //4. Exportar los estados y las funciones del hook.
  return {
    resultadoState,
    getDatos
  }
}