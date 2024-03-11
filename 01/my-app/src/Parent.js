import React from 'react'
import Child from './Child'

export default function Parent() {

  const data = "This is parent data!";

  // Child component 2 as props
  const ChildComponent2 = () => {
    return <p>component as props 'ChildComponent2'</p>;
  };
  const arr = [1, 2, 3, 5, 5, "Array"];

  return (
    <div>
      <p>Parent Component</p>
      <Child data={data} />
      <Child data={arr} />
      <Child data={<ChildComponent2 />} />
    </div>
  )
}
