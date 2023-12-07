import React from 'react';

export const EventosEnComponentes: () => JSX.Element = () => {
  const click2Handler = (e: (any)) => {
    console.log("Evento Click Forma 2");
  }

  const click3Handler: (e: any, mensaje: string) => void = (e: any, mensaje: string) => {
    console.log(mensaje);
  }

  const dobleClickHandler: (e: any) => void = (e: any) => {
    console.log("Evento Doble Click");
  }

  const mouseEnterHandler: (e: any) => void = (e: any) => {
    console.log("Evento Mouse Enter");
  }

  const mouseLeaveHandler: (e: any) => void = (e: any) => {
    console.log("Evento Mouse Leave");
  }

  const focusHandler: (e: any) => void = (e: any) => {
    console.log("Entraste al input");
  }

  const blurHandler: (e: any) => void = (e: any) => {
    console.log("Saliste del input");
  }

  return (
    //El contenido HTML siempre debe estar dentro de un <div> o un Fragment.
    <>
      <hr/>
        EventosEnComponentes.tsx
      <hr/>
      <p>
      {/*Evento Click Forma 1 (No recomendada).*/}
        <button onClick={(e) => {
          console.log("Evento Click Forma 1");
        }}>Evento Click Forma 1</button>
      </p>
      <p>
        {/*Evento Click Forma 2 (Recomendada).*/}
        <button onClick={(e) => click2Handler(e)}>Evento Click Forma 2</button>
      </p>
      <p>
        {/*Parametros en eventos.*/}
        <button onClick={(e) => click3Handler(e, "Hola Mundo")}>Evento con Parámetros</button>
      </p>
      <p>
        {/*Evento Doble Click.*/}
        <button onDoubleClick={(e) => dobleClickHandler(e)}>Evento Doble Click</button>
      </p>
      <div id="caja" onMouseEnter={(e) => mouseEnterHandler(e)} onMouseLeave={e=> mouseLeaveHandler(e)}>
        {/*Evento Doble Mouse Enter y Mouse Leave.*/}
        Pasa el cursor por encima
      </div>
      <p>
        {/*Evento Focus y Blur.*/}
        <input type="text" onFocus={(e) => focusHandler(e)} onBlur={e => blurHandler(e)} placeholder="Escribe tu nombre..."/>
      </p>
    </>
  );
}
