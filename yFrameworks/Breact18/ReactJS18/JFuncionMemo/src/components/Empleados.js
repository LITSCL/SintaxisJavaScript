import React, { useEffect, useState } from 'react';

export const Empleados = React.memo((props) => { //La función "memo" permite memorizar un componente (Este componente se vuelve a cargar en otro solamente si existe un cambio).
  var pagina = !props.pagina ? (1) : (props.pagina); //Esta propiedad va cambiando y por ende activa la función de memorización.
  var [empleadosState, setEmpleadosState] = useState([]);

  console.log("Componente 'Empleado' se ha renderizado");
  
  useEffect(() => {
    getEmpleados(pagina);
    console.log("Se ha realizado una petición AJAX en el componente 'Empleados'");
  }, [pagina]);

  const getEmpleados = async (pagina) => {
    var peticion = await fetch("https://reqres.in/api/users?page=" + pagina);
    var resultado = await (peticion.json());
    setEmpleadosState(resultado.data);
  }

  return (
    <>
      <h2>Mostrando la página: {pagina}</h2>
      <ul>
        {
          empleadosState.map((empleado) => {
            return <li key={empleado.id}>{empleado.first_name + empleado.last_name}</li>
          })
        }
      </ul>
    </>
  );
});
