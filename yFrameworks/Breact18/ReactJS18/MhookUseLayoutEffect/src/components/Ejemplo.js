import React, { useEffect, useLayoutEffect } from 'react'; //El hook "useLayoutEffect" es similar al hook "useEffect", la diferencia radica en cuando se ejecuta (Antes o despues de renderizar la pantalla).

export const Ejemplo = () => {

  //Se ejecuta antes de que el componente se renderize en pantalla.
  useLayoutEffect(() => {
    var div_caja = document.querySelector("#caja");
    div_caja.innerHTML = "Hola 1";
  }, []);

  //Se ejecuta después de que el componente se renderize en pantalla.
  useEffect(() => {
    var div_caja = document.querySelector("#caja");
    div_caja.innerHTML = "Hola 2";
  }, []);

  return (
    <>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <div id="caja"></div>
    </>
  );
}
