import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterPrincipal } from './routers/RouterPrincipal';

function App(): JSX.Element {  
  return (
    <div className="App">
      <RouterPrincipal></RouterPrincipal> {/*Cargando las rutas.*/}
      {/*NOTA: No se puede utilizar "NavLink" ni "Link" directamente en el componente principal.*/}
    </div>
  );
}

export default App;
