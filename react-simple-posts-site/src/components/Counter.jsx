import React, { useState } from 'react';

//New
const Counter = function () {
  const [counter, setCount] = useState(0);

  function increment() {
    setCount(counter + 1);
  }

  function dearement() {
    setCount(counter - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={dearement}>Decrement</button>
    </div>
  )
}
 
export default Counter;