import React from 'react';
import { Link } from 'react-router-dom';

export const FuisteRedirigido = () => {
  return (
    <>
      <h1>Página de Fuiste Redirigido</h1>
      <p>Esta es la página de fuiste redirigido</p>
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
