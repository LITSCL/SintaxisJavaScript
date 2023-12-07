import React, { useState } from 'react';

export const Formulario = (props) => {
  const [usuarioState, setUsuarioState] = useState({});

  const conseguirDatosFormularioHandler = (e) => {
    //1. Evitar que se recargue la página.
    e.preventDefault();

    //2. Obtener el formulario.
    var formulario = e.target;
    
    //3. Setear el objeto con los datos del formulario.
    var usuario = {
      nombre: formulario.nombre.value,
      apellido: formulario.apellido.value,
      sexo: formulario.sexo.value,
      biografia: formulario.biografia.value,
      enviado: true
    }

    setUsuarioState(usuario);
  }

  const cambiarDatos = (e) => {
    //1. Obteniendo el nombre input.
    var nombreDelInput = e.target.name;

    //2. Obteniendo el valor del input.
    var valorDelInput = e.target.value;

    setUsuarioState((valorEstado) => { //3. El parámetro almacena el objeto JSON.
      return { //NOTA: La intención es retornar el nuevo valor del estado.
        ...valorEstado, //4. Asignando todos los atributos como valor al estado (El "..." permite desglosar variables iterables).
        [nombreDelInput]: [valorDelInput] //5. Sobreescribiendo el atributo.
      }
    });
  }

  return (
    <div>
      <form onSubmit={(e) => conseguirDatosFormularioHandler(e)}> {/*El evento "onSubmit" se ejecuta cuando se envía el formulario.*/}
        <input onChange={(e) => cambiarDatos(e)} type="text" name="nombre" placeholder="Nombre"/>
        <input onChange={(e) => cambiarDatos(e)} type="text" name="apellido" placeholder="Apellido"/>
        <select onChange={(e) => cambiarDatos(e)} name="sexo">
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <textarea onChange={(e) => cambiarDatos(e)} name="biografia" placeholder="Biografia"></textarea>
        <input type="submit" value="Enviar"/>
      </form>
      {
        usuarioState.enviado == true && (
          <div className="informacion_usuario">
            Nombre: {usuarioState.nombre}<br/>
            Apellido: {usuarioState.apellido}<br/>
            Sexo: {usuarioState.sexo}<br/>
            Biografia: {usuarioState.biografia}
          </div>
        )
      }
    </div>
  );
}