import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  const variable: number = 1;
  
  return (
    <div className="App">
      -------------------------------- IF --------------------------------
      {
        variable != null && ( //If.
          <h2>Condición Cumplida</h2>
        )
      }
      -------------------------------- IF Ternario --------------------------------
      {variable != null && (<h2>Condición Cumplida</h2>)}
      -------------------------------- IF-ELSE --------------------------------
      {
        variable != null ? ( //If.
          <h2>Entraste al Bloque IF</h2>
        )
        : ( //Else.
          <h2>Entraste al Bloque ELSE</h2>
        )
      }
            -------------------------------- IF-ELSE Ternario --------------------------------
      {variable != null ? (<h2>Entraste al Bloque IF</h2>) : (<h2>Entraste al Bloque ELSE</h2>)}
      -------------------------------- IF-ELSE (AND) --------------------------------
      {
        variable != null && variable != 1 ? ( //If AND.
        <h2>Entraste al Bloque IF</h2>
        )
        : ( //Else.
          <h2>Entraste al Bloque ELSE</h2>
        )
      }
      -------------------------------- IF-ELSE (AND) Ternario --------------------------------
      {variable != null && variable != 1 ? (<h2>Entraste al Bloque IF</h2>) : (<h2>Entraste al Bloque ELSE</h2>)}
      -------------------------------- IF-ELSE (OR) --------------------------------
      {
        variable != null || variable != 1 ? ( //If OR.
          <h2>Entraste al Bloque IF</h2>
        )
        : ( //Else.
          <h2>Entraste al Bloque ELSE</h2>
        )
      }
      -------------------------------- IF-ELSE (OR) Ternario --------------------------------
      {variable != null || variable != 1 ? (<h2>Entraste al Bloque IF</h2>) : (<h2>Entraste al Bloque ELSE</h2>)}
    </div>
  );
}

export default App;
