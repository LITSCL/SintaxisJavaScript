import logo from './logo.svg';
import './App.css';
import { HookUseFormato } from './components/HookUseFormato';
import { HookUseFormulario } from './components/HookUseFormulario';
import { HookUseAjax } from './components/HookUseAjax';

function App() {
  return (
    <div className="App">
      {/*<HookUseFormato></HookUseFormato>*/}
      {/*<HookUseFormulario></HookUseFormulario>*/}
      <HookUseAjax></HookUseAjax>
    </div>
  );
}

export default App;
