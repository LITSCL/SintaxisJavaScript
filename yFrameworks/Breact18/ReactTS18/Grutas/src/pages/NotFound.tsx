import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: () => JSX.Element = () => {
  return (
    <>
      <h1>Error 404</h1>
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
