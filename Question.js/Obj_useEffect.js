import React,{useEffect,useState,useMemo} from 'react';

function Counter() {
  const [value,setValue]= useState(0)
  
// const obj = { a: 1 };


// const obj = useMemo(()=> { a: 1 })

useEffect(() => {
  console.log("effect ran");
}, [obj]);


  return <div><button onClick={()=> {setValue((value)=>value+1)}}>{value}</button></div>;
}

export default Counter;


//! Question:
// What will happen when this component is rendered?
// Explain why this happens.    
// How can you fix the code to avoid any potential issues?// 
// Answer:
// When this component is rendered, it will cause the useEffect to run on every render.
// This happens because the dependency array of the useEffect contains obj, which is defined as a new object literal on every render.
// In JavaScript, object literals are reference types, and each time the component renders, a new object is created in memory.
// Therefore, React sees that obj has changed (because its reference is different), causing the useEffect to run again.

// To fix this issue, you can use the useMemo hook to memoize the object so that it only changes when its dependencies change.
// For example:
  /*
  const obj = useMemo(() => ({ a: 1 }), []);
  */
// This way, obj will remain the same across renders unless its dependencies change, preventing unnecessary executions of the useEffect.
