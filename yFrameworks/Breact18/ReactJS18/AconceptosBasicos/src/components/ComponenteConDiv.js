import React from 'react';

export const ComponenteConDiv = () => {
  return (
    //El contenido HTML siempre debe estar dentro de un <div> o un Fragment.
    <div>
      <hr/>
        ComponenteConDiv.js
      <hr/>
      <h2>Contenido Utilizando Div</h2>
      <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </div>
  );
}