import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>c ount: {count}</p>
      <button onClick={upCount}>1씩 추가</button>
    </>
  );
}

export default Button;
