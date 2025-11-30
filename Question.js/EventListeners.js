import React, { useEffect, useState, useMemo } from "react";

const Parent = () => {
  const [value, setValue] = useState(0);
  const [isParent, setIsParent] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setValue((value) => value + 1);
          setIsParent(!isParent);
        }}
      >
        {" "}
        Parent : {value}
      </button>
      {}
      {isParent && <Child />}
    </div>
  );
};

function Child() {

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resized");
    });
  }, []);

  return <div>Child</div>;
}

export default Parent;

//! Question:
// What is the memory leak?
// How do you fix it?

// Answer:
// The memory leak occurs because the Child component adds a "resize" event listener to the window object when it mounts, but it does not remove that event listener when the component unmounts.
// As a result, if the Parent component toggles the Child component on and off multiple times, multiple event listeners will accumulate on the window object, leading to increased memory usage and potential performance issues.

// To fix this issue, you can return a cleanup function from the useEffect hook in the Child component that removes the event listener when the component unmounts. Here’s how you can modify the useEffect:

/*
useEffect(() => {
  const handleResize = () => {
    console.log("resized");
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
*/
// This cleanup function ensures that the event listener is properly removed when the Child component is unmounted, preventing memory leaks.