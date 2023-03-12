import { useState } from "react";

export function TodoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="todolist">
      <h1>My To-Do List</h1>
      <input
        className="input"
        placeholder="What needs to be done?"
        value={input}
        onChange={(ev) => {
          setInput(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            const newList = [{ task: input, done: false }, ...list];
            setList(newList);
            setInput("");
          }
        }}
      />
      <ul>
        {list.map((item, index) => {
          if (item.done) return null;
          return (
            <li key={index}>
              {item.task}

              <button
                className="button"
                onClick={() => {
                  const newList = [...list];
                  newList[index].done = true;
                  setList(newList);
                }}
              >
                <bold>X</bold>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="counter">
        {list.filter((items) => !items.done).length} items left
      </div>
    </div>
  );
}
