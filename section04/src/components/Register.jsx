import React, { useRef, useState } from "react";

function Register() {
  const [input, setInput] = useState("");

  let count = 0;

  function onChange(e) {
    count++;
    console.log(count);
    setInput(e.target.value);
  }

  return (
    <div>
      <input
        placeholder="텍스트를 입력하세요"
        onChange={onChange}
        value={input}
      />
    </div>
  );
}

export default Register;
