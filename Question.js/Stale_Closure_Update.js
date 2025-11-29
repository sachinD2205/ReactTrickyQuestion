import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(()=> count + 1);
      console.log("Inside setInterval:", count);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // useEffect triggered only once on mount due to empty dependency array
  // in the display we see the count 1 because we do count + 1 on the first interval tick
  // however, the console will always log 0 because the count variable inside the setInterval callback is captured from the initial render


  //! fix this with functional update form of setCount
  // setCount(prevCount => prevCount + 1);

  //! or add count to the dependency array of useEffect

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;


//! what will be logged to the console when this component is mounted?
//! what will be displayed on the screen?
//! what issue is present in this code 
