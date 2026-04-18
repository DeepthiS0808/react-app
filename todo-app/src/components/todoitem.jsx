import React from "react";

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div className="group relative flex items-center justify-between p-4 bg-slate-800/60 hover:bg-slate-800/80 border border-white/10 hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
      <p className="text-slate-100 font-medium break-words w-[80%] drop-shadow-sm">{todo}</p>
      <button
        onClick={() => deleteTodo(index)}
        className="opacity-0 group-hover:opacity-100 p-2.5 text-rose-400 hover:text-rose-100 hover:bg-rose-500 rounded-lg hover:shadow-[0_0_15px_rgba(244,63,94,0.8)] transition-all duration-300 transform hover:scale-110"
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 drop-shadow-lg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
export default TodoItem;
