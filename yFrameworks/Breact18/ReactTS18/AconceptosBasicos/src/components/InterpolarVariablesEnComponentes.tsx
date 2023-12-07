import React from 'react';

export const InterpolarVariablesEnComponentes: () => JSX.Element = () => {
  const libros: string[] = ["Harry Potter", "Juego de Tronos", "Clean Code"];
  
  return ( 
    <>
      <hr/>
        InterpolarVariablesEnComponentes.tsx
      <hr/>
      {
        libros.length > 0 ? ( //Esto es un IF (El signo "?" solo es necesario si va a existir un ELSE) | En caso de no tener retorno se debe usar el signo "&&" .
          <ul>
            {
              libros.map((libro, indice) => { //Recorriendo el Array.
                return <li key={indice}>{libro}</li> //Imprimiendo datos (Es obligatorio asignar el atributo "key").
              })
            }
          </ul>
        )
        : ( //Esto es un ELSE.
          <p>No hay libros en el Array</p>
        )
      }
    </>
  );
}
