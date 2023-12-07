import React, { useState, useEffect } from 'react';

export const ComponenteConHookUseEffect: () => JSX.Element = () => {
  var [usuarioState, setUsuarioState] = useState<string>("MelchioT"); //Definiendo estado.
  var [fechaState, setFechaState] = useState<string>("1666384263829"); //Definiendo estado.
  var [palabraState, setPalabraState] = useState<string>("Azucar"); //Definiendo estado.

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

  const modificarUsuarioHandler: (e: any) => void = (e: any) => {
    setUsuarioState(e.target.value);
  }

  const modificarFechaHandler: (e: any) => void = (e: any) => {
    setFechaState(Date.now().toString()); 
  }

  const modificarPalabraHandler: (e: any) => void = (e: any) => {
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
