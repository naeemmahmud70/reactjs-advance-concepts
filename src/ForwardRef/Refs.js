import React, { useEffect, useRef, useState } from "react";
import ForwardRef from "./ForwardRef";

const Refs = () => {
//   const [name, setName] = useState("");
  const inputElement = useRef("");
  console.log(inputElement);

//   const clearInput = () => {
//     setName("");
//     inputElement.current.focus();
//   };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <div>
      {/* <div>
        <input
          ref={inputElement}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={clearInput}>Reset</button>
      </div> */}
      <div>
        <ForwardRef
          ref={inputElement}
          type="text"
          placeholder="enter comething"
        ></ForwardRef>
      </div>
    </div>
  );
};

export default Refs;
