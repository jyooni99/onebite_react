import React, { useState, useRef } from "react";
import "./Editor.css";

function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onSubmit() {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
