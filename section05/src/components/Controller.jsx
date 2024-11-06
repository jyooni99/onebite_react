import React from "react";

function Controller({ handleCount }) {
  const countArr = [-1, -10, -100, +100, +10, +1];

  return (
    <div className="btnBox">
      {countArr.map((count, index) => {
        return (
          <button key={index} value={count} onClick={(e) => handleCount(e)}>
            {count}
          </button>
        );
      })}
    </div>
  );
}

export default Controller;
