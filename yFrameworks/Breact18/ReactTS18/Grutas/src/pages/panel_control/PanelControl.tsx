import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const PanelControl: () => JSX.Element = () => {
  return (
    <>
      <h1>Página de Panel de Control</h1>
      <p>Esta es la página de panel de control</p>
    
      <ul>
        <li><Link to="/panel-control/agregar">Agregar</Link></li>
        <li><Link to="/panel-control/mostrar">Mostrar</Link></li>
        <li><Link to="/panel-control/modificar">Modificar</Link></li>
        <li><Link to="/panel-control/eliminar">Eliminar</Link></li>
      </ul>

      <Outlet></Outlet> {/*El componente "Outlet" permite cargar el componente de la sub-ruta.*/}
    
      <Link to="/">Volver al inicio</Link> {/*Utilizar "Link" para enlaces sueltos.*/}
    </>
  );
}
