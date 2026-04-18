import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleChange} className="flex gap-3">
      <div className="relative flex-1 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-30 group-focus-within:opacity-100 transition duration-500"></div>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="relative w-full px-5 py-3 bg-slate-900 border-none text-slate-100 rounded-xl focus:outline-none placeholder-slate-400 font-medium z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <button
        type="submit"
        className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:-translate-y-1 transition-all active:translate-y-0"
      >
        Add
      </button>
    </form>
  );
}
export default TodoInput;