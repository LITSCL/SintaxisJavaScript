import React from 'react';

interface Pelicula {
  nombre: string,
  year: string
}

export const VariablesEnComponentes: () => JSX.Element = () => {
  var nombre: string = "Daniel";
  var edad: string = "25"; 

  var pelicula: Pelicula = {
    nombre: "Django",
    year: "2012"
  };

  return (
    <>
      <hr/>
        VariablesEnComponentes.tsx
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
