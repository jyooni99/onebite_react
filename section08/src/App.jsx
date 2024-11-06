import "./App.css";
import { useRef, useReducer } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "CHECKED":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);

    default:
      return state;
  }
}

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "점심 챙겨먹기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "오픽 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  function onCreate(content) {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }

  function onChecked(targetId) {
    dispatch({
      type: "CHECKED",
      targetId: targetId,
    });
  }

  function onDelete(targetId) {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onChecked={onChecked} onDelete={onDelete} />
    </div>
  );
}

export default App;
