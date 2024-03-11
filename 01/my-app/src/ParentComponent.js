import React from 'react';

// Child component 1 as props
const ChildComponent1 = () => {
  return <p>This is ChildComponent1</p>;
};

// Child component 2 as props
const ChildComponent2 = () => {
  return <p>This is ChildComponent2</p>;
};
const data = "this is data String props";
const arr = [1, 2, 3, 5, 5];

// Parent component
const ParentComponent = () => {
  return (
    <div>
      <p><b>Parent Component</b></p>
      <ul>
        <li>{/* Passing ChildComponent1 as a prop */}
          <ChildComponentWrapper data={data} childComponent={<ChildComponent1 />} />
        </li>
        <li>
          {/* Passing ChildComponent2 as a prop */}
          <ChildComponentWrapper data={arr} childComponent={<ChildComponent2 />} />
        </li>
      </ul>
    </div>
  );
};

// Wrapper component to render the child component passed as prop
const ChildComponentWrapper = ({ data, childComponent }) => {
  return (
    <div>
      <p>Child ChildComponentWrapper</p>
      {/* Rendering the child component */}
      {childComponent}
      {JSON.stringify(data)}
    </div>
  );
};



export default ParentComponent;
