import React, { useRef, useState } from "react";
import { Connect } from "../utils/store";

function Add({ dispatch }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: value,
    });
  }

  function handleChange() {
    const inputValue = inputRef.current.value;
    setValue(inputValue);
  }

  return (
    <div className="view-add">
      <form>
        <input
          ref={inputRef}
          onChange={handleChange}
          value={value}
          type="text"
        />
        <button onClick={handleClick}>新增項目</button>
      </form>
    </div>
  );
}

export default Connect(({ todo }) => {
  return {
    list: todo.list,
  };
})(Add);
