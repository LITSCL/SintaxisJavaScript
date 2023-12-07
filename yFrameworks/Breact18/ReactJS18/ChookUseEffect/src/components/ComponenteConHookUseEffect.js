import React, { useState, useEffect } from 'react'; //El hook "useEffect" se ejecuta cuando cambia el estado del componente (También se puede ejecutar por cambios en estados especificos).

export const ComponenteConHookUseEffect = () => {
  var [usuarioState, setUsuarioState] = useState("MelchioT"); //Definiendo estado.
  var [fechaState, setFechaState] = useState("1666384263829"); //Definiendo estado.
  var [palabraState, setPalabraState] = useState("Azucar"); //Definiendo estado.

  //Se ejecuta cuando se carga el componente (Una única vez).
  useEffect(() => {
    console.log("Componente: 'ComponenteConHookUseEffect' - Se ha cargado el componente 'ComponenteConHookUseEffect'");
  }, []);

  //Se ejecuta cuando se cambia algún estado del componente.
  useEffect(() => {
    console.log("Componente: 'ComponenteConHookUseEffect' - Has realizado un cambio en algún estado");
  });
  
  //Se ejecuta cuando se cambia el estado "palabra".
  useEffect(() => {
    console.log("Componente: 'ComponenteConHookUseEffect' - Has realizado un cambio en el estado 'palabra'");
  }, [palabraState]);

  const modificarUsuarioHandler = (e) => {
    setUsuarioState(e.target.value);
  }

  const modificarFechaHandler = (e) => {
    setFechaState(Date.now); 
  }

  const modificarPalabraHandler = (e) => {
    if (palabraState == "Azucar") {
      setPalabraState("Arroz");
    }
    else {
      setPalabraState("Azucar");
    }
  }

  return (
    <>
      ---------------------------------------------------------------------------------------------------------------------
      <h3>Componente "ComponenteConHookUseEffect"</h3>
      ---------------------------------------------------------------------------------------------------------------------
      <br/>
      
      <strong>{usuarioState}</strong>
      <br/>

      <input type="text" onChange={(e) => modificarUsuarioHandler(e)} placeholder="Cambia el nombre"/>
      <br/>

      <strong>{fechaState}</strong>
      <br/>

      <button onClick={(e) => modificarFechaHandler(e)}>Actualizar Fecha</button>
      <br/>

      <strong>{palabraState}</strong>
      <br/>

      <button onClick={(e) => modificarPalabraHandler(e)}>Cambiar Palabra</button>
    </>
  );
}