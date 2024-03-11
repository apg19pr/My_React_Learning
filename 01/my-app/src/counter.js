import React, { useState } from 'react'
import Counter1 from './counter1'
import Counter2 from './counter2'

export default function Counter() {

  const [counter1, setCounter1] = useState(0);
  const increseCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const [counter2, setCounter2] = useState(0);
  const increseCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <div>
      <Counter1 value={counter1} onClick={increseCounter1} />
      <Counter2 value={counter2} onClick={increseCounter2} />

      {/* calling counter 1 and 2 together and re rendering it  unnecessarily */}
    </div>

  )
}


