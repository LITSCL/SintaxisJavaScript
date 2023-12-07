//NOTA: Un hook personalizado es similar a un Helper, la diferencia es que estos funcionan haciendo uso de hooks nativos de React.
import React, { useState } from 'react';

//1. Crear el hook.
export const useFormulario = () => {
  //2. Crear los estados del hook.
  var [formularioState, setFormularioState] = useState({});

  //3. Crear las funciones del hook.
  const obtenerDatosFormulario = (formulario) => {
    var datosFormulario = new FormData(formulario);

    var objeto = {};

    for (var [nombre, valor] of datosFormulario) {
      objeto[nombre] = valor;
    }

    return objeto;
  }

  //4. Exportar los estados y las funciones del hook.
  return {
    obtenerDatosFormulario
  }
}