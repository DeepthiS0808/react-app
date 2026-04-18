import React from "react";
import TodoItem from "./todoitem";

function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center text-slate-400 py-10 italic drop-shadow-md">
        No tasks yet! The canvas is blank.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
export default TodoList;