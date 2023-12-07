import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const ParametrosObligatorios = () => {
  var {parametro1, parametro2} = useParams(); //El hook "useParams" permite obtener los parámetros que llegan desde la URL.

  return (
    <>
      <h1>Página de Parametros Obligatorios</h1>
      <p>Esta es la página de parametros obligatorios</p>
      <p>El valor del parametro 1 es <strong>{parametro1}</strong></p>
      <p>El valor del parametro 2 es <strong>{parametro2}</strong></p>
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
