import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'; //La librería "react-router-dom" permite definir rutas y mostrarlas sin recargar la página.
import { QuienesSomos } from '../pages/QuienesSomos';
import { Contacto } from '../pages/Contacto';
import { Inicio } from '../pages/Inicio';
import { NotFound } from '../pages/NotFound';
import { ParametrosObligatorios } from '../pages/ParametrosObligatorios';
import { ParametrosOpcionales } from '../pages/ParametrosOpcionales';
import { Redirigir } from '../pages/Redirigir';
import { FuisteRedirigido } from '../pages/FuisteRedirigido';
import { PanelControl } from '../pages/panel_control/PanelControl';
import { Agregar } from '../pages/panel_control/subpages/Agregar';
import { Mostrar } from '../pages/panel_control/subpages/Mostrar';
import { Modificar } from '../pages/panel_control/subpages/Modificar';
import { Eliminar } from '../pages/panel_control/subpages/Eliminar';

//Para definir rutas se debe crear un Router (Componente) (Debería haber un Router por cada modelo).
export const RouterPrincipal = () => { //El router principal solo debería cargar páginas que no representen un modelo (Index; Not Found; Contacto).
  return (
    <BrowserRouter>
      {/*------Esto no debería ir acá------*/}
      <nav>
        <ul>
          {/*Para redireccionar de forma SPA, se debe hacer uso de "NavLink" o "Link" y no de "href".*/}
          <li><NavLink to="/" className={({isActive}) => { return isActive ? "activo" : ""; }}>Inicio</NavLink></li> {/*Utilizar "NavLink" para menús de navegación.*/}
          <li><NavLink to="/quienes-somos" className={({isActive}) => { return isActive ? "activo" : ""; }}>Quienes Somos</NavLink></li>
          <li><NavLink to="/contacto" className={({isActive}) => { return isActive ? "activo" : ""; }}>Contacto</NavLink></li>
          <li><NavLink to="/parametros-obligatorios/Daniel/Alvarez" className={({isActive}) => { return isActive ? "activo" : ""; }}>Parametros Obligatorios</NavLink></li>
          <li><NavLink to="/parametros-opcionales/Daniel/Alvarez" className={({isActive}) => { return isActive ? "activo" : ""; }}>Parametros Opcionales</NavLink></li>
          <li><NavLink to="/redirigir" className={({isActive}) => { return isActive ? "activo" : ""; }}>Redirigir</NavLink></li>
          <li><NavLink to="/panel-control" className={({isActive}) => { return isActive ? "activo" : ""; }}>Panel de Control</NavLink></li>
        </ul>
      </nav>
      {/*------Esto no debería ir acá------*/}
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route> {/*El atributo "path" indica el nombre de la ruta y el atributo "element" indica el componente a cargar.*/}
        <Route path="/quienes-somos" element={<QuienesSomos></QuienesSomos>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route> {/*Ruta para página no existente (Error 404).*/}
        <Route path="/parametros-obligatorios/:parametro1/:parametro2" element={<ParametrosObligatorios></ParametrosObligatorios>}></Route> {/*Enviando 2 parámetros obligatorios.*/}
        <Route path="/parametros-opcionales" element={<ParametrosOpcionales></ParametrosOpcionales>}> {/*Enviando 2 parámetros opcionales (Cada parámetro opcional debe estar anidado dentro de otro).*/}
          <Route path=":parametro1">
            <Route path=":parametro2"></Route>
          </Route>
        </Route>
        <Route path="/redirigir" element={<Redirigir></Redirigir>}></Route>
        <Route path="/fuiste-redirigido" element={<FuisteRedirigido></FuisteRedirigido>}></Route>
        <Route path="/panel-control*" element={<PanelControl></PanelControl>}> {/*Creando ruta principal (Layout).*/}
          <Route path="agregar" element={<Agregar></Agregar>}></Route> {/*Creando sub-ruta (Componente que se carga en el layout).*/}
          <Route path="mostrar" element={<Mostrar></Mostrar>}></Route>
          <Route path="modificar" element={<Modificar></Modificar>}></Route>
          <Route path="eliminar" element={<Eliminar></Eliminar>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
