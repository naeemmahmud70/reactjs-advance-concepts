import React from "react";
import Counter from "./Counter";

const HoverCounter = (props) => {
  const { counter, increment } = props;
  return (
    <div>
      <h1 onMouseOver={increment}>{counter} times has been hover on this line.</h1>
    </div>
  );
};

export default Counter(HoverCounter);
