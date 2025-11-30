import React,{useEffect,useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={increment}>{count}</button>;
}

export default Counter;

//! Question:
// What will be displayed on the button after it is clicked?
// Explain why this happens.
// How can you modify the increment function so that the button displays "3" when clicked?
// Answer:
// The button will display "1" after it is clicked.
// This happens because React batches state updates for performance reasons.
// In the increment function, all three setCount calls use the same stale value of count (which is 0 initially).
// Therefore, each call effectively does setCount(0 + 1), and the last call overwrites the previous ones.

// To have the button display "3" when clicked, you can use the functional update form of setState:
  /*
  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
  */