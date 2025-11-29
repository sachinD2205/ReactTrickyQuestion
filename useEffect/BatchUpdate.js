import React, { useState } from "react";

function BatchTest() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // Due to React's batching, the above three updates will result in a single increment of 1

  // To fix this and ensure the count increases by 3, use the functional update form:
//   const handleClick = () => {
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//   };

  return <button onClick={handleClick}>{count}</button>;
}
export default BatchTest;

//! Question:
// What will the UI show after clicking the button once?
// How can you modify it so that the count actually increases by 3?
// Hint: think about React batching and functional updates.