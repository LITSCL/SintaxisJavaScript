import React, { useRef } from 'react'; //El hook "useRef" permite seleccionar un elemento del DOM (Hacer una referencia a un elemento del DOM, dicha referencia siempre se mantiene actualizada).

export const UseRef = () => {
  var nombreRef = useRef("Daniel"); //Creando una referencia (Debe ser asignada a un elemento del DOM).
  var apellidoRef = useRef("Alvarez");
  var correoRef = useRef("daniel@falso.local");
  var cajaRef = useRef();

  const mostrarHandler = (e) => {
    e.preventDefault();
    console.log(nombreRef.current.value); //Para acceder al elemento referenciado, se debe acceder al atributo "current".
    console.log(nombreRef.current.value);
    console.log(nombreRef.current.value);
  }

  const cambiarColorCajaHandler = (e) => {
    cajaRef.current.classList.add("color-verde");
  }

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={(e) => mostrarHandler(e)}>
        <input type="text" placeholder="Nombre" ref={nombreRef}/><br/> {/*El atributo "ref" permite referenciar el elemento a la variable hook entregada.*/}
        <input type="text" placeholder="Apellido" ref={apellidoRef}/><br/>
        <input type="text" placeholder="Correo" ref={correoRef}/><br/>
        <input type="submit" value="Enviar"/>
      </form>

      <button onClick={(e) => cambiarColorCajaHandler(e)}>Cambiar color</button>
      <div className="caja" ref={cajaRef}>
        <h2>Caja</h2>
      </div>
    </>
  );
}
