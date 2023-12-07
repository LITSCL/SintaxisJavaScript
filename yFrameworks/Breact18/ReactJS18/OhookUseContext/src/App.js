import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { RouterPrincipal } from './routers/RouterPrincipal';
import { UsuarioContext } from './contexts/UsuarioContext';

function App() {
  var [usuarioState, setUsuarioState] = useState({
    correo: "daniel@falso.local",
    clave: "123",
  });

  return (
    <div className="App">
      {/*Asignando el contexto.*/}
      <UsuarioContext.Provider value={{ //Enviando el estado a todos los componentes.
        usuarioState: usuarioState,
        setUsuarioState: setUsuarioState
      }}> 
        <RouterPrincipal></RouterPrincipal> 
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
