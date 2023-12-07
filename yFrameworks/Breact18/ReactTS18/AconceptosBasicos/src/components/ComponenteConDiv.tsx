import React from 'react';

export const ComponenteConDiv: () => JSX.Element = () => {
  return (
    //El contenido HTML siempre debe estar dentro de un <div> o un Fragment.
    <div>
      <hr/>
        ComponenteConDiv.tsx
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
