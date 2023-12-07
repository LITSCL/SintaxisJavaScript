import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { UsuarioContext } from '../contexts/UsuarioContext'; //El hook "useContext" permite recibir los datos de un contexto.
import { Articulos } from '../pages/Articulos';
import { Contacto } from '../pages/Contacto';
import { Inicio } from '../pages/Inicio';
import { Login } from '../pages/Login';

export const RouterPrincipal = () => {
  //Recibiendo el contexto.
  var usuarioContext = useContext(UsuarioContext);

  const cerrarSesionHandler = (e) => {
    e.preventDefault();
    usuarioContext.setUsuarioState({});
  }

  return (
    <BrowserRouter>
      {/*------Esto no debería ir acá------*/}
      <header>
        <nav>
          <div className="logo">
            <h2>Hook Context</h2>
          </div>
          <ul>
            <li><NavLink to="/" className={({isActive}) => { return isActive ? "activo" : ""; }}>Inicio</NavLink></li>
            <li><NavLink to="/articulos" className={({isActive}) => { return isActive ? "activo" : ""; }}>Articulos</NavLink></li>
            <li><NavLink to="/contacto" className={({isActive}) => { return isActive ? "activo" : ""; }}>Contacto</NavLink></li>
            {
              usuarioContext.usuarioState.correo != null ? (
                <>
                  <li><NavLink to="/login" className={({isActive}) => { return isActive ? "activo" : ""; }}>{usuarioContext.usuarioState.correo}</NavLink></li>
                  <li><a href="#" onClick={(e) => cerrarSesionHandler(e)}>Cerrar Sesión</a></li>
                </>
              ) : (
                <li><NavLink to="/login" className={({isActive}) => { return isActive ? "activo" : ""; }}>Login</NavLink></li>
              )
            }
          </ul>
        </nav>
      </header>
      {/*------Esto no debería ir acá------*/}
      <section>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/articulos" element={<Articulos></Articulos>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}
