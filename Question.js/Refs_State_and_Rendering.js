import React,{useEffect,useState,useMemo,useRef} from 'react';

const Test = () => {
  const [count,setCount]=useState(0)
  const countRef = useRef(0)
  
  const handleRefButton = () => {
    countRef.current++;
  }
  
  const handleStateButton = () => {
    setCount((count)=> count+1)
  }
  
  console.log("component_is_rerendered")
  return (
    <div>
      <button onClick={handleRefButton}> Ref_Button {countRef.current}</button>
      <button onClick={handleStateButton} > State_Button  {count}</button>
    </div>)
   
}



export default Test;


//! Note : 
// ref does not trigger a re-render when its value changes. so when rendered happend then only value will be update on the screen
// but state triggers a re-render when its value changes. so when rendered happend then value will be update on the screen
