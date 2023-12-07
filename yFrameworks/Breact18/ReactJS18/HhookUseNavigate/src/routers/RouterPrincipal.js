import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'; 
import { Redirigir } from '../components/Redirigir';
import { FuisteRedirigido } from '../components/FuisteRedirigido';

export const RouterPrincipal = () => { 
  return (
    <BrowserRouter>
      {/*------Esto no debería ir acá------*/}
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/redirigir">Redirigir</NavLink></li>
        </ul>
      </nav>
      {/*------Esto no debería ir acá------*/}
      <Routes>
        <Route path="redirigir" element={<Redirigir></Redirigir>}></Route>
        <Route path="fuiste-redirigido" element={<FuisteRedirigido></FuisteRedirigido>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
