import React, { useContext } from 'react'; //El hook "useContext" permite recibir los datos de un contexto.
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../contexts/UsuarioContext';

export const Articulos = () => {
  //Recibiendo el contexto.
  var usuarioContext = useContext(UsuarioContext);

  return (
    <>
      <h1>Página de Articulos</h1>
      <p>Esta es la página de articulos</p>
      <Link to="/">Volver al inicio</Link>

      <br/>
      <br/>
      <hr/>
      <br/>

      <pre>{JSON.stringify(usuarioContext.usuarioState)}</pre>
    </>
  );
}
