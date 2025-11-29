import React, { useState, useEffect } from "react";

const  TrickyCounter = () => {
  const [count, setCount] = useState(0);

  // useSetState's functional update form is not used here,
  // leading to stale closure issues
  // move console.log outside setInterval to see the correct value

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
      setCount(count + 1);
      console.log("Inside interval:", count);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

export default TrickyCounter;


//! Question:
// What will the UI display after 1 second?
// What will the console print?
// How would you fix it so that the counter increments by 2 each second correctly?