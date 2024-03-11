import './App.css';
import Login from './Login';
import StateImmutabilityCounter from './StateImmutabilityCounter';
import StateCounterClass from './stateCounterCLass';
import StateFunctional from './stateFunctional';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <StateCounterClass />
      <StateFunctional />
      <Login />
      <StateImmutabilityCounter />
      

    </div>
  );
}

export default App;
