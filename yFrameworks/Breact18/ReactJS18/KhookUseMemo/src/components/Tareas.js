import React, { useMemo, useState } from 'react'; //El hook "useMemo" permite memorizar una función del componente y establecer bajo que circunstancias se debe ejecutar (Se busca evitar la ejecución innecesaria de funciones complejas y de alta carga).

export const Tareas = () => {
  var [tareasState, setTareasState] = useState([]);
  var [contadorState, setcontadorcontadorState] = useState(6250);

  const aumentarContadorHandler = (e) => {
    setcontadorcontadorState(contadorState + 1);
  }

  const guardarTareasHandler = (e) => {
    e.preventDefault();

    var formulario = e.target;
    
    var tareasActualizadas = [...tareasState, {
      id: tareasState.length + 1,
      descripcion: formulario.descripcion.value
    }];
    setTareasState(tareasActualizadas);
    console.log(tareasActualizadas);
  }

  const borrarTareaHandler = (e, id) => {
    var tareasActualizadas = tareasState.filter((tarea) => tarea.id !== id);
    setTareasState(tareasActualizadas);
  }

  //1. Declarando función de alta carga.
  const contadoresAnteriores = (valorAcumulado, texto) => {
    for (var i = 0; i <= valorAcumulado; i++) {
      console.log(`${texto} Ejecutando el valor acumulado...`);
    }
    return `Contador de tareas: ${valorAcumulado}`;
  }

  //2. Creación de la memorización (Debe ser declarade después de la función a memorizar).
  var contadoresAnterioresMemo = useMemo(() => contadoresAnteriores(contadorState, "[FUNCIÓN MEMORIZADA]"), [contadorState]); //El hook "useMemo" recibe como primer parametro la función a memorizar y como segundo parámetro los estados que permitirán su ejecución.

  return (
    <>
      <h1>Mis tareas</h1>
      <form onSubmit={(e) => guardarTareasHandler(e)}>
        <input type="text" name="descripcion" placeholder="Descripción..."/>
        <input type="submit" value="Guardar"/>
      </form>

      {/*3. Uso de la memorización.*/}
      <h2>{contadoresAnterioresMemo}</h2> {/*Esta función está memorizada, solo se ejecuta cuando el valor del estado "contadorState" cambia su valor.*/}
      <h3>{contadoresAnteriores(contadorState, "[FUNCIÓN NORMAL]")}</h3> {/*Esta función se ejecuta cada vez que un estado del componente cambia.*/}

      <button onClick={(e) => aumentarContadorHandler(e)}>Sumar</button>

      <h3>Lista de tareas:</h3>
      <ul>
      {
        tareasState.map((tarea) => {
          return (
            <li key={tarea.id}>
              {tarea.descripcion}
              &nbsp;
              <button onClick={(e) => borrarTareaHandler(e, tarea.id)}>X</button>
            </li>
          );
        })
      }
      </ul>
    </>
  );
}
