
import React , {useState,useEffect,useMemo}  from "react"

function Test() {
  
  const expensiveFn = () => {
    console.log("expensiveFn")
    return 3
  }

  
  const result = useMemo(() => expensiveFn(), []);
  // const result = useMemo(expensiveFn,[])
  // const result = useMemo(expensiveFn(),[]) 

  const [flag, setFlag] = useState(false);

  return (
    <>
      <button onClick={() => setFlag(!flag)}>Toggle</button>
      {result}
    </>
  );
}



export default Test;


//! const result = useMemo(expensiveFn(),[]) 
// this will create infinite rerender issue 
// expensive function called before rendering happen;