import React from "react";

function Controller({ count, setCount }) {
  const countArr = [-1, -10, -100, +100, +10, +1];

  function handleCount(e) {
    setCount(count + Number(e.target.id));
  }

  return (
    <div className="btnBox">
      {countArr.map((count, index) => {
        return (
          <button key={index} id={count} onClick={handleCount}>
            {count}
          </button>
        );
      })}
    </div>
  );
}

export default Controller;
