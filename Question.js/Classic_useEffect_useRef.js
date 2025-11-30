
import React,{useState,useEffect,useRef} from 'react'
function Test() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
    console.log("effect:", countRef.current);
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Click {count} {countRef.current}
    </button>
  );
}

export default Test;

//! note 
// when we add useEffect with dependency it will trigger after every rerender happend
// in this case console and count value will be same 
// but countRef value also same . but on screen countRef value behind one update 
// it is because countRef value updated after rerendering done so and it does not trigger rerendering 
