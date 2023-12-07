import logo from './logo.svg';
import './App.css';
import { RouterPrincipal } from './routers/RouterPrincipal';

function App() {
  return (
    <div className="">
      <RouterPrincipal></RouterPrincipal> {/*Cargando las rutas.*/}
      {/*NOTA: No se puede utilizar "NavLink" ni "Link" directamente en el componente principal.*/}
    </div>
  );
}

export default App;
