import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponenteConFragment } from './components/ComponenteConFragment';
import { ComponenteConDiv } from './components/ComponenteConDiv';
import { VariablesEnComponentes } from './components/VariablesEnComponentes';
import { InterpolarVariablesEnComponentes } from './components/InterpolarVariablesEnComponentes';
import { ComunicacionComponentes } from './components/ComunicacionComponentes';
import { EventosEnComponentes } from './components/EventosEnComponentes';

interface FichaMedica {
  altura: string,
  peso: string,
  presionArterial: number
}

function App(): JSX.Element {
  const fichaMedica: FichaMedica = {
    altura: "1.80cm",
    peso: "80kg",
    presionArterial: 125
  }

  return (
    <div className="App">
      <ComponenteConFragment></ComponenteConFragment>
      <ComponenteConDiv></ComponenteConDiv>
      <VariablesEnComponentes></VariablesEnComponentes>
      <InterpolarVariablesEnComponentes></InterpolarVariablesEnComponentes> 
      <ComunicacionComponentes rut="19.757.106-3" nombre="Daniel" apellido="Alvarez" fichaMedica={fichaMedica}></ComunicacionComponentes> {/*Enviando datos a un componente hijo.*/}
      <EventosEnComponentes></EventosEnComponentes>
    </div>
  );
}

export default App;
