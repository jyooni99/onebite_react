import "./App.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Diary" element={<Diary />} />
      </Routes>
    </>
  );
}

export default App;
