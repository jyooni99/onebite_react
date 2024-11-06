import React, { useEffect } from "react";

function Even() {
  useEffect(() => {
    console.log("Even is mount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Even is unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
}

export default Even;
