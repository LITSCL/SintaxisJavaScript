import React from 'react';
import { useFormato } from '../hooks/useFormato';

export const HookUseFormato = () => {
  //1. Importando el contenido del hook personalizado.
  var {
    textoState,
    minusculas,
    mayusculas
  } = useFormato();

  //2. Haciendo uso del hook personalizado.
  const minusculasHandler = (e) => {
    minusculas("Daniel");
  }

  const mayusculasHandler = (e) => {
    mayusculas("Daniel");
  }

  return (
    <>
      <h1>Probando hook "useFormato"</h1>
      {textoState}
      <hr/>
      <button onClick={(e) => minusculasHandler(e)}>Minusculas</button>
      <button onClick={(e) => mayusculasHandler(e)}>Mayusculas</button>
    </>
  );
}