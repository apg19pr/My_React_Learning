import './App.css';
import SpreadOPprops from './spreadOPprops'

export default function App() {

  const myProps = {
    prop1: 'prop1 Value 1',
    prop2: 'prop2 Value 2'
  };


  return (
    <div className="App">
      <SpreadOPprops {...myProps} />
    </div>
  );
}



