import './App.css';
import Login from './Login';
import StateImmutabilityCounter from './StateImmutabilityCounter';
import StateCounterClass from './stateCounterCLass';
import StateFunctional from './stateFunctional';
import Body from './component/Body';
import appStore from './redux/appStore';
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <StateCounterClass />
      <StateFunctional />
      <Login />
      <StateImmutabilityCounter />

      <Provider store={appStore}>
        <Body />
      </Provider>


    </div >
  );
}

export default App;
