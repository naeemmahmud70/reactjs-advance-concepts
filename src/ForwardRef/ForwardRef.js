import React, { forwardRef } from "react";

const ForwardRef = ({ type, placeholder }, ref) => {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
};
const forwardedInputRef = forwardRef(ForwardRef);

export default forwardedInputRef;
