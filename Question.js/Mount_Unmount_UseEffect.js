
import React , {useState,useEffect}  from "react"

function Test() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      {flag && <Child />}
      <button onClick={() => setFlag(!flag)}>Toggle</button>
    </>
  );
}

function Child() {
  useEffect(() => {
    console.log("mounted");
    return () => console.log("unmounted");
  }, []);

  return <h1>Child</h1>;
}

export default Test;


//! note
// initially it doest print any console.log
// after that when click mount and umount it continue doing when click
