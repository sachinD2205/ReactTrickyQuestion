
import React ,{useEffect,useState} from 'react';
function Count () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("Count:", count);
    }, 1000);
  }, []);

  return <h1>{count}</h1>;
}

export default Count;


//! Question:
// What will be logged to the console one second after the component mounts?
// Explain why this happens.
// How can you modify the useEffect so that it logs the updated count value every second?
// Answer:
// It will log "Count: 0" to the console one second after the component mounts.
// This happens because the useEffect has an empty dependency array, so it only runs once when the component mounts.
// At that time, the count state is 0, and the setTimeout callback captures this initial value of count due to JavaScript's closure behavior.
// To log the updated count value every second, you can modify the useEffect to include count in its dependency array and set up a recurring interval instead of a single timeout: