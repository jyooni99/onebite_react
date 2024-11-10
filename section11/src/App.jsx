import "./App.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
function App() {
  const nav = useNavigate();
  const onClickBtn = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/New"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
      </div>
      <button onClick={onClickBtn}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
