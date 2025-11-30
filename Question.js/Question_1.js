import React,{useEffect,useState} from 'react';

function Counter() {
  const [value,setValue]= useState()
  
useEffect(() => {
  setValue(Math.random());
}, [value]);


  return <div>{value}</div>;
}

export default Counter;


//! Question:
// What will happen when this component is rendered?
// Explain why this happens.
// How can you fix the code to avoid any potential issues?// Answer:
// When this component is rendered, it will cause an infinite loop of re-renders.;
  
