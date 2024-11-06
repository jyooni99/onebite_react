import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const isMount = useRef(false);

  //mount
  useEffect(() => {
    console.log(`Counter is mount`);
  }, []);

  //update
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log(`update`);
  });

  //unMount

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && count !== 0 ? <Even /> : null}
      </section>
      <section>
        <Controller count={count} setCount={setCount} />
      </section>
    </div>
  );
}

export default App;
