import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  // it displays the number of seconds passed since the component mounted
  // but here the useEffect runs on every update of seconds,
  // creating a new interval each time and clearing the previous one,
  // leading to inefficient behavior

  //! solution:
  // use functional update form to avoid adding seconds to the dependency array
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  */


  return <h1>{seconds}</h1>;
}

export default Timer;

//! Question:
// What’s wrong with this code?
// What happens when it runs?
// How would you fix it efficiently?