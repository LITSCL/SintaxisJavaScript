import React, { useEffect, useReducer } from 'react';
import { JuegosReducer, JuegosInit } from '../reducers/juegos-reducer';

export const MisJuegos = () => {
  //El estado creado con el hook "useReducer" puede recibir hasta 3 parámetros.
    //Parámetro 1: Función reductora.
    //Parámetro 2: Valor inicial del estado.
    //Parámetro 3: Función inicializadora del estado (Opcional), esta función sobreescribe el segundo parámetro).

  //1. Creando el estado Reducer.
  var [juegosReducer, juegosDispatch] = useReducer(JuegosReducer, [], JuegosInit);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegosReducer));
  }, [juegosReducer]);

  const agregarHandler = (e) => {
    e.preventDefault();

    var formulario = e.target;

    var juego = {
      id: new Date().getTime(),
      titulo: formulario.titulo.value,
      descripcion: formulario.descripcion.value
    }

    //2. Creando la acción para la función reductora.
    var accion = {
      type: "agregar",
      payload: juego
    };

    //3. Ejecutando la función reductora (El estado no se envía a la función reductora, ya que se infiere).
    juegosDispatch(accion);
  }

  const modificarHandler = (e, id) => {
    var input = e.target;

    var juego = {
      id: id,
      titulo: input.value,
      descripcion: input.value
    }

    var accion = {
      type: "modificar",
      payload: juego
    };

    juegosDispatch(accion);
  }

  const borrarHandler = (e, id) => {
    var accion = {
      type: "borrar",
      payload: id
    };

    juegosDispatch(accion);
  }

  return (
    <>
      <h1>Estos son mis juegos:</h1>
      <p>Número de juegos: {juegosReducer.length}</p>
      <ul>
        {
          juegosReducer.map((juego) => {
            return (
              <li key={juego.id}>
                {juego.titulo}
                &nbsp;<input type="text" onChange={(e) => modificarHandler(e, juego.id)}/>
                &nbsp;<button onClick={(e) => borrarHandler(e, juego.id)}>X</button>
              </li>
            );
          })
        }
      </ul>
      <h3>Agregar Juego</h3>
      <form onSubmit={(e) => agregarHandler(e)}>
        <input type="text" name="titulo" placeholder="Titulo"/>
        <textarea name="descripcion" placeholder="Descripción"></textarea>
        <input type="submit" value="Guardar"/>
      </form>
    </>
  );
}
