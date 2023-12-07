//1. La función reductora siempre recibe por parámetro un estado y una acción.
//2. La función reductora siempre debe retornar un estado.
//3. El estado que recibe el reducer siempre debe ser el mismo (Es un estado creado expresamente para ser utilizado en la función reductora).
//4. La acción que recibe la función reductora debe tener el atributo "type" y el atributo "payload".
  //type = Tipo de manipulación a realizar en el estado.
  //payload = Datos necesarios para manipular el estado.

//1. Función reductora (Busca estandarizar la manipulación de un estado).
export const JuegosReducer = (estado, accion) => {
  switch (accion.type) {
    case "agregar":
      var estadoActualizado = [...estado, accion.payload];
      return estadoActualizado;
    case "modificar":
      var indice = estado.findIndex((juego) => juego.id == accion.payload.id);
      estado[indice] = accion.payload;
      var estadoActualizado = [...estado];
      return estadoActualizado;
    case "borrar":
      var estadoActualizado = estado.filter((juego) => juego.id != accion.payload);
      return estadoActualizado;
    default:
      return estado;
  }
}

//2. Función inicializadora (Asigna un valor inicial al estado).
export const JuegosInit = () => {
  var juegos = [
    {
      id: 1672058559382,
      titulo: "World of Tanks",
      descripcion: "Juego de tanques arcade"
    },
    {
      id: 1648044549957,
      titulo: "Warthunder",
      descripcion: "Juego de tanques realista"
    },
    {
      id: 1668059949988,
      titulo: "Smite",
      descripcion: "Moba en tercera persona"
    }
  ];
  return juegos;
}