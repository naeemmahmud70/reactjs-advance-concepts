import React from "react";
import Counter from "./Counter";

const ClickCounter = (props) => {
  const { counter, increment } = props;
  return (
    <div>
      <button type="button" onClick={increment}>
        Clicked {counter} times.
      </button>
    </div>
  );
};

export default Counter(ClickCounter);
