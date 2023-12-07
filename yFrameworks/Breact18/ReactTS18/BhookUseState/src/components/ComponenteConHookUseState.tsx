import React, { useState } from 'react'; //El hook "useState" permite añadir y modificar un estado a un componente (Actualiza el valor dentro de la pantalla).

export const ComponenteConHookUseState: () => JSX.Element = () => {
  //--------------------------------------------------------------------------------------
  //var nombre: string = "Daniel Alvarez";

  //Esto no funciona, si cambia el valor de la variable, per no actualiza su valor en pantalla.
  //const cambiarNombreHandler: (e: any, nombre: string) => void = (e: any, nombre: string) => {
    //nombre = nombre;
  //}
  //--------------------------------------------------------------------------------------

  //Declarando estado (var [nombreVariable, funcionModificadora] = useState(valorVariable));.
  var [nombreState, setNombreState] = useState<string>("Daniel Alvarez"); //Definiendo estado.

  const cambiarNombreHandler: (e: any, nombre: string) => void = (e: any, nombre: string) => {
    setNombreState(nombre); //Cambiando el valor del estado "nombre".
  }

  return (
    <>
      ---------------------------------------------------------------------------------------------------------------------
      <h3>Componente "ComponenteConHookUseState"</h3>
      ---------------------------------------------------------------------------------------------------------------------
      <br/>

      <strong className={nombreState.length >= 5 ? ("verde") : ("rojo")}>{nombreState}</strong> {/*Agregando una clase en base a una condición.*/}
      <br/>
      
      <button onClick={(e)=> cambiarNombreHandler(e, "Esteban Alvarez")}>Cambiar por "Esteban Alvarez"</button>
      <br/>

      {/*Cuando se modifica el valor del INPUT, se ejecuta la función y se envía el valor que contiene el INPUT.*/}
      <input type="text" onChange={(e) => cambiarNombreHandler(e, e.target.value)} placeholder="Escribe el nuevo nombre..."/> {/*En resumen (e == Evento; target == Elemento DOM; value == Valor del elemento DOM).*/}
    </>
  )
}
