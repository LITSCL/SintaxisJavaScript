import React, { useId } from 'react'; //El hook "useId" permite generar un ID único a nivel de frontend (No se repite con ningún cliente).

export const Componente = () => {
  var id1 = useId();
  var id2 = useId();
  var id3 = useId();

  return (
    <>
      <p>{id1}</p>
      <p>{id2}</p>
      <p>{id3}</p>
    </>
  );
}
