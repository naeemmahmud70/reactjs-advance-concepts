import React, { useState } from "react";

const Counter = (WrappedComponent) => {
  const NewCounter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter(counter + 1);
    };
    return (
      <div>
        <WrappedComponent counter={counter} increment={increment} />
      </div>
    );
  };
  return NewCounter;
};

export default Counter;
