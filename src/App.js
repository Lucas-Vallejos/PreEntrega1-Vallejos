import logo from './logo.svg';
import './App.css';
import { Componente } from './componente/Componente';
import { ComponenteDos } from './componente/ComponenteDos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Esto es react
        </p>

        <Componente/>
        <ComponenteDos/>
      </header>
    </div>
  );
}

export default App;
