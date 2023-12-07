import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio: () => JSX.Element = () => {
  return (
    <>
      <h1>Página de Inicio</h1>
      <p>Esta es la página de inicio</p>
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
