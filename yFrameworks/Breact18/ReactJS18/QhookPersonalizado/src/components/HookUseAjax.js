import React, { useEffect, useState, useRef } from 'react';
import { useAjax } from '../hooks/useAjax';

export const HookUseAjax = () => {
  var {
    resultadoState,
    getDatos
  } = useAjax();

  var idRef = useRef();

  useEffect(() => {
    idRef.current.value = 1;
    getDatos("https://reqres.in/api/users/1");
  }, []);

  const conseguirIdHandler = (e) => {
    var input = e.target;
    var url = "https://reqres.in/api/users/" + input.value;
    getDatos(url);
  }

  return (
    <>
      <h1>Probando hook "useAjax"</h1>
      <p>Datos del usuario:</p>
      <ul>
        <li><strong>Nombre:</strong> {resultadoState?.datos?.first_name}</li>
        <li><strong>Apellido:</strong> {resultadoState?.datos?.last_name}</li>
        <li><strong>Correo:</strong> {resultadoState?.datos?.email}</li>
      </ul>
      <input type="number" name="id" ref={idRef} onChange={(e) => conseguirIdHandler(e)}/>
    </>
  );
}