//NOTA: Un hook personalizado es similar a un Helper, la diferencia es que estos funcionan haciendo uso de hooks nativos de React.
import React, { useState } from 'react';

//1. Crear el hook.
export const useFormato = () => {
  //2. Crear los estados del hook.
  var [textoState, setTextoState] = useState("Esteban");

  //3. Crear las funciones del hook.
  const minusculas = (texto) => {
    return setTextoState(texto.toLowerCase());
  }

  const mayusculas = (texto) => {
    return setTextoState(texto.toUpperCase());
  }

  //4. Exportar los estados y las funciones del hook.
  return {
    textoState,
    minusculas,
    mayusculas
  }
}