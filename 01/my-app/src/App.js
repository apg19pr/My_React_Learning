import './App.css';
import Header from './header';
import Fruits from './Fruits';
import PropsLearning from './PropsLearning';
import Parent from './Parent';
import ParentComponent from './ParentComponent';
import ConditionalComponent from './ConditionalComponent';
import ClassComponent from './ClassComponent';
import Counter from './counter';
import SpreadOPprops from './spreadOPprops'


export default function App() {
  let arr = [1, 4, 5]
  const object = {
    name1: "abhishek",
    city1: "Mumbai",
    Education: "MSc",
    myArr: ["dbs", "bjbd", "vjnj"]
  }

  const arrayProp = [1, 2, 3, 4, 5];
  const objectProp = { name: 'John', age: 30 };
  const numberProp = 42;
  const funcProp = () => 'Hello from function';
  const stringProp = 'Hello from string';

  const myProps = {
    prop1: 'prop1 Value 1',
    prop2: 'prop2 Value 2'
  };

  return (
    <div className="App">
      <Header />
      <Header name="Abhishek" city="Mumbai" />
      <Header name="Abhishek Prajapati" city="Pune" arr={arr} object={object} />
      <Fruits />
      <PropsLearning
        arrayProp={arrayProp}
        objectProp={objectProp}
        numberProp={numberProp}
        funcProp={funcProp}
        stringProp={stringProp}
      />
      <SpreadOPprops {...myProps} />
      <Parent />
      <ParentComponent />
      <ConditionalComponent />
      <ClassComponent defaultName="default_Name_ABHI" />
      <Counter />
    </div>
  );
}



