import React, { useContext } from 'react'; //El hook "useContext" permite recibir los datos de un contexto.
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../contexts/UsuarioContext';

export const Login = () => {
  //Recibiendo el contexto.
  var usuarioContext = useContext(UsuarioContext);

  const formularioHandler = (e) => {
    e.preventDefault();

    var formulario = e.target;
    
    var usuario = {
      correo: formulario.correo.value,
      clave: formulario.clave.value,
    };

    usuarioContext.setUsuarioState(usuario);
  }

  return (
    <>
      <h1>Página de Login</h1>
      <p>Esta es la página de login</p>
      <Link to="/">Volver al inicio</Link>
      
      <br/>
      <br/>
      <hr/>
      <br/>

      <pre>{JSON.stringify(usuarioContext.usuarioState)}</pre>
      {
        usuarioContext.usuarioState.correo == null && (
          <form onSubmit={(e) => formularioHandler(e)}>
            <input type="email" name="correo" placeholder="Correo"/>
            <input type="password" name="clave" placeholder="Contraseña"/>
            <input type="submit" value="Enviar"/>
          </form>
        )
      }
    </>
  );
}
