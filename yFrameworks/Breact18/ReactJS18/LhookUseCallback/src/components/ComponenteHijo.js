import React from 'react'; //El hook "useMemo" permite memorizar una función del componente y establecer bajo que circunstancias se debe ejecutar (Se busca evitar la ejecución innecesaria de funciones complejas y de alta carga).

export const ComponenteHijo = React.memo((props) => {
  var aumentarHandler = props.aumentarHandler;

  console.log("Componente Hijo cargado...");

  return (
    <>
      
    </>
  );
});