import { useState } from "react";
import { useTodoList } from "./services/useTodoList";

export function TodoList() {
  const todo = useTodoList();

  return (
    <div className="todolist">
      <h1>My To-Do List</h1>
      <input
        className="input"
        placeholder="What needs to be done?"
        value={todo.task}
        onChange={(ev) => {
          todo.changeTask(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            todo.addTask();
          }
        }}
      />
      <ul>
        {todo.list.map((item, index) => {
          if (item.done) return null;
          return (
            <li key={index}>
              {item.task}

              <button
                className="button"
                onClick={() => {
                  todo.completeTask(index);
                }}
              >
                <bold>X</bold>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="counter">
        {todo.list.filter((items) => !items.done).length} items left
      </div>
    </div>
  );
}
