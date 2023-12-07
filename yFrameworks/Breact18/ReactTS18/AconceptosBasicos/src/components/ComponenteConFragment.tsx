import React, { Fragment } from 'react';

export const ComponenteConFragment: () => JSX.Element = () => {
  return (
    //El contenido HTML siempre debe estar dentro de un <div> o un Fragment.
    <Fragment>
      <hr/>
        ComponenteConFragment.tsx
      <hr/>
      <h2>Contenido Utilizando Fragment</h2>
      <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </Fragment>
  );
}
