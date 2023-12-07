import React from 'react';
import { Link } from 'react-router-dom';

export const QuienesSomos = () => {
  return (
    <>
      <h1>Página de Quienes Somos</h1>
      <p>Esta es la página de quienes somos</p>
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
