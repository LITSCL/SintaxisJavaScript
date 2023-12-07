import { createContext } from 'react';

//Un contexto permite enviar datos a todos los componentes envueltos en él.
//Para hacer el uso de un contexto se debe seguir los siguientes pasos:
  //1. Crear el contexto (Idealmente en un fichero a parte).
  //2. Asignar el contexto (Envolver uno o varios componentes en el contexto).
  //3. Recibir el contexto (Dentro de los componentes que reciben los datos, se debe usar el hook "useContext").

//Creando el contexto.
export const UsuarioContext = createContext(null);