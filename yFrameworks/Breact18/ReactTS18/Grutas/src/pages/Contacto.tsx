import React from 'react';
import { Link } from 'react-router-dom';

export const Contacto: () => JSX.Element = () => {
  return (
    <>
      <h1>Página de Contacto</h1>
      <p>Esta es la página de contacto</p>
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
