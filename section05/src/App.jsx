import "./App.css";
import { useState } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/viewer";

function App() {
  const [count, setCount] = useState(0);

  function handleCount(e) {
    setCount(count + Number(e.target.value));
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleCount={handleCount} />
      </section>
    </div>
  );
}

export default App;
