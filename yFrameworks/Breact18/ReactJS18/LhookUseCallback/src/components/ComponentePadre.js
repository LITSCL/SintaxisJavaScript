import React, { useCallback, useState } from 'react'; //El hook "useCallback" permite memorizar una función (Útil cuando se envía una función a un componente como propiedad).
import { ComponenteHijo } from './ComponenteHijo';

export const ComponentePadre = () => {
  var [textoState, setTextoState] = useState(""); //Estado 1: Si gatilla la re-creación de la función (aumentarHandler).
  var [contadorState, setContadorState] = useState(0); //Estado 2: No gatilla la re-creación de la función (aumentarHandler).

  const asignarTextoHandler = (e) => {
    var input = e.target;
    setTextoState(input.value);
  }

  //NOTA: Todas las funciones se vuelven a crear cuando se cambia algún estado (Por ende al volverse a crear se considera que cambiaron).
  //NOTA: El componente que recibe la función (Hijo), debe implementar la función "React.memo".
  const aumentarHandler = useCallback((e) => { //1. Estableciendo función memorizada (Si se borra el hook, el componente hijo se volverá a renderizar constantemente, debido a que la función se vuelve a crear).
    setContadorState(contadorState + 1);
  }, [textoState]); //2. La función se considera como cambiada cuando cambia el valor del estado "textoState".

  return (
    <>
      <h1>{textoState}</h1>
      <input type="text" onChange={(e) => asignarTextoHandler(e)} placeholder="Introduce el texto..."/> {/*Cuando un estado sufre un cambio, se vuelve a cargar el componente (Incluyendo todos los sub-componentes).*/}
      <button onClick={(e) => aumentarHandler(e)}>+</button>
      <ComponenteHijo aumentarHandler={aumentarHandler}></ComponenteHijo> {/*3. Enviando la función al componente hijo.*/}
    </>
  );
};
