import React, { useState, useEffect } from 'react';

interface Usuario {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export const AjaxCapturarError: (props: any) => JSX.Element = (props) => {
  var [usuariosState, setUsuariosState] = useState<Usuario[]>([]);
  var [cargandoState, setCargandoState] = useState<boolean>(true);
  var [erroresState, setErroresState] = useState<string>("");

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = () => {
    setTimeout(() => {
      fetch("https://reqres.malo/api/users?page=1") //Esta URL es erronea.
      .then((response) => response.json())
      .then((response) => {
        setUsuariosState(response.data);
        setCargandoState(false);
      })
      .catch((error) => { //Capturando el error.
        setErroresState(error.message);
      });
    }, 2000);
  }

  if (cargandoState == true && erroresState == "") { //Cuando se estan cargando los datos.
    return (
      <>
        Cargando datos...
      </>
    );
  }
  else if (cargandoState == false && erroresState == "") { //Cuando todo funciona bien.
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
  else if (erroresState != "") { //Cuando ocurre un error.
    return (
      <>
        <div>
          <p style={{color: "red"}}>
            {erroresState}
          </p>
        </div>
      </>
    );
  }
  else {
    return (
      <></>
    );
  }
}