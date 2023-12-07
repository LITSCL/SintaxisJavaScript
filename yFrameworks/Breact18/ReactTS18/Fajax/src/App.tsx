import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AjaxConFetchYThen } from './components/AjaxConFetchYThen';
import { AjaxConFetchYAwait } from './components/AjaxConFetchYAwait';
import { AjaxCapturarError } from './components/AjaxCapturarError';

function App(): JSX.Element {  
  return (
    <div className="App">
      <AjaxConFetchYThen></AjaxConFetchYThen>
      <AjaxConFetchYAwait></AjaxConFetchYAwait>
      <AjaxCapturarError></AjaxCapturarError>
    </div>
  );
}

export default App;
