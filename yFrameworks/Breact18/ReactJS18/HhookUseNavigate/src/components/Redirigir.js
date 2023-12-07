import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirigir = () => {
  var navigate = useNavigate();

  const redirigirHandler = (e) => {
    return navigate("/fuiste-redirigido"); //El hook "useNavigate" permite redirigir de forma programática (Fuera del retorno del componente).
  }

  return (
    <button onClick={(e) => redirigirHandler(e)}>Redirigir</button>
  );
}