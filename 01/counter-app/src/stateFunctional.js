import React, { useState } from 'react'

export default function StateFunctional() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const incrementCount = () => {
    setCount( count + 1 );
    setName("Abhi")
  };

  return (
    <div className='section'>
      <p><b>StateFunctional (Functional Component)</b></p>
      <p>Count: <b>{count}</b> & Name: <b>{name}</b></p>
      <button onClick={incrementCount}>incrementCount</button>
    </div>
  )
}
