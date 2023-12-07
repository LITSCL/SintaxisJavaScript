import React, { useState, useEffect } from 'react';

interface Usuario {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export const AjaxConFetchYAwait: (props: any) => JSX.Element = (props) => {
  var [usuariosState, setUsuariosState] = useState<Usuario[]>([]);
  var [cargandoState, setCargandoState] = useState<boolean>(true);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = () => {
    setTimeout(async () => {
      var peticion: Response = await fetch("https://reqres.in/api/users?page=1"); //1. Haciendo petición al servidor.
      var respuestaJSON: any = await peticion.json(); //2. Transformando respuesta a JSON.
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