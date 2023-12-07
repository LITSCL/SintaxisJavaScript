import React from 'react';
import PropTypes from 'prop-types'; //Este módulo permite validar el tipo de dato las propiedades que son enviadas desde el componente padre.

export const ComunicacionComponentes = (props: any) => { //En TypeScrip se debe crear un interface "Props", en lugar de usar propTypes.
  console.log(props);

  return (
    <>
      <hr/>
        ComunicacionComponentes.tsx
      <hr/>
      <h3>{props.rut}</h3>
      <h3>{props.nombre}</h3>
      <h3>{props.apellido}</h3>
      <h3>{props.fichaMedica.altura}</h3>
      <h3>{props.fichaMedica.peso}</h3>
      <h3>{props.fichaMedica.presionArterial}</h3>
    </>
  );
}

//1. Validación de Props.
ComunicacionComponentes.propTypes = { //Asignando validación de tipo de dato a las propiedades.
  rut: PropTypes.string.isRequired, //Indicando que la propiedad "rut" debe ser un string y que debe existir obligatoriamente.
  nombre: PropTypes.string, //Indicando que la propiedad "nombre" debe ser un string.
  apellido: PropTypes.string, //Indicando que la propiedad "apellido" debe ser un string.
  fichaMedica: PropTypes.object //Indicando que la propiedad "fichaMedica" debe ser un objeto JSON.
}

//2. Valores por defecto en Props (Cuando no se envían).
ComunicacionComponentes.defaultProps = { //Asignando valores por defecto a las propiedades que llegan.
  rut: "4.283.767-9",
  nombre: "Maria"
}
