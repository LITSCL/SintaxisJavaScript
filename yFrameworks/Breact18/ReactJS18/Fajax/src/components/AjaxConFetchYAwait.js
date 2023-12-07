import React, { useState, useEffect } from 'react';

export const AjaxConFetchYAwait = (props) => {
  var [usuariosState, setUsuariosState] = useState([]);
  var [cargandoState, setCargandoState] = useState(true);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = () => {
    setTimeout(async () => {
      var peticion = await fetch("https://reqres.in/api/users?page=1"); //1. Haciendo petición al servidor.
      var respuestaJSON = await peticion.json(); //2. Transformando respuesta a JSON.
      setUsuariosState(respuestaJSON.data); //3. Actualizando el estado.
      setCargandoState(false);
    }, 2000);
  }

  if (cargandoState == true) {
    return (
      <>
        Cargando datos...
      </>
    );
  }
  else {
    return (
      <>
        <h2>Listado de usuarios "Fetch + Await"</h2>
        <ol>
          {
            usuariosState.map((usuario) => {
              return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
            })
          }
        </ol>
      </>
    );
  }
}