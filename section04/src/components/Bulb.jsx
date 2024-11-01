import { useState } from "react";

function Bulb() {
  const [light, setLight] = useState("OFF");

  return (
    <>
      <h1 style={{ backgroundColor: light === "ON" ? "orange" : "lightgray" }}>
        {light}
      </h1>

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </>
  );
}

export default Bulb;
