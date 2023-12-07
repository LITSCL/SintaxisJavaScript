import React, { useState, useEffect } from 'react';

export const AjaxConFetchYThen = (props) => {
  var [usuariosState, setUsuariosState] = useState([]);
  var [cargandoState, setCargandoState] = useState(true);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = () => {
    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1") //1. Haciendo petición al servidor.
      .then((response) => response.json()) //2. Obteniendo respuesta y transformandola a JSON.
      .then((response) => { //3. Realizar acciones con la respuesta obtenida.
        setUsuariosState(response.data); //4. Actualizando el estado.
        setCargandoState(false);
      });
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
        <h2>Listado de usuarios "Fetch + Then"</h2>
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