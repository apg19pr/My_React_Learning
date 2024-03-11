import React, { useState } from 'react'

export default function StateImmutabilityCounter() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({ name: 'John', age: 30 });

  // const updateName = newName => {
  //   setUser(prevUser => ({ ...prevUser, name: newName }));
  // };


  const incrementCount = () => {
    // Directly modifying state (not immutable)
    // This approach is incorrect and may lead to unexpected behavior
    // count++;
    // setCount(count);

    // Updating state immutably
    setCount(prevCount => prevCount + 1);
    setUser(prevUser => ({ ...prevUser, name: 'newName is Abhishek ' }));

  }
  return (
    <div className='section'>
      <p><b>StateImmutabilityCounter</b></p>
      <button onClick={incrementCount}>StateImmutabilityCounter {count}</button>
      <p> {user.name}</p>

    </div>
  )
}
