import React from 'react';

export const VariablesEnComponentes = () => {
  var nombre = "Daniel";
  var edad = "25"; 

  var pelicula = {
    nombre: "Django",
    year: "2012"
  };

  return (
    <>
      <hr/>
        VariablesEnComponentes.js
      <hr/>
      <h2>Persona</h2>
      <h3>Nombre: {nombre}</h3>
      <h3>Edad: {edad}</h3>

      <h2>Pelicula</h2>
      <h3>Nombre: {pelicula.nombre}</h3>
      <h3>Año: {pelicula.year}</h3>
    </>
  );
}