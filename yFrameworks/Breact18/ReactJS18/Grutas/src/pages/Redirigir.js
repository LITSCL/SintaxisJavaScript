import React from 'react';
import { Navigate } from 'react-router-dom';

export const Redirigir = () => {
  return (
    <Navigate to="/fuiste-redirigido"></Navigate> //El componente "Navigate" permite redirigir de forma programática (Dentro del retorno del componente).
  );
}