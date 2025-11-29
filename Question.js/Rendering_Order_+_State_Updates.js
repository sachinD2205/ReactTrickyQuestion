import React, { useState } from "react";

function TrickyRender() {
  const [text, setText] = useState("A");

  const handleClick = () => {
    setText(text + "B");
    setText(text + "C");
  };

  // When the button is clicked, it will display "AB".
  // This happens because both setText calls use the same stale value of text ("A").
  // Therefore, both calls effectively do setText("A" + "B") and setText("A" + "C"),
  // with the second call overwriting the first one.

  // To fix this and have the button display "ABC" when clicked,
  // we can use the functional update form of setState:
  /*
  const handleClick = () => {
    setText(prevText => prevText + "B");
    setText(prevText => prevText + "C");
  };
  */

  return <button onClick={handleClick}>{text}</button>;
}
export default TrickyRender;
//! Question:
// What will be displayed on the button after it is clicked?
// Explain why this happens.
// How can you modify the handleClick function so that the button displays "ABC" when clicked?