import React, { useState } from 'react';
import { useFormulario } from '../hooks/useFormulario';

export const HookUseFormulario = () => {
  var [cursoState, setCursoState] = useState({});
  var {obtenerDatosFormulario} = useFormulario();

  const formularioHandler = (e) => {
    e.preventDefault();

    var formulario = e.target;
    var datosFormulario = obtenerDatosFormulario(formulario);

    setCursoState(datosFormulario);
  }
  
  return (
    <>
      <h1>Formulario</h1>
      <p>Curso enviado al Endpoint "http://www.localhost.local/curso/save":</p><div className="objeto"><pre>{JSON.stringify(cursoState)}</pre></div>
      <form onSubmit={(e) => formularioHandler(e)}>
        <input type="text" name="titulo" placeholder="Título"/>
        <input type="number" name="year" placeholder="Año de publicación"/>
        <textarea name="descripcion" placeholder="Descripción..."></textarea>
        <input type="text" name="autor" placeholder="Autor"/>
        <input type="email" name="correo" placeholder="Correo de contacto"/>
        <input type="submit" valie="Enviar"/>
      </form>
    </>
  );
}